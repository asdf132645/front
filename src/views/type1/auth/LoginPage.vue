<template>
  <div>
    <LoginComponents />
  </div>
</template>

<script>
import LoginComponents from '@/components/type1/auth/LoginComponents';
export default {
  data() {
    return {
      type: '',
    };
  },
  components: {
    LoginComponents,
  },
};
</script>

<style></style>
