<template>
  <div id="Discuss">
    <ul class="title_wrap">
      <li>讨论区</li>
    </ul>
    <ul class="discuss_area">
      <li>
        <div class="discuss_content">元件库资料过期了可以重新发一份吗？</div>
        <div class="bottom_wrap">
          <div>
            <span class="user">用户名 xhw4088</span>
            <span class="time">发布于 2020/02/01 23:00</span>
          </div>
          <div>
            <span class="praise">点赞 99</span>
            <span class="comment">评论 99</span>
          </div>
        </div>
      </li>
      <li>
        <div class="discuss_content">元件库资料过期了可以重新发一份吗？</div>
        <div class="bottom_wrap">
          <div>
            <span class="user">用户名 xhw4088</span>
            <span class="time">发布于 2020/02/01 23:00</span>
          </div>
          <div>
            <span class="praise">点赞 99</span>
            <span class="comment">评论 99</span>
          </div>
        </div>
      </li>
      <li>
        <div class="discuss_content">元件库资料过期了可以重新发一份吗？</div>
        <div class="bottom_wrap">
          <div>
            <span class="user">用户名 xhw4088</span>
            <span class="time">发布于 2020/02/01 23:00</span>
          </div>
          <div>
            <span class="praise">点赞 99</span>
            <span class="comment">评论 99</span>
          </div>
        </div>
      </li>
      <li>
        <div class="discuss_content">元件库资料过期了可以重新发一份吗？</div>
        <div class="bottom_wrap">
          <div>
            <span class="user">用户名 xhw4088</span>
            <span class="time">发布于 2020/02/01 23:00</span>
          </div>
          <div>
            <span class="praise">点赞 99</span>
            <span class="comment">评论 99</span>
          </div>
        </div>
      </li>
    </ul>
    <div class="page_wrap">
      <Page :total="20" />
    </div>
    <div class="send_wrap">
      <textarea name="" id="send_content" maxlength="100"></textarea>
      <div class="send_btn_wrap">
        <span>字数100以内</span>
        <div class="send_btn_row">
          <label class="send_btn" for="file1">上传图片</label>
          <input style="display:none" id="file1" type="file" accept=".jpg,.png" @change="loadPic"/>
          <button class="send_btn">发表主题</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  methods:{
    loadPic(){
      console.log('yib');
    }
  }
};
</script>

<style lang="scss" scoped>
#Discuss {
  .title_wrap {
    display: flex;
    align-items: center;
    height: 40px;
    li {
      font-size: 18px;
      color: #585858;
    }
  }

  .discuss_area {
    li {
      padding-bottom: 10px;
      margin-bottom: 10px;
      border-bottom: 1px solid #dcdddb;
      color: #868684;
      .discuss_content {
        font-size: 18px;
        margin-bottom: 5px;
      }

      .bottom_wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .user {
          color: #3b3b3b;
          margin-right: 20px;
        }

        .prasie {
        }

        .comment {
          margin-left: 20px;
        }
      }
    }
  }

  .page_wrap {
    text-align: center;
  }

  .send_wrap {
    margin-top: 20px;

    #send_content {
      width: 100%;
      height: 100px;
      padding: 10px;
      box-sizing: border-box;
      outline: none;
      border: 1px solid #868684;
      border-radius: 5px;
      resize: none;
    }

    .send_btn_wrap {
      margin-top: 3px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      span {
        color: #868684;
        font-size: 14px;
      }

      .send_btn_row {
        .send_btn {
          display: inline-block;
          padding: 5px 40px;
          border: none;
          color: #fff;
          background: #57aeb1;
          cursor: pointer;
          border-radius: 5px;

          &:last-child {
            margin-left: 10px;
          }
        }
      }
    }
  }
}
</style>