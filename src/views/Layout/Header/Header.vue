<template>
  <div class="Header">
    <div class="container">
      <div class="first-wrap">
        <!-- 字体需修改 -->
        <h1>广东工业大学 | 程序设计基础</h1>
        <ul class="nav_list">
          <li @click="handleChange(0)" class="active">
            <router-link class="nav_item" to="/HomePage">首页</router-link>
          </li>
          <li @click="handleChange(1)">
            <router-link class="nav_item" to="/ClassResources"
              >课程资源</router-link
            >
          </li>
          <li @click="handleChange(2)">
            <router-link class="nav_item" to="/AboutUs">关于我们</router-link>
          </li>
        </ul>
      </div>
      <div class="login-wrap" v-show="!userNumber">
        <router-link class="login-item" to="/Login">登录</router-link>
        |
        <router-link class="login-item" to="/Login">注册</router-link>
      </div>
      <div class="login-wrap" v-show="userNumber">
        <span>学号 {{ userNumber }} 用户,你好</span>
        <span class="login-item" @click="handleExit()">退出</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      userNumber: "",
    };
  },
  methods: {
    handleChange(numb) {
      //获取导航栏的各项
      let list = document.querySelector(".nav_list").getElementsByTagName("li");
      //清除样式
      for (let i = 0; i < list.length; i++) {
        list[i].classList.remove("active");
      }
      //添加样式，分清进入哪个模块
      list[numb].classList.add("active");
    },

    //用户退出
    handleExit() {
      this.$Modal.confirm({
        title: "退出登录？",
        onOk: () => {
          //清楚缓存中数据
          this.userNumber = "";
          window.sessionStorage.removeItem("userId");
          window.sessionStorage.removeItem("userNumber");
          this.$Message.success("已退出登录");
        },
      });
    },
  },
  created() {
    this.userNumber = window.sessionStorage.getItem("userNumber");
  },
};
</script>

<style lang="scss" scoped>
.Header {
  width: 100%;
  position: fixed;
  background: #009D9F;
  z-index: 999;
  font-size: 16px;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    width: calc(100% - 100px);
    margin: 0 auto;
    color: #25787b;

    .first-wrap {
      display: flex;
      align-items: center;
      height: 100%;

      h1 {
        height: 60%;
        text-indent: -2000px;
        width: 300px;
        font-size: 18px;
        color: #4e4e4e;
        background: url("../../../assets/images/logo.png") no-repeat;
        background-size: 100% 100%;
      }

      ul {
        height: 100%;
        margin-left: 50px;
        display: flex;

        li {
          height: 100%;
          transition: all 0.2s;

          .nav_item {
            display: flex;
            align-items: center;
            height: 100%;
            padding: 0 40px;
            color: #fff;
            text-decoration: none;
            transition: all 0.2s;
          }

          &:hover {
            background: #055052;

            .nav_item {
              color: #fff;
            }
          }

          &.active {
            background: #055052;

            .nav_item {
              color: #fff;
            }
          }
        }
      }
    }

    .login-wrap {
      color: #fff;
      // width: calc(100% - 710px);
      // text-align: right;

      .login-item {
        color: #fff;
        margin: 0 5px;
        text-decoration: none;
        cursor: pointer;

        &:hover {
          color: #eaf8f9;
          text-decoration: underline;
        }
      }

      span {
        color: #fff;
        margin: 0 30px;
      }
    }
  }
}
</style>