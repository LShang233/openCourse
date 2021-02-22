<template>
  <div class="university-alliance">
    <p>高校联盟</p>
    <div class="schools">
      <div>
        <img src="" />
        <span>广东工业大学</span>
      </div>
      <div>
        <img src="" />
        <span>广东工业大学</span>
      </div>
      <div>
        <img src="" />
        <span>广东工业大学</span>
      </div>
      <div>
        <img src="" />
        <span>广东工业大学</span>
      </div>
      <div>
        <img src="" />
        <span>广东工业大学</span>
      </div>
      <div>
        <img src="" />
        <span>广东工业大学</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.university-alliance {
  p {
    font-size: 16px;
    font-weight: 600;
  }
  .schools {
    width: calc(100% + 24px);
    margin: 12px -12px;
    display: flex;
    flex-wrap: wrap;
    > div {
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.16);
      height: 64px;
      line-height: 64px;
      width: 20%;
      margin: 6px 12px;
      display: flex;
      border-radius: 8px;
      img {
        width: 44px;
        height: 44px;
        margin: 10px;
        background-color: #868684;
      }
      span {
        font-weight: 600;
        font-size: 14px;
        color: #585858;
      }
    }
  }
}
</style>