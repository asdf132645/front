<template>
  <div>
    <div>ss</div>
    <component :is="type">
      <slot />
    </component>
  </div>
</template>

<script>
import LoginComponents1 from '@/components/login/LoginComponents1';
import LoginComponents2 from '@/components/login/LoginComponents2';
import LoginComponents3 from '@/components/login/LoginComponents3';
export default {
  data() {
    return {
      type: '',
    };
  },
  components: {
    LoginComponents1,
    LoginComponents2,
    LoginComponents3,
  },
  created() {
    // if (sessionStorage.getItem('routes') === 'a') {
    // }
  },
};
</script>

<style></style>
