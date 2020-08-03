<template>
  <div>
    <div>
      <zz-input :item="item"
                :type="type">
      </zz-input>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: {
        // type: "password",
        // placeholder: "cxq",
        // placeholder: "",
        label: "姓名",
        maxlength: "10",
        key: "xmkey",
        disabled: ""
      },

      // item: {
      //   type: "password"
      // },
      // item: {
      //   type: "subTitle"
      // },
      // item: {
      //   type: "number"
      // },
      // item: {
      //   type: "link"
      // },

      type: ""
    };
  }
};
</script>

<style>
</style>