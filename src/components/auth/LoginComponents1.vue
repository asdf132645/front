<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">id:</label>
          <input id="username" type="text" v-model="username" />
          <!-- <p class="validation-text">
            <span class="warning" v-if="!isUsernameValid && username">
              Please enter an email address
            </span>
          </p> -->
        </div>
        <div>
          <label for="password">pw:</label>
          <input id="password" type="text" v-model="password" />
        </div>
        <button type="submit" class="btn">
          로그인
        </button>

        <div>
          <label for="phoneNumber">phoneNumber:</label>
          <input id="phoneNumber" type="text" v-model="phoneNumber" />
        </div>
        <div>
          <label for="fullName">fullName:</label>
          <input id="fullName" type="text" v-model="fullName" />
        </div>
        <div>
          <label for="email">email:</label>
          <input id="email" type="text" v-model="email" />
        </div>
        <div @click="testTokenss">아이디 찾기</div>
        <div @click="userInfoCh">사용자 정보 변경</div>
        {{ this.findName }}
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script>
import { userapi } from '@/api/common/api';
import { reqPost, authReqPost } from '@/api/common/request';

export default {
  data() {
    return {
      // form values
      username: '',
      password: '',
      // log
      logMessage: '',
      phoneNumber: '',
      fullName: '',
      findName: '',
      email: '',
    };
  },
  computed: {
    authToken() {
      return this.$store.getters.authToken;
    },
  },
  methods: {
    async submitForm() {
      try {
        // 비즈니스 로직
        const userData = {
          username: this.username,
          password: this.password,
        };
        await this.$store.dispatch('LOGIN', userData);
        // this.$router.push('/main');
      } catch (error) {
        // 에러 핸들링할 코드
        console.log(error);
        this.logMessage = error.response.data.message;
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
    },
    testTokenss() {
      const userData = {
        fullName: this.fullName,
        phoneNumber: this.phoneNumber,
      };
      reqPost(userapi.base, userapi.findUsername, '', userData, data => {
        console.log(data.data.usernames);
        this.findName = data.data.usernames;
      });
    },
    userInfoCh() {
      const userData = {
        email: this.email,
        fullName: this.fullName,
      };
      authReqPost(
        userapi.base,
        userapi.changeInfo,
        this.authToken,
        userData,
        data => {
          console.log(data + this.authToken);
        },
      );
    },
  },
};
</script>

<style></style>
