<template>
  <div class="notification-form">
    <p>申报书详情</p>
    <div>
      <!-- <iframe
        src="http://qgailab.com/course/static/pdf/2.edfe5da.pdf"
        width="100%"
        height="100%"
      ></iframe> -->
      <img v-for="item in imgSrc" :src="item" alt=""/>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        imgSrc : [
          require('../../../assets/pdf/NotificationForm/1.jpg'),
          require('../../../assets/pdf/NotificationForm/2.jpg'),
          require('../../../assets/pdf/NotificationForm/3.jpg'),
          require('../../../assets/pdf/NotificationForm/4.jpg'),
          require('../../../assets/pdf/NotificationForm/5.jpg'),
          require('../../../assets/pdf/NotificationForm/6.jpg'),
          require('../../../assets/pdf/NotificationForm/7.jpg'),
          require('../../../assets/pdf/NotificationForm/8.jpg'),
          require('../../../assets/pdf/NotificationForm/9.jpg'),
          require('../../../assets/pdf/NotificationForm/10.jpg'),
          require('../../../assets/pdf/NotificationForm/11.jpg'),
          require('../../../assets/pdf/NotificationForm/12.jpg'),
          require('../../../assets/pdf/NotificationForm/13.jpg'),
          require('../../../assets/pdf/NotificationForm/14.jpg'),
          require('../../../assets/pdf/NotificationForm/15.jpg'),
          require('../../../assets/pdf/NotificationForm/16.jpg'),
          require('../../../assets/pdf/NotificationForm/17.jpg'),
          require('../../../assets/pdf/NotificationForm/18.jpg'),
          require('../../../assets/pdf/NotificationForm/19.jpg'),
          require('../../../assets/pdf/NotificationForm/20.jpg'),
          require('../../../assets/pdf/NotificationForm/21.jpg'),
          require('../../../assets/pdf/NotificationForm/22.jpg'),
          require('../../../assets/pdf/NotificationForm/23.jpg'),
          require('../../../assets/pdf/NotificationForm/24.jpg'),
          require('../../../assets/pdf/NotificationForm/25.jpg'),
          require('../../../assets/pdf/NotificationForm/26.jpg'),
          require('../../../assets/pdf/NotificationForm/27.jpg'),
          require('../../../assets/pdf/NotificationForm/28.jpg'),
          require('../../../assets/pdf/NotificationForm/29.jpg'),
          require('../../../assets/pdf/NotificationForm/30.jpg'),
        ]
      }
    }
  }
</script>
<style lang="scss" scoped>
.notification-form {
  > p {
    font-weight: 600;
    font-size: 16px;
  }
  > div {
    width: 100%;
    height: auto;
    margin: 14px 0;
    background-color: #a5a5a2;

    img{
      width: 100%;
      box-sizing: border-box;
    }
  }
}
</style>