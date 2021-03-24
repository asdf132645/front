<template>
  <div>
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/common/layout1/AppHeader';
import Footer from '@/components/common/layout1/AppHeader';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style></style>
