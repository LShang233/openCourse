<template>
  <div class="about-us-ul">
    <ul>
      <li>
        <router-link to="/TeacherGroup">师资团队</router-link>
      </li>
      <li>
        <router-link to="/ReformAndResearch">教学改革与研究</router-link>
      </li>
      <li>
        <router-link to="/Awards">获奖情况</router-link>
      </li>
      <li>
        <router-link to="/TeacherStyle">校级十佳教师风采</router-link>
      </li>
      <li>
        <router-link to="/ActivitySilhouette">活动剪影</router-link>
      </li>
      <li>
        <router-link to="/NotificationForm">申报书</router-link>
      </li>
      <li>
        <router-link to="/UniversityAlliance">高校联盟</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.about-us-ul {
  width: 180px;
  background-color: rgb(250, 247, 250);
  text-align: center;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.16);
  cursor: pointer;
  li {
    &:hover {
      background-color: #57aeb1;
      a {
        color: white;
      }
    }
    a {
      display: inline-block;
      padding: 12px 24px;
      color: #868684;
      font-weight: 600;
      width: 100%;
      height: 100%;
    }
  }
}
</style>