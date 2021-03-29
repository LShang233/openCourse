<template>
  <div>
    <div class="awards-li">
      <span>
        <router-link to="/TeacherGroup">教师团队</router-link>
      </span>
      <span>
        <router-link to="/TeacherStyle">校级十佳教师风采</router-link>
      </span>
      <span class="active">
        <router-link to="/Awards">教师竞赛获奖</router-link>
      </span>
      <span>
        <router-link to="/StudentAwards">学生竞赛获奖</router-link>
      </span>
    </div>
    <div v-show="htmlId == 1" class="teacher-awards">
      <p>谢光强</p>
      <pre>
1.广东省教育教学成果奖（高等教育）“一等奖”
2.第二十一届广东青年五四奖章“集体提名奖”
3.第十一届校级教学成果奖“一等奖”
4.广东工业大学“学生最喜爱的教师”
5.广东工业大学“十佳授课教师”
6.广东工业大学“师德标兵”
7.广东工业大学“五四青年奖章”
8.广东工业大学“优秀教师”
9.名家大师精彩报告，中国科协青少年科技中心
10.广东省第一届高等院校青年教师教学基本功大赛， “优秀奖”
11.广东省第五届师德征文活动，“二等奖”
12.云浮市“科学技术奖二等奖”
13.广东工业大学“科研工作先进者”
14.广东工业大学教学优秀“一等奖”（7次），“二等奖”（5次）
15.广东工业大学“优秀指导老师”、“计算机学院师德先进个人”
16.广东工业大学“大学毕业生就业工作先进个人”
17.广东工业大学“优秀工会积极分子”
18.广东工业大学年度考核“优秀”（3次）
19.广东工业大学“优秀班主任”（6次）
20.广东工业大学“毕业设计指导创新奖”（2008年-2019年）
21. 2016-2017-1学期所讲授的《程序设计》课程，学生评教得分名列全校第一
22.学生评教连续六年学院排名第一。
23.粤港澳大湾区IT应用系统开发大赛“优秀指导老师”
        </pre
      >
      <p>谢国波</p>
      <pre>
1、广东工业大学科技先进工作者
2、吴文俊人工智能科学技术进步三等奖
        </pre
      >
      <p>曾颖</p>
      <pre>
1、2016.01 广工工业大学“十佳授课教师”
2、广东工业大学教学优秀“一等奖”（1次）
3、广东工业大学教学优秀“二等奖”（2次）
        </pre
      >
      <p>路璐</p>
      <pre>
1、2014年获得广东工业大学十佳授课教师
2、2014-2015学年度 广东工业大学教学优秀“一等奖”
3、2015-2016学年度 广东工业大学教学优秀“一等奖”
        </pre
      >
      <p>林伟</p>
      <pre>
1、“DW系列微电脑多功能模糊控制蒸炖煲”98广州科技进步2等奖
        </pre
      >
      <p>李杨</p>
      <pre>
1、广东工业大学“十佳授课教师”
2、广东工业大学“年度优秀教师”
3、云浮市“科学技术奖二等奖”
4、广东工业大学“科研工作先进者”
5、广东工业大学教学优秀“一等奖”，“二等奖”
6、广东工业大学“优秀指导老师”
7、广东工业大学“优秀工会积极分子”
8、广东工业大学年度考核“优秀”
9、广东工业大学“优秀班主任”
10、“计算机学院师德先进个人”
        </pre
      >
      <p>陈云华</p>
      <pre>
1、中国软件行业协会嵌入式系统分会中国嵌入式系统产业联盟“嵌入式Linux系统开发最具潜力讲师”
2、“粤嵌杯”广东省大学生嵌入式与物联网设计大赛“一等奖”
3、广东工业大学教学优秀“二等奖”
4、广东工业大学毕业生就业工作“先进个人”
5、广东工业大学毕业设计（论文）创新奖
6、广东工业大学年度考核“优秀”
        </pre
      >
      <p>孙宣东</p>
      <pre>
1、分组等重码实验平台研究与实现（项目编号201211845053）
2、基于GE码的新型分布式存储系统研究与实现
3、面向福利彩票行业的数据存储备份系统研究
4、ACM在线学习与测试平台的建设与应用
        </pre
      >
    </div>
    <!-- <div v-show="htmlId == 2" class="student-awards">
      <iframe
            src="http://qgailab.com/course/static/pdf/4.c74a1e8.pdf"
            width="100%"
            height="100%"
            style="border:none"
          ></iframe>
    </div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      htmlId: 1,
      
    };
  },
  methods: {
    show(index) {
      this.htmlId = index;
    },
  },
};
</script>
<style lang="scss" scoped>
.awards-li {
  width: 100%;
  span {
    a {
      color: #515a6e;
      width: 100%;
      height: 100%;
    }
    display: inline-block;
    font-size: 16px;
    margin: 0 12px;
    cursor: pointer;
    &:hover {
      border-bottom: 3px solid #3b888b;
      font-weight: 600;
    }
  }
  .active {
    border-bottom: 3px solid #3b888b;
    font-weight: 600;
  }
}
.teacher-awards {
  color: #868684;
  p {
    font-weight: 600;
    margin: 12px 0;
  }
  pre {
    padding: 0 24px;
  }
}
.student-awards {
  width: 100%;
  height: 800px;
  margin: 16px 0;
  overflow-y: scroll;
  // background-color: #868684;
  img{
    width: 100%;
  }
}
</style>