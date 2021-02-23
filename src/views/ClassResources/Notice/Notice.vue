<template>
  <div id="Notice">
    <ul class="title_wrap">
      <li>近期公告</li>
    </ul>
    <div class="main_container">
      <ul class="notice">
        <!-- <li>
          <h3 class="title">公告标题</h3>
          <p>同学们好:</p>
          <p class="content">本期mooc学习已经一段时间了，发现有的同学仍旧忘记了提交作业时间，希望同学们严格按照中国大学mooc咱们课程的时间节点要求认真完成视频的学习和课后作业，时间截止后是无法补做作业的，请同学们重视！加油！</p>
          <p class="content">业精于勤而荒于嬉，行成于思而毁于随。——韩愈</p>
          <p class="time">2021/02/01 14:00</p>
        </li>
        <li>
          <h3 class="title">关于课程学习的重要通知</h3>
          <p>同学们好:</p>
          <p class="content">本期mooc学习已经一段时间了，发现有的同学仍旧忘记了提交作业时间，希望同学们严格按照中国大学mooc咱们课程的时间节点要求认真完成视频的学习和课后作业，时间截止后是无法补做作业的，请同学们重视！加油！</p>
          <p class="time">2021/02/01 13:00</p>
        </li> -->
        <h3 style="text-align:center">暂无公告</h3>
      </ul>
      <div class="calendar"><Calendar/></div>
    </div>
  </div>
</template>

<script>
import Calendar from '../../../components/Notice/Calendar/Calendar'
export default {
  name: 'Notice',
  components:{
    Calendar
  },
  data(){
    return {

    }
  }
};
</script>

<style lang="scss" scoped>
#Notice {
  .title_wrap {
    display: flex;
    align-items: center;
    height: 40px;
    li {
      font-size: 18px;
      color: #585858;
    }
  }

  .main_container {
    display: flex;
    // align-items: center;
    justify-content: space-between;

    .notice {
      flex: 2;

      li {
        padding: 5px;
        border-bottom: 1px solid #DCDDDB;

        .content {
          text-indent: 30px;
        }

        .time {
          text-align: right;
          
        }
      }
    }

    .calendar {
      flex: 1;
      margin-left: 20px;
    }
  }
}
</style>