<template>
  <div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in SwipeData" :key="index">
        <img v-lazy="image.image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script type = "text/ecmascript-6">
export default {
  props: {
    SwipeData: Array,
  },
  data() {
    return {
      images: [],
    };
  },
};
</script>


<style scoped>
.van-swipe-item {
  width: 100%;
  height: 200px;
}
.van-swipe-item img {
  width: 100%;
}
</style>