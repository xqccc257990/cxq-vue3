<template>
  <div>
    <div>
      <!-- getCheckedNodes -->
      <k-tree :item="item"
              :defaultCheckedKeys="defaultCheckedKeys"
              ref="kTree"
              @treeLoadNode="treeLoadNode">
      </k-tree>
    </div>
  </div>
</template>

<script>
import kTree from "../components/k-tree";

export default {
  components: { kTree },
  data() {
    return {
      first: 0, //
      defaultCheckedKeys: [],
      item: {
        list: [
          {
            label: "部门a-",
            pid: 0,
            id: 1,

            children: [
              {
                pid: 1,
                id: 2,
                label: "部门a--",

                children: [
                  {
                    pid: 2,
                    id: 3,
                    label: "部门a---",
                    children: [
                      {
                        pid: 3,
                        id: 4,

                        label: "部门a----",
                        children: []
                      },
                      {
                        pid: 3,
                        id: 5,
                        leaf: false,

                        label: "部门a----",
                        children: []
                      }
                    ]
                  }
                ]
              }
            ]
          }
          // {
          //   label: "部门b-",
          //   children: [
          //     {
          //       label: "部门b1--",
          //       children: [
          //         {
          //           label: "部门b1---"
          //         }
          //       ]
          //     },
          //     {
          //       label: "部门b2--",
          //       children: [
          //         {
          //           label: "部门b2---"
          //         }
          //       ]
          //     }
          //   ]
          // }
        ],

        treeType: "lazy-leaf"
      }
    };
  },
  watch: {},
  methods: {
    treeLoadNode(node, resolve) {
      console.log("treeLoadNode", this.$refs, node.data, resolve);
      var tempdata = [];

      // leaf: true
      if (node.level === 0) {
        this.item.list.map(item => {
          // delete item.children;
          tempdata.push(item);
        });
        this.defaultChecked = tempdata;
        console.log("----", this.defaultCheckedKeys, tempdata);

        return resolve(tempdata);
      }
      if (node.level === 1 && node.data.children && node.data.children.length) {
        this.$refs.kTree.getCheckedNodes();

        this.$refs.kTree.getCheckedKeys();

        var data = node.data.children;
        // var pid = node.data.pid;
        data.map(item => {
          // delete item.children;
          tempdata.push(item);
        });

        console.log("----222", tempdata);

        return resolve(tempdata);
      }
      if (node.level === 3 && node.data.children && node.data.children.length) {
        var data = node.data.children;
        // var pid = node.data.pid;
        this.defaultCheckedKeys = [5];
        data.map(item => {
          // delete item.children;
          tempdata.push(item);
        });

        console.log("----222", tempdata);

        return resolve(tempdata);
      }
      if (node.level === 2 && node.data.children && node.data.children.length) {
        var data = node.data.children;
        // var pid = node.data.pid;
        data.map(item => {
          // delete item.children;
          tempdata.push(item);
        });

        console.log("----222", tempdata);

        return resolve(tempdata);
      } else {
        this.$refs.kTree.getCheckedNodes();

        return resolve([]);
      }
    }
  }
};
</script>

<style>
</style>