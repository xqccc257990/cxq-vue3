
<template>
  <div class="container">
    <!-- :multipleSelection="multipleSelection" -->

    <zz-data-list :tableData="tableData"
                  :columns="columns"
                  :tables="tables">
    </zz-data-list>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
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
  methods: {}
};
</script>
