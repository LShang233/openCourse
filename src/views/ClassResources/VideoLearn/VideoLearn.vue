<template>
  <div id="VideoLearn">
    <div class="main_content">
      <div class="title_wrap">
        <div class="title">
          <h2 class="main_title">{{ mainTitle }}</h2>
          <h4 class="subtitle">{{ subtitle }}</h4>
        </div>
        <p>学习任务：{{ work }}</p>
      </div>
      <div class="video_area">
        <video
          controls="controls"
          :src="videoSrc"
          controlslist="nodownload"
          class="video"
          @play="playVideo($event)"
          @pause="stopVideo($event)"
          @loadedmetadata="prePlay($event)"
        ></video>
      </div>
      <a
        target="blank"
        href="http://qgailab.com/anywork/html/login.html"
        class="online_test"
        >在线测试</a
      >
    </div>
    <ul class="class_list">
      <li v-for="(item1, index1) in classesList" :key="index1">
        <div
          @click="showDetail(index1)"
          class="class_title"
          :class="item1.rate == 100 ? 'class_done' : ''"
        >
          <span> {{ item1.title }}</span>
          <i>{{ item1.rate }}%</i>
        </div>
        <ul class="class_detail" v-show="item1.show">
          <li
            :class="
              subtitle === item1.detail[index2].title ? 'class_selected' : ''
            "
            @click="showVideo(index1, index2)"
            v-for="(item2, index2) in item1.detail"
            :key="index2"
          >
            <strong :class="item2.ifFinished ? 'class_finished' : ''"></strong>
            <span>{{ item2.title }}</span>
          </li>
        </ul>
      </li>
      <!-- <li>
        <div class="class_title class_done">
          <span> 一、C语言概述</span>
          <i>100%</i>
        </div>
        <ul class="class_detail">
          <li class="class_selected">
            <strong class="class_finished"></strong>
            <span>C语言概述</span>
          </li>
        </ul>
      </li> -->
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //章节的所有数据
      classesList: [
        {
          title: "一、C语言概述",
          show: false, //是否展示详细内容
          rate: 0, //进度
          work:
            "理解编程语言的特点;初步掌握在计算机上运行程序的方法；理解算法的概念和特性；能够用N-S流程图来表示算法。",
          detail: [
            {
              id: -1,
              title: "C语言概述",
              rate: 0, //观看进度
              video: "",
              videoId: 0,
              total: 0, //总时长
              ifFinished: false,
            },
          ],
        },
        {
          title: "二、基本数据类型",
          show: false, //是否展示详细内容
          rate: 0, //进度
          work:
            "在掌握基本数据类型的表示方法、运算符和表达式概念的基础上，能够进行简单的程序编写。",
          detail: [
            {
              title: "字符型数据",
              video: "http://qgailab.com/course/resources/video/3-2-4.mp4",
              videoId: 1,
              total: 1041, //总时长
              ifFinished: false, //是否看完
            },
            {
              title: "浮点型数据",
              video: "http://qgailab.com/course/resources/video/3-2-5.mp4",
              videoId: 2,
              total: 533, //总时长
              ifFinished: false,
            },
            {
              title: "怎么确定常量的类型",
              video: "http://qgailab.com/course/resources/video/3-2-6.mp4",
              videoId: 3,
              total: 282, //总时长
              ifFinished: false,
            },
            {
              title: "运算符和表达式（上）",
              video: "http://qgailab.com/course/resources/video/3-2-7-1.mp4",
              videoId: 4,
              total: 961, //总时长
              ifFinished: false,
            },
            {
              title: "运算符和表达式（下）",
              video: "http://qgailab.com/course/resources/video/3-2-7-2.mp4",
              videoId: 5,
              total: 2374, //总时长
              ifFinished: false,
            },
          ],
        },
        {
          title: "三、顺序结构",
          show: false, //是否展示详细内容
          rate: 0, //进度
          work:
            "理解基本的语句，如控制语句、赋值语句等；能够结合输入输出语句设计编写简单的程序。",
          detail: [
            {
              title: "C语句的作用和分类",
              video: "http://qgailab.com/course/resources/video/3-3-1.mp4",
              videoId: 6,
              total: 722, //总时长
              ifFinished: false,
            },
            {
              title: "最基本的语句-赋值语句",
              video: "http://qgailab.com/course/resources/video/3-3-2.mp4",
              videoId: 7,
              total: 1864, //总时长
              ifFinished: false,
            },
            {
              title: "数据输入输出举例以及有关概念",
              video: "http://qgailab.com/course/resources/video/3-4-2.mp4",
              videoId: 8,
              total: 373, //总时长
              ifFinished: false,
            },
            {
              title: "用printf函数输出数据",
              video: "http://qgailab.com/course/resources/video/3-4-3.mp4",
              videoId: 9,
              total: 1300, //总时长
              ifFinished: false,
            },
            {
              title: "用scanf函数输入数据",
              video: "http://qgailab.com/course/resources/video/3-4-4.mp4",
              videoId: 10,
              total: 1423, //总时长
              ifFinished: false,
            },
            {
              title: "字符串数据的输入与输出",
              video: "http://qgailab.com/course/resources/video/3-4-5.mp4",
              videoId: 11,
              total: 410, //总时长
              ifFinished: false,
            },
          ],
        },
        {
          title: "四、选择结构",
          show: false, //是否展示详细内容
          rate: 0, //进度
          work:
            "在了解关系运算符和关系表达式，逻辑运算符和逻辑表达式的基础上，能够编写具有选择结构的程序。",
          detail: [
            {
              title: "用if语句实现选择结构举例",
              video: "http://qgailab.com/course/resources/video/4-2-1.mp4",
              videoId: 12,
              total: 874, //总时长
              ifFinished: false,
            },
            {
              title: "if语句的一般形式",
              video: "http://qgailab.com/course/resources/video/4-2-2.mp4",
              videoId: 13,
              total: 878, //总时长
              ifFinished: false,
            },
            {
              title: "关系运算符和关系表达式",
              video: "http://qgailab.com/course/resources/video/4-3.mp4",
              videoId: 14,
              total: 312, //总时长
              ifFinished: false,
            },
            {
              title: "逻辑运算符及其优先次序",
              video: "http://qgailab.com/course/resources/video/4-4-1.mp4",
              videoId: 15,
              total: 456, //总时长
              ifFinished: false,
            },
            {
              title: "逻辑表达式",
              video: "http://qgailab.com/course/resources/video/4-4-2.mp4",
              videoId: 16,
              total: 202, //总时长
              ifFinished: false,
            },
            {
              title: "条件运算符和条件表达式",
              video: "http://qgailab.com/course/resources/video/4-5.mp4",
              videoId: 17,
              total: 398, //总时长
              ifFinished: false,
            },
            {
              title: "选择结构的嵌套",
              video: "http://qgailab.com/course/resources/video/4-6.mp4",
              videoId: 18,
              total: 241, //总时长
              ifFinished: false,
            },
            {
              title: "用switch语句实现多分支选择结构",
              video: "http://qgailab.com/course/resources/video/4-7.mp4",
              videoId: 19,
              total: 820, //总时长
              ifFinished: false,
            },
            {
              title: "选择结构程序综合举例",
              video: "http://qgailab.com/course/resources/video/4-8.mp4",
              videoId: 20,
              total: 727, //总时长
              ifFinished: false,
            },
          ],
        },
        {
          title: "五、循环结构",
          show: false, //是否展示详细内容
          rate: 0, //进度
          work:
            "能够区别多种循环，具备实现循环的能力，编写具有循环嵌套的程序。",
          detail: [
            {
              title: "为什么需要循环控制",
              video: "http://qgailab.com/course/resources/video/5-1.mp4",
              videoId: 21,
              total: 512, //总时长
              ifFinished: false,
            },
            {
              title: "用while语句实现循环",
              video: "http://qgailab.com/course/resources/video/5-2.mp4",
              videoId: 22,
              total: 446, //总时长
              ifFinished: false,
            },
            {
              title: "用do-while语句实现循环",
              video: "http://qgailab.com/course/resources/video/5-3.mp4",
              videoId: 23,
              total: 527, //总时长
              ifFinished: false,
            },
            {
              title: "用for语句实现循环",
              video: "http://qgailab.com/course/resources/video/5-4.mp4",
              videoId: 24,
              total: 1332, //总时长
              ifFinished: false,
            },
            {
              title: "循环的嵌套和比较",
              video: "http://qgailab.com/course/resources/video/5-5+5-6.mp4",
              videoId: 25,
              total: 190, //总时长
              ifFinished: false,
            },
            {
              title: "用break语句提前终止循环",
              video: "http://qgailab.com/course/resources/video/5-7-1.mp4",
              videoId: 26,
              total: 534, //总时长
              ifFinished: false,
            },
            {
              title: "用continue语句提前结束本次循环",
              video: "http://qgailab.com/course/resources/video/5-7-2.mp4",
              videoId: 27,
              total: 383, //总时长
              ifFinished: false,
            },
            {
              title: "break和continue语句的区别",
              video: "http://qgailab.com/course/resources/video/5-7-3.mp4",
              videoId: 28,
              total: 86, //总时长
              ifFinished: false,
            },
          ],
        },
        {
          title: "六、利用数组处理数据",
          show: false, //是否展示详细内容
          rate: 0, //进度
          work:
            "能够定义和引用一维数组、二维数组和字符数组；能够利用数组来设计相关程序。",
          detail: [
            {
              title: "一维数组",
              video: "http://qgailab.com/course/resources/video/6-1.mp4",
              videoId: 29,
              total: 1928, //总时长
              ifFinished: false,
            },
            {
              title: "二维数组及多维数组",
              video: "http://qgailab.com/course/resources/video/6-2.mp4",
              videoId: 30,
              total: 1150, //总时长
              ifFinished: false,
            },
            {
              title: "冒泡排序法",
              video: "http://qgailab.com/course/resources/video/6-2-2.mp4",
              videoId: 31,
              total: 1671, //总时长
              ifFinished: false,
            },
            {
              title: "字符数组和字符串",
              video: "http://qgailab.com/course/resources/video/6-3.mp4",
              videoId: 32,
              total: 1487, //总时长
              ifFinished: false,
            },
            {
              title: "应用举例",
              video: "http://qgailab.com/course/resources/video/6-5.mp4",
              videoId: 33,
              total: 1487, //总时长
              ifFinished: false,
            },
          ],
        },
        {
          title: "七、函数实现模块化",
          show: false, //是否展示详细内容
          rate: 0, //进度
          work:
            "掌握函数的定义和调用方法、变量的作用域和存储方式等概念；理解函数调用时参数传递的过程；能够区分值传递方式和地址传递；能够用函数实现模块化的程序设计。",
          detail: [
            {
              title: "概述",
              video: "http://qgailab.com/course/resources/video/7-1.mp4",
              videoId: 34,
              total: 805, //总时长
              ifFinished: false,
            },
            {
              title: "函数的定义",
              video: "http://qgailab.com/course/resources/video/7-2.mp4",
              videoId: 35,
              total: 653, //总时长
              ifFinished: false,
            },
            {
              title: "函数的调用",
              video: "http://qgailab.com/course/resources/video/7-3.mp4",
              videoId: 36,
              total: 1214, //总时长
              ifFinished: false,
            },
            {
              title: "函数声明",
              video: "http://qgailab.com/course/resources/video/7-4.mp4",
              videoId: 37,
              total: 976, //总时长
              ifFinished: false,
            },
            {
              title: "函数参数及传递方式",
              video: "http://qgailab.com/course/resources/video/7-5.mp4",
              videoId: 38,
              total: 1658, //总时长
              ifFinished: false,
            },
            {
              title: "递归调用",
              video: "http://qgailab.com/course/resources/video/7-6.mp4",
              videoId: 39,
              total: 807, //总时长
              ifFinished: false,
            },
            {
              title: "数组作为函数参数",
              video: "http://qgailab.com/course/resources/video/7-7.mp4",
              videoId: 40,
              total: 2165, //总时长
              ifFinished: false,
            },
            {
              title: "局部变量和全局变量",
              video: "http://qgailab.com/course/resources/video/7-8.mp4",
              videoId: 41,
              total: 1442, //总时长
              ifFinished: false,
            },
            {
              title: "变量的存储方式和生存期",
              video: "http://qgailab.com/course/resources/video/7-9.mp4",
              videoId: 42,
              total: 1736, //总时长
              ifFinished: false,
            },
            {
              title: "内部函数和外部函数",
              video: "http://qgailab.com/course/resources/video/7-11.mp4",
              videoId: 43,
              total: 97, //总时长
              ifFinished: false,
            },
          ],
        },
        {
          title: "八、指针的运用",
          show: false, //是否展示详细内容
          rate: 0, //进度
          work:
            "能够理解和使用指针变量；能够设计通过指针引用数组和字符串以及指向函数的指针的程序。",
          detail: [
            {
              title: "怎样定义指针变量",
              video: "http://qgailab.com/course/resources/video/8-2-2.mp4",
              videoId: 44,
              total: 629, //总时长
              ifFinished: false,
            },
            {
              title: "怎样引用指针变量",
              video: "http://qgailab.com/course/resources/video/8-2-3.mp4",
              videoId: 45,
              total: 276, //总时长
              ifFinished: false,
            },
            {
              title: "指针变量作为函数参数",
              video: "http://qgailab.com/course/resources/video/8-2-4.mp4",
              videoId: 46,
              total: 863, //总时长
              ifFinished: false,
            },
            {
              title: "在引用数组元素时指针的运算",
              video: "http://qgailab.com/course/resources/video/8-3-2.mp4",
              videoId: 47,
              total: 660, //总时长
              ifFinished: false,
            },
            {
              title: "用数组名作函数参数",
              video: "http://qgailab.com/course/resources/video/8-3-4.mp4",
              videoId: 48,
              total: 1730, //总时长
              ifFinished: false,
            },
            {
              title: "通过指针引用多维数组",
              video: "http://qgailab.com/course/resources/video/8-3-5.mp4",
              videoId: 49,
              total: 1854, //总时长
              ifFinished: false,
            },
            {
              title: "字符串的引用方式",
              video: "http://qgailab.com/course/resources/video/8-4-1.mp4",
              videoId: 50,
              total: 542, //总时长
              ifFinished: false,
            },
            {
              title: "字符指针作函数参数",
              video: "http://qgailab.com/course/resources/video/8-4-2.mp4",
              videoId: 51,
              total: 665, //总时长
              ifFinished: false,
            },
            {
              title: "使用字符指针变量和字符数组的比较",
              video: "http://qgailab.com/course/resources/video/8-4-3.mp4",
              videoId: 52,
              total: 931, //总时长
              ifFinished: false,
            },
            {
              title: "指向指针数据的指针",
              video: "http://qgailab.com/course/resources/video/8-7-2.mp4",
              videoId: 53,
              total: 319, //总时长
              ifFinished: false,
            },
            {
              title: "指针数组作main函数的形参",
              video: "http://qgailab.com/course/resources/video/8-7-3.mp4",
              videoId: 54,
              total: 256, //总时长
              ifFinished: false,
            },
            {
              title: "什么是内存的动态分配",
              video: "http://qgailab.com/course/resources/video/8-8-1.mp4",
              videoId: 55,
              total: 295, //总时长
              ifFinished: false,
            },
            {
              title: "怎样建立内存的动态分配",
              video: "http://qgailab.com/course/resources/video/8-8-2.mp4",
              videoId: 56,
              total: 688, //总时长
              ifFinished: false,
            },
            {
              title: "void指针类型",
              video: "http://qgailab.com/course/resources/video/8-8-3.mp4",
              videoId: 57,
              total: 505, //总时长
              ifFinished: false,
            },
          ],
        },
        {
          title: "九、自定义数据类型",
          show: false, //是否展示详细内容
          rate: 0, //进度
          work:
            "能够定义和使用结构体类型变量；能够定义和使用结构体数组；初步掌握用指针处理链表的方法；了解共用体和枚举类型的概念。",
          detail: [
            {
              title: "自己建立结构体类型",
              video: "http://qgailab.com/course/resources/video/9-1-1.mp4",
              videoId: 58,
              total: 664, //总时长
              ifFinished: false,
            },
            {
              title: "定义结构体类型变量",
              video: "http://qgailab.com/course/resources/video/9-1-2.mp4",
              videoId: 59,
              total: 325, //总时长
              ifFinished: false,
            },
            {
              title: "结构体变量的初始化和引用",
              video: "http://qgailab.com/course/resources/video/9-1-3.mp4",
              videoId: 60,
              total: 886, //总时长
              ifFinished: false,
            },
            // {
            //   title: "定义结构体数组",
            //   video: "http://qgailab.com/course/resources/video/9-2-1.mp4",
            //   videoId: 61,
            //   total: 0,//总时长
            //   ifFinished: false,
            // },
            {
              title: "结构体数组的应用举例",
              video: "http://qgailab.com/course/resources/video/9-2-2.mp4",
              videoId: 61,
              total: 820, //总时长
              ifFinished: false,
            },
            {
              title: "结构体指针",
              video: "http://qgailab.com/course/resources/video/9-3-1.mp4",
              videoId: 62,
              total: 478, //总时长
              ifFinished: false,
            },
            {
              title: "指向结构体数组的指针",
              video: "http://qgailab.com/course/resources/video/9-3-2.mp4",
              videoId: 63,
              total: 229, //总时长
              ifFinished: false,
            },
            // {
            //   title: "用结构体变量和结构体变量的指针作函数参数",
            //   video: "http://qgailab.com/course/resources/video/9-3-3.mp4",
            //   videoId: 65,
            //   total: 0,//总时长
            //   ifFinished: false,
            // },
            {
              title: "什么是链表",
              video: "http://qgailab.com/course/resources/video/9-4-1.mp4",
              videoId: 64,
              total: 871, //总时长
              ifFinished: false,
            },
            {
              title: "建立简单的静态链表",
              video: "http://qgailab.com/course/resources/video/9-4-2.mp4",
              videoId: 65,
              total: 364, //总时长
              ifFinished: false,
            },
            // {
            //   title: "建立动态链表",
            //   video: "http://qgailab.com/course/resources/video/9-4-3.mp4",
            //   videoId: 68,
            //   total: 0,//总时长
            //   ifFinished: false,
            // },
          ],
        },
      ],
      //视屏播放地址
      videoSrc: "",
      //学习任务
      work:
        "理解编程语言的特点;初步掌握在计算机上运行程序的方法；理解算法的概念和特性；能够用N-S流程图来表示算法。",
      //主标题
      mainTitle: "一、C语言概述",
      //副标题
      subtitle: "C语言概述",
      //进度id
      rateId: -1,
      //视频进度
      videoRate: 0,
      //视频章节
      videoChapterIndex: 0,
      //视频小章节
      videoSChapterIndex: 0,
      //控制时间函数
      timer: null,
    };
  },
  created() {
    this.getVideoStatus();
  },
  methods: {
    //展示收起详细内容
    showDetail(index) {
      let { title, work, detail, show } = this.classesList[index];
      this.classesList[index].show = !this.classesList[index].show;

      //展开详细内容时更新
      if (!show) {
        this.videoSrc = detail[0].video;
        this.subtitle = detail[0].title;
        this.mainTitle = title;
        this.work = work;
        this.rateId = detail[0].id;
        this.videoRate = detail[0].rate;
        this.videoChapterIndex = index;
      }
    },

    //展示视频
    showVideo(index1, index2) {
      let { title, work, detail } = this.classesList[index1];
      this.videoSrc = detail[index2].video;
      this.subtitle = detail[index2].title;
      this.mainTitle = title;
      this.work = work;
      this.rateId = detail[index2].id;
      this.videoRate = detail[index2].rate;
      this.videoChapterIndex = index1;
      this.videoSChapterIndex = index2;
    },

    //获取视频进度
    getVideoStatus() {
      let data = new FormData();
      data.append("userId", window.sessionStorage.getItem('userId')); //用户id
      const loading = this.$Message.loading({
        content: "Loading...",
        duration: 0,
      });
      // return;
      this.$http
        .post(this.domain + "/rate/sr", data)
        .then((res) => {
          console.log(res);

          let { code, data } = res.data;
          if (code === 1) {
            this.$Message.success("获取视频进度成功");
            //渲染每个视频的进度
            data.forEach((item, index) => {
              for (let i = 0; i < this.classesList.length; i++) {
                let len = this.classesList[i].detail.length;
                for (let j = 0; j < len; j++) {
                  // console.log()
                  if (this.classesList[i].detail[j].videoId == item.videoId) {
                    //进度id
                    this.classesList[i].detail[j].id = item.id;
                    //视频进度
                    this.classesList[i].detail[j].rate = item.rate;
                    break;
                  }
                }
              }
            });

            //渲染每个章节进度
            let rate = 0;
            for (let i = 0; i < this.classesList.length; i++) {
              rate = 0;
              let len = this.classesList[i].detail.length;
              for (let j = 0; j < len; j++) {
                //观看时长大于等于总时长
                if (
                  this.classesList[i].detail[j].rate >=
                  this.classesList[i].detail[j].total
                )
                  this.classesList[i].detail[j].ifFinished = true;
                //每个章节看完的视频累加
                if (this.classesList[i].detail[j].ifFinished) rate++;
              }
              this.classesList[i].rate = Math.round((rate / len) * 100);
            }

            // console.log(this.classesList);
          } else {
            this.$Message.error("获取视频进度失败");
          }
        })
        .catch((err) => {
          console.log(err);
          if(!window.sessionStorage.getItem('userId')) {
            this.$Message.info('登录获取观看进度');
          } else 
          this.$Message.error("服务器连接失败");
        })
        .finally(() => {
          setTimeout(loading, 0);
        });
    },

    //播放视频，发视频进度给后台并处理
    playVideo(e) {
      let video = e.target;
      //以秒为单位
      // video.currentTime = this.videoRate;
      let rateId = this.rateId;
      // return;
      //每30s发送一次进度给后台存储
      this.timer = setInterval(() => {
        //判断是否在当前页面
        if (rateId != this.rateId) {
          clearInterval(this.timer);
          console.log("错误");
          return false;
        }
        console.log("一直在动");
        //更新前端的数据
        for (let i = 0; i < this.classesList[i].length; i++) {
          let len = this.classesList[i].detail.length;
          for (let j = 0; j < len; j++) {
            if (this.classesList[i].detail[j].id == this.rateId) {
              if (video.currentTime >= video.duration) {
                this.classesList[i].detail[j].rate = Math.floor(video.duration);
              } else {
                this.classesList[i].detail[j].rate = Math.floor(
                  video.currentTime
                );
              }
              break;
            }
          }
        }
        //视屏结束
        if (video.currentTime >= video.duration) {
          clearInterval(this.timer);
          this.updateVideo(Math.floor(video.duration));
          console.log("end");
        } else {
          //没结束时
          this.updateVideo(Math.floor(video.currentTime));
        }
      }, 30000);
    },

    //暂停视频
    stopVideo(e) {
      let video = e.target;
      console.log(Math.floor(video.currentTime), "暂停视频");
      let rate = Math.floor(video.currentTime);
      // if(video.currentTime >= video.duration) {
      //   this.classesList[this.videoChapterIndex].detail[this.videoSChapterIndex].ifFinished = true;
      //   this.classesList[this.videoChapterIndex].detail[this.videoSChapterIndex].rate = Math.floor(video.duration);
      //   this.classesList[this.videoChapterIndex].rate = this.classesList[this.videoChapterIndex].detail[this.videoSChapterIndex].length;
      
      // }
      //清除timer
      clearInterval(this.timer);
      //更新视频进度
      this.updateVideo(rate);
    },

    //预加载
    prePlay(e) {
      let video = e.target;
      //以秒为单位
      video.currentTime = this.videoRate || 0;
    },

    //一直播放视频 @timeupdate="stillPlay($event)"
    /* stillPlay(e) {
      return;
      let video = e.target;
      console.log(Math.floor(video.currentTime), "一直播放");
    }, */

    //更新视频进度 id -- 进度id rate -- 进度
    updateVideo(rate) {
      //无登录时不更新视频进度
      if(!this.rateId) return;
      let data = new FormData();
      data.append("id", this.rateId);
      data.append("rate", rate);
      this.$http
        .post(this.domain + "/rate/ur", data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
#VideoLearn {
  display: flex;
  justify-content: space-between;

  .main_content {
    flex: 2.5;
    margin-bottom: 30px;
    .title_wrap {
      display: flex;
      flex-direction: column;
      justify-content: center;
      // height: 40px;
      // font-size: 18px;

      .title {
        display: flex;
        align-items: center;
        height: 35px;

        .main_title {
        }

        .subtitle {
          font-size: 16px;
          margin-left: 20px;
          color: #338c8f;
        }
      }

      p {
        min-height: 45px;
        color: #868684;
        font-size: 14px;
      }
    }

    .video_area {
      margin-top: 20px;
      .video {
        width: 100%;
        min-height: 380px;
      }
    }

    .online_test {
      display: inline-block;
      margin-top: 20px;
      font-size: 20px;
      color: #57aeb1;
      font-weight: bold;
    }
  }

  .class_list {
    flex: 1;
    margin-top: 25px;
    // background: #ccc;
    padding: 10px;
    font-size: 16px;

    > li {
      // display: flex;
      // justify-content: space-between;
      // align-items: center;

      margin-bottom: 5px;
      margin-left: 5px;
      border-radius: 3px;
      cursor: pointer;

      .class_title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 3px 15px;
        background: #f5f5f5;
        color: #868684;

        span {
          font-weight: 600;
          color: #585858;
        }

        i {
          list-style: normal;
        }

        // 完成后需加的状态
        &.class_done {
          background: #c3f2f3;
        }
      }

      .class_detail {
        font-size: 14px;
        color: #868684;

        > li {
          display: flex;
          align-items: center;
          padding: 3px 5px;

          &:hover > span {
            color: #3b888b;
          }

          // 选择态
          &.class_selected {
            background: #eaf8f9;
          }

          strong {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            border: 1px solid #707070;
            background: #fff;

            &.class_finished {
              background: #707070;
            }
          }

          span {
            margin-left: 10px;
          }
        }
      }
    }
  }
}
</style>