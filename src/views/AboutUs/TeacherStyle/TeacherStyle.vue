<template>
  <div>
    <div class="teacher-group" v-show="htmlId == 1">
      <p>校级十佳教师风采</p>
      <div class="teacher-cards">
        <TeacherCard
          :src="require('./../../../assets/teacherstyle/head/xie.2730c8e.png')"
          :name="'谢光强'"
          :content="'博士、副教授\n广东工业大学计算机学院副院长\n中国人工智能学会科普工作委员会委员'"
          :main="'人工智能,移动互联网,数据挖掘'"
          @click.native="toPage(0)"
        />
        <TeacherCard
          :src="require('./../../../assets/teacherstyle/head/yang.png')"
          :name="'李杨'"
          :content="'博士，副教授\n广东工业大学计算机学院计算机科学系副主任\n广东省计算机学会大数据专业委员会会员'"
          :main="'人工智能,移动互联网,数据挖掘'"
          @click.native="toPage(5)"
        />
        <TeacherCard
          :src="require('./../../../assets/teacherstyle/head/ying.f8cd54b.jpg')"
          :name="'曾颖'"
          :content="'广东工业大学计算机学院讲师\n广东工业大学十佳青年授课教师'"
          :main="'数据结构与算法'"
          @click.native="toPage(8)"
        />
        <TeacherCard
          :src="require('./../../../assets/teacherstyle/head/lu.b03aa5f.jpg')"
          :name="'路璐'"
          :content="'广东工业大学计算机学院讲师\n十佳青年授课教师'"
          :main="'信息安全'"
          @click.native="toPage(11)"
        />
      </div>
    </div>
    <div class="teacher-detail" v-show="htmlId == 2">
      <div>
        <label @click="htmlId = 1">十佳教师</label>
        <span v-if="teacherId == 0">谢光强</span>
        <span v-if="teacherId == 5">李杨</span>
        <span v-if="teacherId == 8">曾颖</span>
        <span v-if="teacherId == 11">路璐</span>
      </div>
      <div v-if="teacherId == 0">
        <div class="detail-photo">
          <img src="./../../../assets/teacherstyle/head/xie.2730c8e.png" />
          <p class="teacher-name">谢光强</p>
        </div>
        <div class="teacher-main">
          <p>在教学方面所获奖项</p>
          <pre>
