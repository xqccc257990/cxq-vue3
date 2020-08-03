<template>
  <div class="role-detail">
    <app-detail :opt="opt" ref="detail"></app-detail>
  </div>
</template>
<script>
export default {
  data() {
    let _this = this;
    return {
      opt: {
        title: "角色详情",
        form: [
          {
            label: "角色名称",
            key: "rolename",
            rules: [{ required: true }]
          },
          // {
          //   label: "角色类型",
          //   key: "roletype",
          //   type: "select",
          //   opt: {
          //     list: [
          //       {
          //         label: "系统角色",
          //         value: '1'
          //       },
          //       // {
          //       //   label: "普通角色",
          //       //   value: '2'
          //       // }
          //     ]
          //   },
          //   rules: [{ required: true }]
          // },
          {
            label: "添加时间",
            key: "addTimeStr",
            only: ["show"]
          },
          {
            label: "角色描述",
            key: "description",
            type: "textarea"
          }
        ],
        get(opt) {
          let dto = {
            roleId: opt.id
          };
          _this.post("user-service/apartmentuser/queryRoleInfo", dto).then(data => {
            opt.cb(data);
          });
        },
        buttons: [
          {
            name: "提交",
            show: ["add", "edit"],
            cb(form) {
              console.log(form);
              let dto = {
                rolename: form.rolename,
                roletype: '1',
                description: form.description ? form.description : null
              };
              let url = "user-service/role/createRole";
              let message = "添加栏目成功";
              if (form.roleid) {
                url = "user-service/role/updateRole";
                dto.roleid = form.roleid;
                message = "编辑栏目成功";
              }
              _this.post(url, dto).then(function() {
                _this.$message({
                  showClose: true,
                  message: message,
                  type: "success"
                });
                _this.$back();
              });
            }
          }
        ]
      }
    };
  },
  activated () {
    this.$refs.detail.title = ["添加角色", "编辑角色", "角色详情"][
      {
        add: 0,
        edit: 1,
        show: 2
      }[this.$route.params.type]
    ];
  },
  created: function() {
    console.log("role-detail created!!");
  }
};
</script>

