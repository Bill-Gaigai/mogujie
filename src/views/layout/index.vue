<template>
  <div>
    <Navbar></Navbar>
    <!-- 二级路由挂载点 -->
    <router-view></router-view>
    <Tabbar></Tabbar>
  </div>
</template>

<script type = "text/ecmascript-6">
import Navbar from "../../components/Navbar";
import Tabbar from "../../components/Tabbar";
export default {
  components: {
    Navbar,
    Tabbar,
  },
};
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped></style>