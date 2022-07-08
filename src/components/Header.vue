<template>
  <div class="header">
    <router-link to="/home"><img src="@/assets/logo.png" alt="" style="height:80px;margin-left: 105px;" /></router-link>
    <div v-if="Ifshow" class="loginregister-buttons">
      <el-button type="primary" plain style="margin-right:15px;">注册</el-button>
      <router-link to="login">
        <el-button plain>登录</el-button>
      </router-link>
    </div>
  </div>
</template>


<script lang="ts">
import { inject } from 'vue'

export default {
  name: "Header",
  setup() {
    const pageinfo: string = inject('pageinfo') || '';
    let Ifshow = true;
    if (pageinfo == 'HomePage') {
      Ifshow = false;
    }
    return {
      Ifshow
    }

  }

};
</script>

<style scoped>
.header {
  background-color: rgb(1, 10, 20);
  height: 80px;
  display: flex;
  justify-content: space-between;

}

.loginregister-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 125px;
}
</style>