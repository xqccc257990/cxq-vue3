<template>
  <div>
    <div>
      <zz-select :item="item"
                 :type="type">
      </zz-select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: {
        type: "select-filterable",
        label: "权限",
        key: "sysqxkey",
        // disabled: ,
        // placeholder: "3",
        // ？

        opt: {
          // isLoading: true,
          multiple: true,
          list: [
            {
              value: "v1",
              label: "1部门a"
            },
            {
              value: "v2",
              label: "11部门b"
            },
            {
              value: "v3",
              label: "部门c"
            }
          ]
        }
      },

      type: "",

      value: ""
    };
  }
};
</script>

<style>
</style>