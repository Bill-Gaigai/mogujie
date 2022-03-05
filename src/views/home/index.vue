<template>
  <div>
    <Swipe :SwipeData="swipeList"></Swipe>
    <div class="keyword">
      <ul>
        <li v-for="(obj, index) in hotKeyList" :key="index">
          <img :src="obj.image" alt="" />
          <p>{{ obj.title }}</p>
        </li>
      </ul>
    </div>
    <div class="recommendPic">
      <img src="../../assets/img/recommend_bg.jpg" alt="" />
    </div>
    <GoodsList :goodslist="goodsList"></GoodsList>
  </div>
</template>

<script type = "text/ecmascript-6">
import Swipe from "@/components/swipe.vue";
import GoodsList from "@/components/Goodslist.vue";

import { MultidataAPI, swipeAPI } from "../../api/index";

export default {
  components: {
    Swipe,
    GoodsList,
  },
  data() {
    return {
      swipeList: [],
      hotKeyList: [],
      goodsList: [],
    };
  },
  methods: {
    async getSwipe() {
      const res = await MultidataAPI();
      this.swipeList = res.data.data.banner.list;
      this.hotKeyList = res.data.data.recommend.list;
    },
    async getGoodsList() {
      const res = await swipeAPI({
        type: "sell",
        page: 1,
      });
      console.log(res);
      this.goodsList = res.data.data.list;
    },
  },
  created() {
    this.getSwipe();
    this.getGoodsList();

    this.$emit("");
  },
};
</script>

<style scoped>
.keyword {
  padding-bottom: 20px;
  border-bottom: 8px solid #eee;
}
.keyword ul {
  display: flex;
}
.keyword li {
  flex: 1;
  text-align: center;
}
.keyword li img {
  width: 90%;
}
.keyword li p {
  font-size: 14px;
  margin-top: 5px;
}
.recommendPic img {
  width: 100%;
}
</style>