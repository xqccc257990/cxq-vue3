<template>
  <div class="role-list">
    <app-tree :opt="opt" ref="appTree">
      <template slot="info">
        <el-button
          class="role_list_save"
          @click="saveRoleMenu"
          v-if="activeName == 'tree' && menuData.length"
        >保存</el-button>
        <el-tabs v-model="activeName" class="info-box">
          <el-tab-pane label="角色信息" name="form">
            <el-form :model="form" label-width="80px" disabled>
              <el-form-item label="角色名称">
                <el-input v-model="form.rolename"></el-input>
              </el-form-item>
              <!-- <el-form-item label="上级角色">
                <el-input v-model="form.parent"></el-input>
              </el-form-item>-->
              <el-form-item label="角色类型">
                <el-input v-model="form.roleTypeStr"></el-input>
              </el-form-item>
              <el-form-item label="添加时间">
                <el-input v-model="form.createdDate"></el-input>
              </el-form-item>
              <el-form-item label="角色描述">
                <el-input type="textarea" v-model="form.description"></el-input>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="操作权限" name="tree">
            <el-tree
              default-expand-all
              ref="trees"
              :data="menuData"
              :default-checked-keys="opt.defaultChecked"
              node-key="id"
              show-checkbox
              check-strictly
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
      nowRoleId: "", // 当前选中角色id
      opt: {
        title: "角色管理",
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
          buttons: [
            {
              type: 0,
              on() {
                _this.$router.push("/main/role/detail/add/0");
              }
            },
            {
              type: 1,
              on(data) {
                _this.$router.push(
                  "/main/role/detail/edit/" + data.data.roleId
                );
              }
            },
            {
              type: 2,
              on(data) {
                _this
                  .$confirm("此操作将删除选择项, 是否继续?", "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning"
                  })
                  .then(() => {
                    var dto = {
                      roleid: data.list[0].roleId
                    };
                    _this
                      .post("/user-service/role/deleteRole", dto)
                      .then(function() {
                        _this.$message({
                          showClose: true,
                          message: "删除成功!",
                          type: "success"
                        });
                        data.refresh();
                      });
                  })
                  .catch(function() {});
              }
            }
          ],
          get(opt) {
            _this
              .post(
                "user-service/apartmentuser/selectRoleList",
                {
                  roleType: "1"
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
            let menuGetList = [];

            _this.post("user-service/menu/queryallmenu", {}).then(res => {
              menuGetList = res;
              // 获取角色信息
              _this
                .post("user-service/apartmentuser/queryRoleInfo", {
                  roleId: data.roleId
                })
                .then(res => {
                  res.roleTypeStr = ["系统角色", "非系统角色"][
                    Number(res.roletype) - 1
                  ];
                  _this.form = res;
                });
              // 获取操作权限
              _this
                .post("user-service/apartmentuser/queryAouth", {
                  roleId: data.roleId
                })
                .then(res => {
                  if (!res) {
                    res = [];
                  }
                  let nowRoleId = [];
                  res = JSON.parse(
                    JSON.stringify(res).replace(/menuId/g, "id")
                  );
                  menuGetList = JSON.parse(
                    JSON.stringify(menuGetList).replace(/menuId/g, "id")
                  );
                  menuGetList = JSON.parse(
                    JSON.stringify(menuGetList).replace(/title/g, "label")
                  );
                  menuGetList = JSON.parse(
                    JSON.stringify(menuGetList).replace(
                      /childMenus/g,
                      "children"
                    )
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
                  console.log(menuGetList)
                  _this.opt.defaultChecked = nowRoleId;
                });
            });
          }
        }
      },
      activeName: "form",
      form: {
        rolename: "",
        roleTypeStr: "",
        createdDate: "",
        description: ""
      },
      // 操作权限列表
      menuData: []
    };
  },
  methods: {
    saveRoleMenu() {
      if (!this.nowRoleId) {
        this.$message({
          showClose: true,
          message: "请选择角色",
          type: "warning"
        });
        return;
      }
      let nowMenu = this.$refs.trees.getCheckedKeys();
      nowMenu.forEach(data => {
        data = data.toString();
      });
      this.post("user-service/role/updateRoleMenu", {
        roleId: this.nowRoleId,
        menuIdList: nowMenu
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
