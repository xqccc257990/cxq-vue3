<template>
  <div class="role-list">
    <app-tree :opt="opt" ref="appTree">
      <template slot="info">
        <el-button
          class="role_list_save"
          @click="saveRoleMenu"
          v-if="menuData.length && isShowSave"
        >保存</el-button>
        <el-tabs v-model="activeName" class="info-box">
          <el-tab-pane label="后台权限" name="1">
            <el-tree
              default-expand-all
              ref="adminTrees"
              :data="menuData"
              :default-checked-keys="opt.defaultChecked"
              node-key="id"
              show-checkbox
              :props="{
                children: 'children',
                label: 'label'
              }"
            ></el-tree>
          </el-tab-pane>
          <el-tab-pane label="小程序权限" name="2" v-if="isShowWxAuthPane">
            <el-tree
              default-expand-all
              ref="wxTrees"
              :data="menuData"
              :default-checked-keys="opt.defaultChecked"
              node-key="id"
              show-checkbox
              :props="{
                children: 'children',
                label: 'label'
              }"
            ></el-tree>
          </el-tab-pane>
        </el-tabs>
      </template>
    </app-tree>
  </div>
</template>
<script>
export default {
  data() {
    let _this = this;
    return {
      isShowSave: false,
      isShowWxAuthPane: true,
      nowRoleId: "", // 当前选中角色id
      opt: {
        title: "权限管理",
        defaultChecked: [],
        on(data) {
          _this.post("/role/detail").then(data => {
            _this.form.name = data.name;
            _this.form.parent = data.parent;
            _this.form.typeStr = ["系统管理员", "普通用户"][data.type - 1];
            _this.form.datetimeStr = _this.format(data.datetime);
            _this.form.des = data.des;
          });
        },
        table: {
          isNotShowSelection: true,
          isShowHighliht: true,
          columns: [{ label: "角色名称", key: "roleName" }],
          buttons: [],
          get(opt) {
            _this
              .post(
                "user-service/apartmentuser/selectRoleList",
                {
                  roleType: "3"
                },
                {
                  contentType: "application/x-www-form-urlencoded",
                  isUseResponse: true
                }
              )
              .then(res => {
                _this.menuData = [];
                _this.form = {};
                opt.cb(res.data);
              });
          },
          onRow(data) {
            _this.nowRoleId = data.roleId;
            //如果是房管员，则不显示小程序权限
            // if (_this.nowRoleId == 6) {
            //   _this.isShowWxAuthPane = false;
            //   _this.activeName = "1";
            //   _this.getAdminAouth();
            // } else {
            //   _this.isShowWxAuthPane = true;
            //   if (_this.activeName == "1") {
            //     _this.getAdminAouth();
            //   } else {
            //     _this.getWxAouth();
            //   }
            // }
            _this.isShowWxAuthPane = true;
            if (_this.activeName == "1") {
              _this.getAdminAouth();
            } else {
              _this.getWxAouth();
            }
          }
        }
      },
      activeName: "1",
      // 操作权限列表
      menuData: []
    };
  },
  watch: {
    activeName(data) {
      if (this.nowRoleId != "") {
        if (data == "1") {
          this.getAdminAouth();
        } else {
          this.getWxAouth();
        }
      }
    }
  },
  methods: {
    getAdminAouth() {
      let _this = this;
      let menuGetList = [];
      _this.post("user-service/menu/queryLandlordToSubMenu").then(resData => {
        menuGetList = resData;
        // 获取操作权限
        _this
          .post("user-service/apartmentuser/queryAouth", {
            roleId: _this.nowRoleId
          })
          .then(res => {
            if (!res) {
              res = [];
            }
            let nowRoleId = [];
            res = JSON.parse(JSON.stringify(res).replace(/menuId/g, "id"));
            menuGetList = JSON.parse(
              JSON.stringify(menuGetList).replace(/menuId/g, "id")
            );
            menuGetList = JSON.parse(
              JSON.stringify(menuGetList).replace(/title/g, "label")
            );
            menuGetList = JSON.parse(
              JSON.stringify(menuGetList).replace(/childMenus/g, "children")
            );
            res.forEach(item => {
              nowRoleId.push(item.id);
              if (item.children && item.children.length) {
                item.children.forEach(datas => {
                  nowRoleId.push(datas.id);
                  if (datas.children && datas.children.length) {
                    nowRoleId.push(datas.parentId);
                    datas.children.forEach(childrenItem => {
                      nowRoleId.push(childrenItem.parentId);
                      nowRoleId.push(childrenItem.id);
                    });
                  }
                });
              }
            });
            _this.menuData = menuGetList;
            _this.opt.defaultChecked = nowRoleId;
          });
      });
    },
    getWxAouth() {
      let _this = this;
      let menuGetList = [];

      _this
        .post("user-service/menu/queryWxallmenu", {
          roleId: "2"
        })
        .then(resData => {
          menuGetList = resData;
          // 获取操作权限
          _this
            .post("user-service/apartmentuser/queryWxAouth", {
              roleId: _this.nowRoleId
            })
            .then(res => {
              if (!res) {
                res = [];
              }
              let nowRoleId = [];
              res = JSON.parse(JSON.stringify(res).replace(/menuId/g, "id"));
              menuGetList = JSON.parse(
                JSON.stringify(menuGetList).replace(/menuId/g, "id")
              );
              menuGetList = JSON.parse(
                JSON.stringify(menuGetList).replace(/title/g, "label")
              );
              menuGetList = JSON.parse(
                JSON.stringify(menuGetList).replace(/childMenus/g, "children")
              );
              res.forEach(item => {
                nowRoleId.push(item.id);
                if (item.children && item.children.length) {
                  item.children.forEach(datas => {
                    nowRoleId.push(datas.id);
                    if (datas.children && datas.children.length) {
                      nowRoleId.push(datas.parentId);
                      datas.children.forEach(childrenItem => {
                        nowRoleId.push(childrenItem.parentId);
                        nowRoleId.push(childrenItem.id);
                      });
                    }
                  });
                }
              });
              _this.menuData = menuGetList;
              _this.opt.defaultChecked = nowRoleId;
            });
        });
    },
    saveRoleMenu() {
      if (!this.nowRoleId) {
        this.$message({
          showClose: true,
          message: "请选择角色",
          type: "warning"
        });
        return;
      }
      let dom =
        this.activeName == "1" ? this.$refs.adminTrees : this.$refs.wxTrees;
      let nowMenu = dom.getCheckedKeys();
      let url = "user-service/role/landlordUpdateRoleMenu";
      nowMenu.forEach(data => {
        data = data.toString();
      });
      this.post(url, {
        roleId: this.nowRoleId,
        menuIdList: nowMenu,
        platType: this.activeName == "1" ? "0" : "1"
      }).then(data => {
        this.$message({
          showClose: true,
          message: "保存成功!",
          type: "success"
        });
      });
    }
  },
  activated() {
    console.log("role-list activated!!");
    //this.$refs.appTree.initList();
    this.nowRoleId = "";
    let menuGetList = this.cache.getLS("userInfo")["userMenuInfos"];
    menuGetList.forEach(item => {
      if (item.menuId == 25 && item.childMenus.length) {
        item.childMenus.forEach(items => {
          if (items.menuId == 27 && items.childMenus.length) {
            this.isShowSave = true;
          }
        });
      }
    });
  }
};
</script>
<style>
.role_list_save {
  position: absolute;
  right: 20px;
  top: 10px;
  z-index: 1111;
}
</style>
