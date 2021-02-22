<template>
  <div>
    <div class="awards-li">
      <span @click="show(1)" :class="{ active: htmlId == 1 }"
        >教师竞赛获奖</span
      >
      <span @click="show(2)" :class="{ active: htmlId == 2 }"
        >学生竞赛获奖</span
      >
    </div>
    <div v-if="htmlId == 1" class="teacher-awards">
      <p>教师名</p>
      <pre>
1、2017 广东省教育教学成果奖（高等教育）“一等奖”（排名第八）
2、2016 广东省第五届师德征文活动“二等奖”
3、2012 广东省第一届高等院校青年教师教学基本功大赛 “优秀奖”
4、2017 广东工业大学“师德标兵”
5、2009 广东工业大学“十佳授课教师”
6、2007 广东工业大学“学生最喜爱的教师”
7、2012 广东工业大学“年度优秀教师”
8、广东工业大学教学优秀“一等奖”（5次）
        </pre
      >
      <p>教师名</p>
      <pre>
1、2017 广东省教育教学成果奖（高等教育）“一等奖”（排名第八）
2、2016 广东省第五届师德征文活动“二等奖”
3、2012 广东省第一届高等院校青年教师教学基本功大赛 “优秀奖”
4、2017 广东工业大学“师德标兵”
5、2009 广东工业大学“十佳授课教师”
6、2007 广东工业大学“学生最喜爱的教师”
7、2012 广东工业大学“年度优秀教师”
8、广东工业大学教学优秀“一等奖”（5次）
        </pre
      >
      <p>教师名</p>
      <pre>
1、2017 广东省教育教学成果奖（高等教育）“一等奖”（排名第八）
2、2016 广东省第五届师德征文活动“二等奖”
3、2012 广东省第一届高等院校青年教师教学基本功大赛 “优秀奖”
4、2017 广东工业大学“师德标兵”
5、2009 广东工业大学“十佳授课教师”
6、2007 广东工业大学“学生最喜爱的教师”
7、2012 广东工业大学“年度优秀教师”
8、广东工业大学教学优秀“一等奖”（5次）
        </pre
      >
    </div>
    <div v-if="htmlId == 2" class="student-awards"></div>
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
    display: inline-block;
    font-size: 16px;
    margin: 0 12px;
    padding: 8px 0;
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
  height: 540px;
  margin: 16px 0;
  background-color: #868684;
}
</style>