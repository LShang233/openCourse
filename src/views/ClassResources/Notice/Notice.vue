<template>
  <div id="Notice">
    <ul class="title_wrap">
      <li>近期公告</li>
    </ul>
    <div class="main_container">
      <ul class="notice">
        <li>
          <!-- <h3 class="title">公告</h3> -->
          <p class="content">暂无公告</p>

        </li>
      </ul>
      <div class="calendar"><Calendar /></div>
    </div>
  </div>
</template>

<script>
import Calendar from "../../../components/ClassResource/Calendar/Calendar";
export default {
  name: "Notice",
  components: {
    Calendar,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
#Notice {
  .title_wrap {
    display: flex;
    align-items: center;
    height: 40px;
    li {
      font-weight: 600;
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
        padding: 20px 5px;
        border-bottom: 1px solid #dcdddb;
        font-size: 16px;

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