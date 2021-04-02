<template>
  <div>
    <div>ss</div>
    <component :is="type">
      <slot />
    </component>
  </div>
</template>

<script>
import LoginComponents1 from '@/components/auth/LoginComponents1';
import LoginComponents2 from '@/components/auth/LoginComponents2';
import LoginComponents3 from '@/components/auth/LoginComponents3';
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
    if (sessionStorage.getItem('routes') === 'a') {
      this.type = 'LoginComponents1';
    }
  },
};
</script>

<style></style>
