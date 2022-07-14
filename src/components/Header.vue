<template>
  <div class="header">
    <router-link to="/home">
      <img src="@/assets/logo.png" alt="" style="height:80px;margin-left: 105px;" />
    </router-link>
    <div v-if="Ifshow1" class="loginregister-buttons">
      <el-button type="primary" plain style="margin-right:15px;">注册</el-button>
      <router-link to="login">
        <el-button plain>登录</el-button>
      </router-link>
    </div>
    <div v-if="Ifshow2" class="loginregister-buttons">
      <el-button @click="logout()" type="primary" plain style="margin-right:15px">退出登录</el-button>
    </div>
  </div>
</template>
<script lang="ts">
import router from '@/router';
import { inject } from 'vue'
export default {
  name: "Header",
  setup() {
    const pageinfo: string = inject('pageinfo') || '';
    let Ifshow1 = true;
    let Ifshow2 = false;
    if (pageinfo == 'HomePage') {
      Ifshow1 = false;
      Ifshow2 = true;
    }
    const logout = () => {
      localStorage.removeItem("token");
      router.push("/");
    }
    return {
      Ifshow1,
      Ifshow2,
      logout
    }
  },
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