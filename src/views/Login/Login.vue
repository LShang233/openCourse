<template>
  <div class="log-main">
    <div>
      <div class="log-logo">
        <img src="./../../assets/login.png" />
        <img src="./../../assets/logo.png" />
      </div>
      <div class="login-div" v-if="htmlId == 1">
        <p>账号登录</p>
        <div class="log-buttom">
          <div>学生端</div>
          <div>教师端</div>
        </div>
        <div class="log-form">
          <div>
            <label>邮箱</label>
            <input
              placeholder="请输入邮箱号"
              @blur="getLoginCode()"
              v-model="loginForm.email"
            />
          </div>
          <div>
            <label>密码</label>
            <input
              type="password"
              placeholder="请输入密码"
              v-model="loginForm.password"
            />
          </div>
          <div class="code">
            <label>验证码</label>
            <input @keydown.enter="login()" v-model="loginForm.code" />
            <img @click="getLoginCode()" id="login-code" src="?" />
          </div>
        </div>
        <div class="login">
          <div @click="htmlId = 2">注册</div>
          <div @click="login()">登录</div>
        </div>
        <span @click="htmlId = 3">忘记密码?</span>
      </div>
      <div class="login-div" v-if="htmlId == 2">
        <p>账号注册</p>
        <div class="log-form">
          <div>
            <label>学号</label>
            <input placeholder="12345556" />
          </div>
          <div>
            <label>邮箱</label>
            <input placeholder="12345556" />
          </div>
          <div>
            <label>手机</label>
            <input placeholder="12345556" />
          </div>
          <div>
            <label>密码</label>
            <input type="password" placeholder="12345556" />
          </div>
          <div>
            <label>确认密码</label>
            <input type="password" placeholder="12345556" />
          </div>
          <div class="code">
            <label>验证码</label>
            <input placeholder="12345556" />
            <img src="?" />
          </div>
        </div>
        <div class="login">
          <div>确认注册</div>
          <div @click="htmlId = 1">返回登录</div>
        </div>
      </div>
      <div class="login-div" v-if="htmlId == 3">
        <p>密码找回</p>
        <div class="log-form">
          <div>
            <label>注册账号</label>
            <input placeholder="12345556" />
          </div>
          <div>
            <label>验证码</label>
            <input placeholder="12345556" />
          </div>
          <div>
            <label>新密码</label>
            <input type="password" placeholder="12345556" />
          </div>
          <div>
            <label>确认密码</label>
            <input type="password" placeholder="12345556" />
          </div>
        </div>
        <div class="login">
          <div>确认修改</div>
          <div @click="htmlId = 1">返回登录</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      htmlId: 1, //1登录 2注册 3找回
      loginForm: {
        email: "",
        password: "",
        code: "",
      },
      registered: {},
      retrieve: {},
    };
  },
  methods: {
    login() {
      if (!this.loginForm.email) {
        this.$Message.error("请输入邮箱");
        return;
      } else if (!this.loginForm.password) {
        this.$Message.error("请输入密码");
        return;
      } else if (!this.loginForm.code) {
        this.$Message.error("请输入验证码");
        return;
      }
      let data = new FormData();
      data.append("email", this.loginForm.email);
      data.append("password", this.loginForm.password);
      data.append("code", this.loginForm.code);
      this.$http.post(this.domain + "/../re", data).then((res) => {
        if (res.data.code == 1) {
          this.$Message.success("登录成功！");
          setTimeout(() => {
            this.$router.push({ path: "/HomePage" });
          }, 500);
        } else {
          this.$Message.info(res.data.msg);
        }
      });
    },
    getLoginCode() {
      let img = document.getElementById("login-code");
      if (this.loginForm.email)
        this.$http.post(this.domain + "/../drawCode").then((res) => {
          if (res.data.code == 1) {
            console.log(res.data);
          } else {
            this.$Message.error(res.data.msg);
          }
        });
      else {
        this.$Message.error("请先输入邮箱");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.log-main {
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  > div {
    width: 863px;
    height: 528px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    display: flex;
    transition: box-shadow 0.3s;
    &:hover {
      box-shadow: 1px 3px 6px rgba(0, 0, 0, 0.24);
    }
    .login-div {
      margin: 0 auto;
      text-align: center;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      > p {
        font-size: 22px;
        font-weight: 600;
        color: #585858;
        padding: 24px;
        letter-spacing: 0.1em;
      }
      .log-form {
        margin: 24px 0 0;
        font-size: 14px;
        width: 260px;
        color: #585858;
        > div {
          margin: 20px 0;
          width: 100%;
          label {
            width: 56px;
            display: inline-block;
            text-align: left;
          }
          input {
            width: calc(100% - 60px);
            text-align: center;
            border: none;
            border-bottom: 1px solid #868684;
          }
        }
        .code {
          label {
            float: left;
          }
          input {
            width: 110px;
          }
          img {
            background-color: #585858;
            width: 84px;
            margin: -4px 0 0;
            height: 100%;
            float: right;
            cursor: pointer;
          }
        }
      }
      .login {
        display: flex;
        > div {
          padding: 6px 0;
          width: 125px;
          text-align: center;
          margin: 12px 8px;
          border-radius: 5px;
          color: #585858;
          background-color: #c5ebef;
          transition: background-color 0.3s;
          cursor: pointer;
          &:last-child {
            color: white;
            background-color: #57aeb1;
          }
          &:hover {
            background-color: #3e999b;
            color: white;
          }
        }
      }
      .log-buttom {
        display: flex;
        div {
          display: inline-block;
          margin: 0 6px;
          padding: 12px 36px;
          border-radius: 5px;
          color: #868684;
          background: #f5f5f5;
          cursor: pointer;
          transition: background-color 0.3s;
          &:hover {
            background-color: #7ad3d6;
            color: white;
          }
        }
        .active {
          background-color: #7ad3d6;
          color: white;
        }
      }
      > span {
        color: #3b888b;
        font-size: 12px;
        cursor: pointer;
        &:hover {
          border-bottom: 1px solid #3b888b;
        }
      }
    }
    .log-logo {
      width: 35%;
      height: 100%;
      background-color: #7ad3d6;
      display: flex;
      position: relative;
      img {
        &:first-child {
          margin: auto -36px;
          width: calc(100% + 72px);
        }
        &:last-child {
          position: absolute;
          bottom: 8px;
          padding: 12px;
          width: 100%;
        }
      }
    }
  }
}
</style>