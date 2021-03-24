<template>
  <div id="app2">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/common/layout1/AppHeader';
import Footer from '@/components/common/layout1/AppFooter';

export default {
  components: {
    Header,
    Footer,
  },
  created() {},
};
</script>

<style></style>