1、2017 广东省教育教学成果奖（高等教育）“一等奖”（排名第八）
2、2016 广东省第五届师德征文活动“二等奖”
3、2012 广东省第一届高等院校青年教师教学基本功大赛 “优秀奖”
4、2017 广东工业大学“师德标兵”
5、2009 广东工业大学“十佳授课教师”
6、2007 广东工业大学“学生最喜爱的教师”
7、2012 广东工业大学“年度优秀教师”
8、广东工业大学教学优秀“一等奖”（5次）
9、广东工业大学教学优秀“二等奖”（4次）
10、2010 云浮市“科学技术奖二等奖”（排名第二）
11、2013 广东工业大学“科研工作先进者”
12、2011 广东工业大学“优秀指导老师”
13、广东工业大学“优秀班主任”（2005-2008，2017）
14、2007 计算机学院“师德先进个人”
15、2009 广东工业大学“大学毕业生就业工作先进个人”
16、2015 广东工业大学“优秀工会积极分子”
17、2008年-2018年 进行毕业设计指导时，为学生选择高质量和有创新性的题目，耐心指导，连续十一年指导学生获得“毕业设计指导创新奖”
18、2016-2017-1学期所讲授的《程序设计》课程，学生评教得分名列全校第一，评教分数连续六年学院排名第一。
          </pre>
          <div class="honor-photo">
            <!-- <img
              v-for="(item, index) in detailTeacher.honorPhoto"
              :key="index"
              :src="item"
            /> -->
            <div class="activity">
              <p>获奖照片</p>
              <div class="activity-photos">
                <div>
                  <div>
                    <img
                      src="./../../../assets/teacherstyle/xie/xie1.b7293c2.jpg"
                    />
                  </div>
                  <p>青年教师教学竞赛演讲比赛获奖</p>
                </div>
                <div>
                  <div>
                    <img
                      src="./../../../assets/teacherstyle/xie/xie2.a795652.jpg"
                    />
                  </div>
                  <p>青年教师教学竞赛演讲比赛获奖</p>
                </div>
                <div>
                  <div>
                    <img
                      src="./../../../assets/teacherstyle/xie/xie3.5dcf113.jpg"
                    />
                  </div>
                  <p>青年教师教学竞赛演讲比赛获奖</p>
                </div>
                <div>
                  <div>
                    <img
                      src="./../../../assets/teacherstyle/xie/xie4.086d56b.jpg"
                    />
                  </div>
                  <p>青年教师教学竞赛演讲比赛获奖</p>
                </div>
                <div>
                  <div>
                    <img
                      src="./../../../assets/teacherstyle/xie/1.839a584.png"
                    />
                  </div>
                  <p>青年教师教学竞赛演讲比赛证书</p>
                </div>
                <div>
                  <div>
                    <img
                      src="./../../../assets/teacherstyle/xie/2.6ffb21d.png"
                    />
                  </div>
                  <p>广东工业大学师德标兵获奖证书</p>
                </div>
                <div>
                  <div>
                    <img
                      src="./../../../assets/teacherstyle/xie/3.2a15392.png"
                    />
                  </div>
                  <p>青年教师教学基本功大赛获奖证书</p>
                </div>
                <div>
                  <div>
                    <img
                      src="./../../../assets/teacherstyle/xie/4.c6f67d4.png"
                    />
                  </div>
                  <p>教学优秀一等奖证书</p>
                </div>
                <div>
                  <div>
                    <img
                      src="./../../../assets/teacherstyle/xie/5.c77bf3a.png"
                    />
                  </div>
                  <p>教学优秀一等奖证书</p>
                </div>
                <div>
                  <div>
                    <img
                      src="./../../../assets/teacherstyle/xie/6.0f247dd.png"
                    />
                  </div>
                  <p>教学优秀一等奖证书</p>
                </div>
                <div>
                  <div>
                    <img
                      src="./../../../assets/teacherstyle/xie/7.3708d03.png"
                    />
                  </div>
                  <p>教学优秀一等奖证书</p>
                </div>
                <div>
                  <div>
                    <img
                      src="./../../../assets/teacherstyle/xie/8.d761533.png"
                    />
                  </div>
                  <p>教学优秀二等奖证书</p>
                </div>
                <div>
                  <div>
                    <img
                      src="./../../../assets/teacherstyle/xie/9.2600620.png"
                    />
                  </div>
                  <p>教学优秀二等奖证书</p>
                </div>
                <div>
                  <div>
                    <img
                      src="./../../../assets/teacherstyle/xie/10.785e2e4.png"
                    />
                  </div>
                  <p>教学优秀二等奖证书</p>
                </div>
                <div>
                  <div>
                    <img
                      src="./../../../assets/teacherstyle/xie/11.8c6b0f8.png"
                    />
                  </div>
                  <p>教学优秀二等奖证书</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="teacherId == 5">
        <div class="detail-photo">
          <img src="./../../../assets/teacherstyle/head/yang.png" />
          <p class="teacher-name">李杨</p>
        </div>
        <div class="teacher-main">
          <p>在教学方面所获奖项</p>
          <pre>
1.广东工业大学“十佳授课教师”
2.广东工业大学“年度优秀教师”
3.云浮市“科学技术奖二等奖”
4.广东工业大学“科研工作先进者”
5.广东工业大学教学优秀“一等奖”，“二等奖”
6.广东工业大学“优秀指导老师”
7.广东工业大学年度考核“优秀”
8.广东工业大学“优秀班主任”
9.“计算机学院师德先进个人”</pre
          >
          <div class="honor-photo">
            <div class="activity">
              <p>获奖照片</p>
              <div class="activity-photos">
                <div>
                  <div>
                    <img
                      src="./../../../assets/teacherstyle/li/li1.71af94a.jpg"
                    />
                  </div>
                  <p>青年教师教学竞赛演讲比赛</p>
                </div>
                <div>
                  <div>
                    <img
                      src="./../../../assets/teacherstyle/li/li2.e438043.jpg"
                    />
                  </div>
                  <p>青年教师教学竞赛演讲比赛</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="teacherId == 8">
        <div class="detail-photo">
          <img src="./../../../assets/teacherstyle/head/ying.f8cd54b.jpg" />
          <p class="teacher-name">曾颖</p>
        </div>
        <div class="teacher-main">
          <p>在教学方面所获奖项</p>
          <pre>
