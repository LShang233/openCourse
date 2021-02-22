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
      <img src="?" />
    </div>
    <div>
      <p>指导大学生创新创业训练项目</p>
      <pre>
1.一种基于控制器的并行打印系统， 发明专利，专利申请号：201710321442.x
2.一种嵌入式系统及单色位图压缩、主机， 发明专利，专利申请号：201710422841.5
3.一种求救方法、智能头盔、终端及系统， 发明专利，专利申请号：201710404316.0
4.一种车祸监测方法及装置，专利申请号：发明专利，201710403952.1
5.一种可穿戴设备电源管理方法及装置， 发明专利，专利申请号：201710404701.5
（参考原网站）......
      </pre>
    </div>
    <div>
      <p>研究成果：教改论文</p>
      <pre>
1.2015年，”基于CDIO模式的数据库课程设计教学改革与实践”，2015年5期
2.2017年，“软件工程专业五位一体培养体系的探索与实践”，2017年28期
      </pre>
      <div>
        <img src="" />
        <img src="" />
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
          title: "Name",
          key: "name",
        },
        {
          title: "Age",
          key: "age",
        },
        {
          title: "Address",
          key: "address",
        },
      ],
      data1: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03",
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01",
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02",
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04",
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
}
</style>