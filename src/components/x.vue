<template>
  <div class="app-tree">
    <!-- <app-header :title="title" :isShowRefresh="false" :isShowBack="false"></app-header> -->
    <div>{{form}}</div>

    <el-tree v-if="!item.treeType"
             :data="data"
             :props="defaultProps"
             @node-click="handleNodeClick"></el-tree>

    <el-tree v-if="item.treeType=='si m'"
             :data="data"
             :props="defaultProps"
             @node-click="handleNodeClick"></el-tree>
  </div>
</template>

<script>
export default {
  props: {
    opt: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
      title: "",
      buttons: [],
      multipleSelection: [],
      treeData: [],
      tableData: []
    };
  },
  activated() {
    console.log("app-tree activated!", this.$props);
  },
  deactivated() {
    this.multipleSelection = [];
  },
  mounted() {},
  methods: {
    onCurrentChange(data, node) {}
  }
};
</script>
