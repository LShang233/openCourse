<template>
  <div class="activity">
    <p>活动剪影</p>
    <div class="activity-photos">
      <div v-for="(index, item) in photoList" :key="index">
        <img :src="item.src" />
        <p>{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      photoList: [
        {
          src: "1",
          title: "老师在授课",
        },
        {
          src: "1",
          title: "授课",
        },
        {
          src: "1",
          title: "教学",
        },
        {
          src: "1",
          title: "老师",
        },
        {
          src: "1",
          title: "在授课",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.activity {
  > p {
    font-weight: 600;
    font-size: 16px;
  }
  .activity-photos {
    width: calc(100% + 24px);
    margin: 0 -12px;
    display: flex;
    flex-wrap: wrap;
    > div {
      width: 22%;
      height: 140px;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.16);
      text-align: center;
      margin: 12px;
      img {
        background-color: #868684;
        width: 100%;
        height: 80%;
      }
      p {
        height: 20%;
        display: inline-block;
        padding: 4px 0;
        background-color: #f8f8f8;
      }
    }
  }
}
</style>