1.获第6届广东工业大学“十佳青年授课教师“称号”
2.获教学优秀一等奖一次，二等奖两次
        </pre
          >
          <div class="honor-photo">
            <div class="activity">
              <p>获奖照片</p>
              <div class="activity-photos">
                <div>
                  <div>
                    <img
                      src="./../../../assets/teacherstyle/zeng/ying1.35ea482.jpg"
                    />
                  </div>
                  <p>青年教师竞赛演讲</p>
                </div>
                <div>
                  <div>
                    <img
                      src="./../../../assets/teacherstyle/zeng/ying2.f7c58d9.jpg"
                    />
                  </div>
                  <p>青年教师竞赛演讲</p>
                </div>
                <div>
                  <div>
                    <img
                      src="./../../../assets/teacherstyle/zeng/ying3.6bb9e49.png"
                    />
                  </div>
                  <p>十佳授课教师获奖证书</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="teacherId == 11">
        <div class="detail-photo">
          <img src="./../../../assets/teacherstyle/head/lu.b03aa5f.jpg" />
          <p class="teacher-name">路璐</p>
        </div>
        <div class="teacher-main">
          <p>在教学方面所获奖项</p>
          <pre>
1.2014年获得广东工业大学十佳授课教师
2.获得2014-2015学年度，广东工业大学教学优秀一等奖
3.获得2015-2016学年度，广东工业大学教学优秀一等奖
</pre
          >
          <div class="honor-photo">
            <div class="activity">
              <p>获奖照片</p>
              <div class="activity-photos">
                <div>
                  <div>
                    <img
                      src="./../../../assets/teacherstyle/lu/lu1.f95a55d.png"
                    />
                  </div>
                  <p>教学优秀一等奖证书</p>
                </div>
                <div>
                  <div>
                    <img
                      src="./../../../assets/teacherstyle/lu/lu2.4337b4c.png"
                    />
                  </div>
                  <p>教学优秀一等奖证书</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TeacherCard from "./../../../components/TeacherCard/TeacherCard";
