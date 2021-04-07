<template>
  <div>
    <router-link :to="logoLink" class="logo">
      TIL
      <span v-if="isUserLogin">by {{ $store.state.username }}</span>
    </router-link>
    <div class="navigations">
      <template v-if="isUserLogin">
        <a href="javascript:;" @click="logoutUser" class="logout-button">
          Logout
        </a>
        |
        <router-link to="/auth/mypage">mypage</router-link>
      </template>
      <template v-else>
        <router-link to="/auth/signup">회원가입</router-link> |
        <router-link to="/auth/login">로그인</router-link> |
        <router-link to="/findidpws">id/pw 찾기</router-link>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isUserLogin() {
      return this.$store.getters.isLogin;
    },
    logoLink() {
      return this.$store.getters.isLogin ? '/main' : '/auth/login';
    },
  },
  methods: {
    logoutUser() {
      this.$store.commit('clearUsername');
      this.$store.commit('clearToken');
      sessionStorage.clear();
      localStorage.clear();
      this.$router.push('/auth/login');
    },
  },
};
</script>

<style></style>
