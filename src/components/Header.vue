<template>
  <div class="header">
    <router-link to="/home"><img src="@/assets/logo.png" alt="" style="height:80px;margin-left: 105px;" /></router-link>
    <div class="loginregister-buttons">
      <el-button type="primary" plain style="margin-right:35px;">注册</el-button>
      <router-link to="login">
        <el-button plain>登录</el-button>
      </router-link>
    </div>
  </div>
</template>


<script lang="ts">
import { useRouter } from "vue-router";


export default {
  name: "Header",

  setup() {
    const router = useRouter();
    const uid = router.currentRoute.value.params.uid;
    console.log(router);
    return {
      uid,

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