<template>
  <div id="HomePage">
    <div class="first_wrap">
      <div>
        <div class="left_wrap">
          <p>程序设计<br />精品资源共享网</p>
          <div class="bottom_wrap">
            <router-link to="/ClassResources/VideoLearn" 
              >开始学习<br />（课程资源-视频教学）</router-link
            >
            <a href="http://qgailab.com/anywork/html/login.html" target="blank"
              >在线测试<br />
              跳转anywork</a
            >
          </div>
        </div>
        <img class="home_pic" src="" alt="" />
      </div>
    </div>
    <div class="class_info">
      <h3>课程简介</h3>
      <div class="content">
        <p>
          程序设计是高等院校计算机专业及相关专业重要的专业基础课，其目的是培养学生程序设计理念、掌握程序设计的基础方法，为后续课程打下坚实基础。
        </p>
        <p>
          我们在多年讲授和使用编程的基础上，深切感受到学习程序设计不仅要掌握的语法要点和编程规范，更重要的是要领会结构化程序设计思想，综合运用知识开发大型程序，为此，我们在原有讲授的基础上，增加了“软件开发过程的内容”，希望通过程序设计，用一个较大规范的实例掌握运用软件工程的思想进行程序开发的一般过程。
        </p>
        <img src="../../assets/images/support-team.png" alt="" class="pic1" />
      </div>
    </div>
    <div class="union_school">
      <h3>联盟高校</h3>
      <div class="union_list">
        <img src="../../assets/images/remote-team.png" alt="" class="pic2" />
        <div class="union_item">
          <img src="../../assets/teacherstyle/school/gdut.png" alt="" />
          <p>广东工业大学</p>
        </div>
        <div class="union_item">
          <img src="../../assets/teacherstyle/school/zsdx.png" alt="" />
          <p>中山大学</p>
        </div>
        <div class="union_item">
          <img src="../../assets/teacherstyle/school/szdx.png" alt="" />
          <p>深圳大学</p>
        </div>
        <div class="union_item">
          <img src="../../assets/teacherstyle/school/lnsfdx.png" alt="" />
          <p>岭南师范学院</p>
        </div>
        <div class="union_item">
          <img src="../../assets/teacherstyle/school/zknxy.png" alt="" />
          <p>仲恺农业工程学院</p>
        </div>
      </div>
    </div>
    <div class="teacher_teams">
      <h3>教师团队</h3>
      <div class="teacher_list">
        <img src="../../assets/images/awards.png" alt="" class="pic3" />
        <div
          class="teacher_item"
          v-for="(item, index) in teacherTeam"
          :key="index"
        >
          <img :src="item.avatar" alt="" />
          <p>{{ item.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      //教师团队
      teacherTeam: [
        {
          name: "谢光强",
          avatar: "http://qgailab.com/course/static/img/xie.2730c8e.png",
        },
        {
          name: "吴伟民",
          avatar: "http://qgailab.com/course/static/img/wu.8919f53.png",
        },
        {
          name: "曾安",
          avatar: "http://qgailab.com/course/static/img/an.e2db41f.png",
        },
        {
          name: "谢国波",
          avatar: "http://qgailab.com/course/static/img/bo.61a80ac.png",
        },
        {
          name: "林伟",
          avatar: "http://qgailab.com/course/static/img/wei.d6be8f3.png",
        },
        {
          name: "李杨",
          avatar: "http://qgailab.com/img/6.d44330b8.png",
        },
        {
          name: "朱清华",
          avatar: "http://qgailab.com/course/static/img/zhu.30b1e6a.png",
        },
        {
          name: "陈云华",
          avatar: "http://qgailab.com/course/static/img/chen.1961b0c.png",
        },
        {
          name: "曾颖",
          avatar: "http://qgailab.com/course/static/img/ying.f8cd54b.jpg",
        },
        {
          name: "孙宣东",
          avatar: "http://qgailab.com/course/static/img/xuan.d808a03.jpg",
        },
        {
          name: "汪明慧",
          avatar: "http://qgailab.com/course/static/img/hui.4ced16d.jpg",
        },
        {
          name: "路璐",
          avatar: "http://qgailab.com/course/static/img/lu.b03aa5f.jpg",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
#HomePage {
  background: #faf9f9;

  & > div {
    text-align: center;
  }

  h3 {
    display: inline-block;
    padding: 12px 60px;
    margin-bottom: 30px;
    margin-top: 40px;
    font-size: 18px;
    color: #585858;
    background: #7ad3d6;
  }

  .first_wrap {
    padding: 50px 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    height: 400px;

    > div {
      display: flex;
      justify-content: space-between;
      height: 100%;
      width: 100%;
      max-width: 1300px;
      min-width: 500px;
    }

    .left_wrap {
      flex: 1;
      display: flex;
      flex-direction: column;

      p {
        flex: 2;
        background: #dcdddb;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .bottom_wrap {
        margin-top: 10px;
        flex: 1;
        display: flex;
        justify-content: space-between;

        a {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #dcdddb;
          &:last-child {
            margin-left: 10px;
          }
        }
      }
    }

    .home_pic {
      flex: 1.5;
      margin-left: 10px;
      // height: 100%;
      // width: 650px;

      background: #eeeeee;
    }
  }

  .class_info {
    display: flex;
    flex-direction: column;
    align-items: center;

    .content {
      position: relative;
      width: 1000px;
      padding: 50px 80px;
      color: #3b888b;
      background: #e1f3f5;
      text-align: left;
      font-size: 16px;

      p {
        text-indent: 32px;
      }

      .pic1 {
        position: absolute;
        top: 0;
        right: 0;
        width: 200px;
        height: 200px;
        transform: translate(50%, -50%);
      }
    }
  }

  .union_school {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 120px;

    .union_list {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 1000px;
      flex-wrap: wrap;

      .pic2 {
        position: absolute;
        top: 0;
        left: 0;
        width: 200px;
        height: 200px;
        transform: translate(0, -100%);
      }

      .union_item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #fff;
        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.16);
        border-radius: 2px;
        padding: 7px;
        margin: 7px 3px;

        img {
          width: 50px;
          height: 50px;
          background: #868684;
        }

        p {
          margin-left: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 120px;
          height: 50px;
          overflow: auto;
          &::-webkit-scrollbar {
            width: 0;
          }
        }

        &:last-child {
          color: #3b888b;
          background: #e1f3f5;
          font-weight: bold;
          width: 189px;
          height: 64px;
          justify-content: center;
          box-shadow: none;
          cursor: pointer;
        }
      }
    }
  }

  .teacher_teams {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 120px;
    padding-bottom: 40px;

    .teacher_list {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      padding: 10px 20px 20px;
      width: 1000px;

      .pic3 {
        position: absolute;
        top: 0;
        right: 0;
        width: 200px;
        height: 200px;
        transform: translate(30%, -100%);
      }

      .teacher_item {
        padding: 10px;
        margin: 10px 20px;
        width: 120px;
        height: 170px;
        background: #fff;
        overflow: auto;
        border-radius: 3px;
        border: 1px solid #eee;

        &::-webkit-scrollbar {
          width: 0;
        }

        img {
          height: 120px;
          width: 100%;
        }

        p {
          width: 100%;
          font-size: 16px;
          font-weight: 600;
        }
      }
    }
  }
}
</style>