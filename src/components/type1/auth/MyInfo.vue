<template>
  <div>
    <div>
      <label for="email">email:</label>
      <input id="email" type="text" v-model="email" />
    </div>
    <div>
      <label for="fullName">fullName:</label>
      <input id="fullName" type="text" v-model="fullName" />
    </div>
    <P>{{ this.dd }}</P>
    <div @click="userInfoCh">사용자 정보 변경</div>
  </div>
</template>

<script>
import mixin from '@/mixins/ListMixin';
export default {
  mixins: [mixin],
  data() {
    return {
      dd: null,
    };
  },
  computed: {
    authToken() {
      return this.$store.getters.authToken;
    },
  },
  methods: {
    userInfoCh() {
      const userData = {
        email: this.email,
        fullName: this.fullName,
      };
      this.$authReqPost(
        this.$userApi.base,
        this.$userApi.changeInfo,
        this.authToken,
        userData,
        result => {
          if (result != null) {
            if (result.code == this.$rescode.REQ_SUCCESS) {
              this.dd = '변경이 완료되었습니다.';
            }
          }
        },
      );
    },
  },
};
</script>

<style></style>
