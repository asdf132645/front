<template>
  <div>
    <div>
      <label for="phoneNumber">phoneNumber:</label>
      <input id="phoneNumber" type="text" v-model="phoneNumber" />
    </div>
    <div>
      <label for="fullName">fullName:</label>
      <input id="fullName" type="text" v-model="fullName" />
    </div>
    <div>
      {{ this.findName }}
    </div>
    <div @click="testTokenss">아이디 찾기</div>
  </div>
</template>

<script>
import mixin from '@/mixins/ListMixin';
import { rescode } from '@/api/common/consts';
export default {
  mixins: [mixin],
  methods: {
    testTokenss() {
      const userData = {
        fullName: this.fullName,
        phoneNumber: this.phoneNumber,
      };
      this.$reqPost(
        this.$userApi.base,
        this.$userApi.findUsername,
        '',
        userData,
        result => {
          if (result != null) {
            if (result.code == rescode.REQ_SUCCESS) {
              console.log(rescode.REQ_SUCCESS);
              this.findName = result.data.usernames;
              this.initForm();
            }
          }
        },
      );
    },
    initForm() {
      this.fullName = '';
      this.phoneNumber = '';
    },
  },
};
</script>

<style></style>
