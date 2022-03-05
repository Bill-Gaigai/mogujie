<template>
  <div>
    <!-- 底部tabbar -->
    <van-tabbar route>
      <van-tabbar-item replace icon="home-o" to="/layout/home"
        >首页</van-tabbar-item
      >
      <van-tabbar-item replace icon="search" to="/layout/category"
        >分类</van-tabbar-item
      >
      <van-tabbar-item replace icon="search" to="/layout/shopcar"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item replace icon="search" to="/layout/mine"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script type = "text/ecmascript-6">
export default {};
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped></style>