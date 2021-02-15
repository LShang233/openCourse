<template>
  <div id="Layout">
    <Header />
    <router-view class="content"> </router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default {
  name: "Layout",
  components: {
    Header,
    Footer,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
#Layout {
  .content {
    padding-top: 80px;
  }
}
</style>