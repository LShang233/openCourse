<template>
  <div class="reform-title">
    <p>广东工业大学计算机学院教学改革项目列表（省级、校级）</p>
    <div>
      <p>教改项目</p>
      <Table
        :columns="columns1"
        :data="data1"
        style="z-index: -1; margin: 0; width: 100%"
      ></Table>
    </div>
    <div>
      <p>指导大学生创新创业训练项目</p>
      <iframe src="http://qgailab.com/course/static/pdf/5.0b9f967.pdf" class="guide_project"></iframe>
    </div>
    <div>
      <p>指导大学生创新创业训练项目</p>
      <pre>
1.一种基于控制器的并行打印系统， 发明专利，专利申请号：201710321442.x
2.一种嵌入式系统及单色位图压缩、主机， 发明专利，专利申请号：201710422841.5
3.一种求救方法、智能头盔、终端及系统， 发明专利，专利申请号：201710404316.0
4.一种车祸监测方法及装置，专利申请号：发明专利，201710403952.1
5.一种可穿戴设备电源管理方法及装置， 发明专利，专利申请号：201710404701.5
6.一种基于体感设备的康复训练评估方法及系统， 发明专利，专利申请号：201710533108.0
7.一种基于控制器的并行打印系统， 实用新型专利，专利申请号：201720511717.1
8.一种嵌入式系统及单色位图压缩主机， 实用新型专利，专利申请号：201720659842.7
9.一种智能急救头盔， 实用新型专利，专利申请号：201720626760.2
10.一种车祸监测系统， 实用新型专利，专利申请号：201720632265.2
11.一种可穿戴设备电源管理装置， 实用新型专利，专利申请号：201720632371.0
12.一种基于体感设备的康复训练评估系统， 实用新型专利， 专利申请号：201720802908.3
13.一款头盔内部硬件构造专利，外观专利， 专利申请号：2017302528844
14.订单集群打印系统，计算机软件著作权，软著登记号：2017SR267145
15.移动订单管理及打印系统，计算机软件著作权，软著登记号：2017SR274760
16.微型控制打印系统，计算机软件著作权，软著登记号：2017SR274774
17.智能急救头盔系统，计算机软件著作权，软著登记号：2017SR287905
18.智能急救头盔APP软件，计算机软件著作权，软著登记号：2017SR288722
19.康复训练及评估平台，计算机软件著作权，软著登记号：2017SR385752
20.康复训练及评估移动管理系统，计算机软件著作权，软著登记号：2017SR385305
      </pre>
      <iframe src="http://qgailab.com/course/static/pdf/6.d18a2da.pdf" class="guide_project"></iframe>
    </div>
    <div>
      <p>研究成果：教改论文</p>
      <pre>
1.2015年，”基于CDIO模式的数据库课程设计教学改革与实践”，2015年5期
2.2017年，“软件工程专业五位一体培养体系的探索与实践”，2017年28期
      </pre>
      <div>
        <img src="../../../assets/images/result1.png" />
        <img src="../../../assets/images/result2.png" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      columns1: [
        {
          title: "序号",
          key: "num",
        },
        {
          title: "时间",
          key: "time",
        },
        {
          title: "教改项目名称",
          key: "name",
        },
        {
          title: "负责人",
          key: "man",
        },
        {
          title: "项目级别",
          key: "level",
        },
      ],
      data1: [
        {
          num: 1,
          time: 2015,
          name: "广东省精品资源共享课《程序设计》",
          man: "谢光强",
          level: "省级",
        },
        {
          num: 2,
          time: 2016,
          name:
            "广东省教学改革项目《基于android的数据库移动学习交互平台的研究与实践》",
          man: "路璐",
          level: "省级",
        },
        {
          num: 3,
          time: 2015,
          name: "《高水平实验教学示范中心建设的探索与研究》",
          man: "谢光强",
          level: "校级",
        },
        {
          num: 4,
          time: 2014,
          name: "《挑战杯竞赛为平台培养大学生创新能力的探索和研究》",
          man: "谢光强",
          level: "校级",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.reform-title {
  > p {
    font-weight: 600;
    font-size: 16px;
    color: #585858;
    line-height: 36px;
    height: 36px;
  }
  > div {
    margin-bottom: 24px;
    > p {
      font-size: 12px;
      margin: 8px 0;
      font-weight: 600;
      color: #868684;
    }
    > pre {
      font-size: 12px;
      color: #868684;
    }
    > img {
      width: 100%;
      height: 460px;
      background-color: #868684;
    }
    > div {
      width: calc(100% + 24px);
      height: 240px;
      margin: 0 -12px;
      display: flex;
      > img {
        width: 50%;
        height: 100%;
        margin: 0 12px;
        background-color: #868684;
      }
    }
  }

  .guide_project {
    border: none;
    width: 100%;
    height: 500px;
  }
}
</style>