export default {
  data() {
    return {
      htmlId: 1,
      teacherId: 0,
      detailTeacher: {
        name: "谢光强",
        content:
          '谢光强，博士，副教授，广东工业大学计算机学院副院长，中国人工智能学会科普工作委员会委员、中国人工智能学会知识工程与分布智能专业委员会青年委员、CCF计算机应用专业委员会通信委员、广东省青年科学家协会第四届理事、广东省科技咨询专家库专家、CCF YOCSEF 广州委员、广东省计算机学会大数据专业委员会委员、广东省电子政务大数据专家委员会专家，广东省科技咨询专家库专家，广东省高等学校"千百十工程"培养对象、广东工业大学创新行动计划专家委员会委员。 \n\n主要研究领域为人工智能、移动互联网、数据挖掘。主持和参加国家自然科学基金、省市科技等各类项目30余项，申请专利和软件著作权33项，获授权23项，发表论文20余篇。个人共获各类省、市、校奖项40余项，指导学生获各类科技竞赛奖项140余项，其中省级以上奖项50余项，其中被评选为广东工业大学“学生最喜爱的教师”、“十佳授课教师”、“师德标兵”、“年度优秀教师” ，获得“先进科技工作者”、“教学优秀一等奖”、“计算机学院师德先进个人”等荣誉称号。\n\n一、主持1项省精品资源共享课，3项校教育教学改革项目, 参与的教改成果《与产业深度融合全程融入的大学生创新创业教育改革与实践》，获得了2017年广东省教育教学成果奖（高等教育）“一等奖”。\n\n二、主持研发的一项科技成果《质量计量信息一体化网络平台》通过成果鉴定，为省内首创，获得云浮市级科技进步奖二等奖,该成果推广到多个国家级、地市级产品质量检测机构。负责国内首部石材企业信用等级的划分与评定标准的设计工作，编制了广东省地方标准《石材生产企业信用等级的划分与评定》,为国内石材企业信用评级提出标准，主持研发了配套的《石材企业信用评级网络平台》，实现石材企业信用的网络化实时自动评级，广东省3000多家石材企业信用数据都将纳入平台进行管理，为广东省石材企业信用实现标准化、信息化提供了重要支撑。\n\n三、指导学生获各类科技竞赛奖项140余项，省级以上奖项50余项，指导学生获得第十四届"挑战杯"全国大学生课外学术科技作品竞赛"智慧城市"专项赛决赛"特等奖"（全国共三项）、第十二届"挑战杯"全国大学生课外学术科技作品竞赛终审决赛"一等奖"，均刷新了学校在"挑战杯"竞赛中获奖层次的记录！指导的大学生科技成果受到了广东卫视、广州日报、新快报等主流媒体的广泛关注和报道，2017年5月，项目组接受了广东卫视专访并介绍了项目的主要内容和成果，采访内容在《广东新闻联播》中作为头条播出，作品获广东省教育厅推荐，代表广东省参加2017第十届全国大学生创新创业年会。\n\n四、创建了学生科研创新团队“QG工作室”，大力提高学生科研创新、团队协作能力，工作室被评为广东工业大学“标志性获奖团队”；申请国家大学生创新创业训练计划、广东省大学生科技创新培育专项(重点)资金等项目30多项。“QG工作室”获得了由共青团中央、全国青联、全国学联、全国少工委、中国青少年科技创新奖励基金共同设立的，以邓小平同志命名的大学生“小平科技创新团队”称号，广东省共有两个团队获得此项称号，全国共50个大学生科技创新团队获得此项称号。\n\n五、培养的学生多人获得“国家一等奖学金”等各类奖学金、获得“广东工业大学十佳优秀学业大学生”称号3人（人数约占当年毕业生总数的千分之一），“广东工业大学十佳创新之星”称号2人，“广东工业大学十佳自强不息大学生”提名奖1人。\n\n六、培养的大部分学生进入了华为、阿里巴巴、百度、腾讯、京东等知名IT公司工作，获得用人单位的肯定和好评！其中指导的毕业生，曾获得了"百度最佳个人"（该奖项颁发为一年一度，颁发给百度优秀杰出员工，名额每年只有五个）、“腾讯最佳员工”（人数约占腾讯员工数的5%）、“腾讯微信事业群绩效突出者”（人数约占微信事业群1700人的10%）。',
        class: "课程负责人",
        honor:
          "1、2017 广东省教育教学成果奖（高等教育）“一等奖”（排名第八）\n2、2016 广东省第五届师德征文活动“二等奖”\n3、2012 广东省第一届高等院校青年教师教学基本功大赛 “优秀奖”\n4、2017 广东工业大学“师德标兵”\n5、2009 广东工业大学“十佳授课教师”\n6、2007 广东工业大学“学生最喜爱的教师”\n7、2012 广东工业大学“年度优秀教师”\n8、广东工业大学教学优秀“一等奖”（5次）",
        photoSrc: "",
        honorPhoto: ["1", "2", "3", "4", "5"],
      },
    };
  },
  components: {
    TeacherCard,
  },
  methods: {
    toPage(index) {
      this.htmlId = 2;
      this.teacherId = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.teacher-group {
  width: 100%;
  > p {
    font-size: 16px;
    font-weight: 600;
  }
  .teacher-cards {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
}
.teacher-detail {
  > div:first-child {
    font-weight: 600;
    label {
      color: #57aeb1;
      margin-right: 12px;
      font-size: 16px;
      cursor: pointer;
      &:hover {
        border-bottom: 1px solid #57aeb1;
      }
    }
  }
  > div:nth-child(2) {
    width: 100%;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    margin: 12px auto;
    padding: 48px 64px;
    .detail-photo {
      width: 72px;
      margin: 0 36px 36px 0;
      float: left;
      img {
        width: 72px;
        height: 100px;
        background: #868684;
        border-radius: 8px;
        overflow: hidden;
        border: none;
      }
      p {
        font-size: 10px;
        text-align: center;
        color: #868684;
      }
      .teacher-name {
        color: #585858;
        font-weight: 600;
        letter-spacing: 0.1em;
        font-size: 16px;
      }
    }
    .teacher-main {
      width: 100%;
      p {
        font-size: 14px;
        font-weight: 600;
        margin: 8px 0;
        &:first-child {
          margin-top: 0;
        }
      }
      pre {
        margin-left: 24px;
        font-size: 10px;
        white-space: pre-wrap;
        word-wrap: break-word;
      }
      .honor-photo {
        width: calc(100% + 16px);
        margin: 12px -8px;
        display: flex;
        flex-wrap: wrap;

        img {
          width: calc(25% - 16px);
          height: 140px;
          margin: 8px;
          background-color: #868684;
        }
      }
    }
  }
}
.activity {
  > p {
    font-weight: 600;
    font-size: 16px;
  }
  .activity-photos {
    width: calc(100% + 24px);
    margin: 0 -12px;
    display: flex;
    flex-wrap: wrap;
    > div {
      width: 22%;
      height: 160px;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.16);
      text-align: center;
      margin: 12px;
      > div {
        background-color: #868684;
        width: 100%;
        height: 80%;
        line-height: 80%;
        text-align: center;
        overflow: hidden;
        img {
          padding: 0 !important;
          width: 100% !important;
          height: 100% !important;
          overflow: hidden;
          margin: 0 !important;
        }
      }
      p {
        font-size: 12px !important;
        margin: 0 !important;
        height: 20%;
        width: 100%;
        display: inline-block;
        padding: 4px 0;
        background-color: #f8f8f8;
      }
    }
  }
}
</style>