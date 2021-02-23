<template>
  <div class="Header">
    <div class="container">
      <div class="first-wrap">
        <!-- 字体需修改 -->
        <h1>广东工业大学 | 程序设计</h1>
        <ul class="nav_list">
          <li @click="handleChange(0)" class="active">
            <router-link class="nav_item" to="/HomePage">首页</router-link>
          </li>
          <li @click="handleChange(1)">
            <router-link class="nav_item" to="/ClassResources">课程资源</router-link>
          </li>
          <li @click="handleChange(2)">
            <router-link class="nav_item" to="/AboutUs">关于我们</router-link>
          </li>
        </ul>
      </div>
      <div class="login-wrap">
        <router-link class="login-item" to="/Login">登录</router-link>
        |
        <router-link class="login-item" to="/Login">注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
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
  },
};
</script>

<style lang="scss" scoped>
.Header {
  width: 100%;
  position: fixed;
  background: #7ad3d6;
  z-index: 999;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    width: 1300px;
    margin: 0 auto;
    color: #25787b;

    .first-wrap {
      display: flex;
      align-items: center;
      height: 100%;

      h1 {
        font-size: 18px;
        color: #4e4e4e;
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
            color: #25787b;
            text-decoration: none;
            transition: all 0.2s;
          }

          &:hover {
            background: #57aeb1;

            .nav_item {
              color: #fff;
            }
          }

          &.active {
            background: #57aeb1;

            .nav_item {
              color: #fff;
            }
          }
        }
      }
    }

    .login-wrap {
      .login-item {
        color: #25787b;
        margin: 0 5px;
        text-decoration: none;
      }
    }
  }
}
</style>