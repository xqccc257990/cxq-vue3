
<template>
  <div class="container">
    <el-aside>

      <menu-tree :menuData="menuList"></menu-tree>
    </el-aside>
  </div>
</template>
 
<script>
import MenuTree from "../../../base_modules/components/menu/zz-menu-base";
export default {
  components: {
    MenuTree
  },
  data() {
    return {
      menuList: [
        {
          id: "1",
          icon: "el-icon-menu",
          name: "1-",
          path: "/main",
          children: [
            {
              id: "11",
              icon: "el-icon-film",
              name: "1--",
              path: "/m",

              children: [
                {
                  id: "111",
                  icon: "el-icon-date",
                  name: "1---",
                  path: "/s",

                  children: [
                    {
                      path: "/s",

                      id: "1111",
                      icon: "el-icon-monitor",
                      name: "1----"
                    }
                  ]
                },
                {
                  path: "/s",

                  id: "112",
                  icon: "el-icon-headset",
                  name: "2---"
                }
              ]
            },
            {
              path: "/s",

              id: "12",
              icon: "el-icon-data-line",
              name: "12"
            }
          ]
        },
        {
          path: "/s",

          id: "2",
          icon: "el-icon-s-data",
          name: "一级菜单02"
        }
      ]
    };
  },
  mounted() {},
  methods: {}
};
</script>
