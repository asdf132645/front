<template>
  <div>
    <LoginComponents2 />
  </div>
</template>

<script>
import LoginComponents2 from '@/components/auth/LoginComponents2.vue';
export default {
  data() {
    return {
      type: '',
    };
  },
  components: {
    LoginComponents2,
  },
  created() {},
};
</script>

<style></style>
