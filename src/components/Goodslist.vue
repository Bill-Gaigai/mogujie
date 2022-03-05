<template>
  <div>
    <ul class="goods">
      <li v-for="obj in goodslist" :key="obj.iid">
        <img :src="obj.show.img" alt="" />
        <div class="goods_info">
          <p>{{ obj.title }}</p>
          <span>{{ obj.price }}</span>
          <span>{{ "☆" }}{{ obj.cfav }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type = "text/ecmascript-6">
export default {
  props: {
    goodslist: Array,
  },
};
</script>

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  padding: 2px;
}
.goods li {
  padding-bottom: 40px;
  position: relative;

  width: 48%;
}
.goods li img {
  width: 100%;
  border-radius: 5px;
}
</style>