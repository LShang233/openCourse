<template>
  <div id="ClassResources">
    <div class="class_wrap">
      <div>
        <ul class="left_nav">
          <!-- 侧导航栏 -->
          <li v-for="(item, index) in leftNav" :key="index">
            <router-link
              @click.native="changePanel(index)"
              class="nav_item"
              :class="index === panelIndex ? 'active' : ''"
              :to="item.url"
              >{{ item.name }}</router-link
            >
          </li>
        </ul>
      </div>
      <router-view class="main_content"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //左侧导航栏数据
      leftNav: [
        {
          name: "通知公告",
          url: "/ClassResources/Notice",
        },
        {
          name: "课程概要",
          url: "/ClassResources/ClassSum",
        },
        {
          name: "课程学习",
          url: "/ClassResources/VideoLearn",
        },
        {
          name: "资源下载",
          url: "/ClassResources/ResourceDownload",
        },
        {
          name: "拓展学习",
          url: "/ClassResources/ExtraStudy",
        },
        {
          name: "讨论区",
          url: "/ClassResources/Discuss",
        },
        {
          name: "课程评价",
          url: "/ClassResources/ClassAssess",
        },
      ],
      //当前所在页
      panelIndex: 0,
    };
  },
  methods: {
    //切换面板
    changePanel(index) {
      this.panelIndex = index;
    },
  },
  created(){
    // console.log(this.$route.name);
    switch(this.$route.name){
      case 'VideoLearn':
        this.panelIndex = 2;
        break;
    }
  }
};
</script>

<style lang="scss" scoped>
#ClassResources {
  // margin: 0 auto;
  // width: 1200px;
  // display: flex;
  // justify-content: center;
  // min-height: calc(100vh - 100px);
  // font-size: 18px;


  .class_wrap {
    padding: 10px 0 20px;
    margin: 0 auto;
    // width: 1200px;
    width: 80%;
    display: flex;
    // justify-content: center;

    .left_nav {
      text-align: center;
      margin-top: 44px;
      margin-bottom: 200px;
      box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.16);

      li {
        width: 180px;
        background: #faf7fa;

        .nav_item {
          display: inline-block;
          width: 100%;
          padding: 12px 0;
          color: #868684;
          transition: all 0.1s;
          font-weight: 600;
          // font-size: .75em;

          &:hover,
          &.active {
            color: #fff;
            background: #009D9F;
          }
        }
      }
    }

    .main_content {
      margin-left: 20px;
      width: calc(100% - 200px);
    }
  }
}
</style>