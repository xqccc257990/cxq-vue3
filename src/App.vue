<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="!$route.meta.isNotKeep"></router-view>
    </keep-alive>
    <router-view v-if="$route.meta.isNotKeep"></router-view>
  </div>
</template>
<script>
export default {
  created() {
    console.log("App created!!");
  }
};
</script>