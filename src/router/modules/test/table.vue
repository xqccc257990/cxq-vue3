
<template>
  <div class="container">
    <!-- :multipleSelection="multipleSelection" -->

    <zz-table :tableData="tableData"
              :columns="columns"
              :tables="tables"
              @handleRowClick="handleRowClick"
              @handleCurrentChange="handleCurrentChange"
              @handleSelectionChange="handleSelectionChange">
    </zz-table>
    <el-pagination background
                   style="margin:40px"
                   layout="total, sizes, prev, pager, next, jumper"
                   @size-change="handleSizeChange"
                   @current-change="handleCurrentChangePage"
                   :current-page="pages.currentPage"
                   :page-sizes="[2, 3, 30, 50, 100]"
                   :page-size="pages.limit"
                   :total="pages.total"></el-pagination>

  </div>
</template>
 
<script>
export default {
  data() {
    return {
      pages: {
        currentPage: 1,
        skip: 1,
        limit: 10,
        total: 0
      },
      tables: {
        isNotShowSelection: false,
        isShowHighliht: true,
        emptyText: "",
        isLoading: true
      },
      columns: [
        {
          key: "name",
          label: "姓名",
          with: "700"
        },
        {
          key: "date",
          label: "时间",
          with: "700"
        },
        {
          key: "address",
          label: "地址",
          with: "700"
        }
      ],
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          with: "700",
          address: "上海市普陀区金沙江路 1518                 e 弄2 "
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      multipleSelection: []
    };
  },
  mounted() {},
  methods: {
    // //刷新列表
    // onRefresh() {
    //   this.list = [];
    //   let this = this;
    //   setTimeout(() => {
    //     this.isLoading = true;
    //     this.skip = 1;
    //     this.currentPage = 1;
    //     this.limit = 10;
    //     this.total = 0;
    //     this.get();
    //   }, 0);
    // },

    get() {
      this.tables.isLoading = true;

      let data = [];

      this.tables.isLoading = false;
      if (data && data.data) {
        if (data.total == 0) {
          this.tables.emptyText = "暂无数据";
        }
        this.pages.otal = data.total;
        this.tableData = data.data.length ? data.data : [];
      } else {
        this.tables.emptyText = "数据维护中";
      }
    }
  },
  // 勾选单选框
  handleCurrentChange(val) {
    console.log("handleCurrentChange", val);

    // if (this.$props.opt.isShowHighliht) {
    //   this.multipleSelection = [val];
    // }
  },
  //勾选列表复选框
  handleSelectionChange(val) {
    console.log("handleSelectionChange", val);

    // this.multipleSelection = val;
  },
  // 点击了列表行
  handleRowClick(val) {
    console.log("handleRowClick", val);

    // if (typeof this.$props.opt.onRow == "function") {
    //   this.$props.opt.onRow(val);
    // }
  },
  //改变表格展示条数
  handleSizeChange(val) {
    console.log("handleSizeChange", val);

    this.pages.skip = 1;
    this.pages.imit = val;
    // this.get();
  },
  //表格翻页
  handleCurrentChangePage(val) {
    console.log("handleCurrentChangePage", val);

    this.pages.skip = val;
    // this.get();
  }
};
</script>
