<template>
<div class="header" >
  <el-row class="row-bg" justify="space-between" :gutter="18">
    <el-col :span="6">
      <div class="grid-content ep-bg-purple" />
      <router-link to="/home"><img src="@/assets/logo.png" alt="" style="height:80px;"/></router-link>
    </el-col>
    <el-col :span="6">
      <div class="grid-content ep-bg-purple-light" />
    </el-col>
    <el-col :span="6">
      <div class="grid-content ep-bg-purple" />
      <div class="register-login">
        <el-row>
          <div class="loginregister-buttons" >
            <el-button type="primary" plain style="margin-top:20px;margin-right:20px;">注册</el-button>
          
            <router-link to="login">
              <el-button plain style="margin-top:20px;margin-left:auto;">登录</el-button>
            </router-link>
          </div>
        </el-row>

      </div>
    </el-col>
  </el-row>
</div>
</template>


<script lang="ts">
import { useRouter } from "vue-router";


export default {
  name: "Header",
  
  setup(){
    const router=useRouter();
    const uid=router.currentRoute.value.params.uid;
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
  
}

.el-row {
  align-items: center;
}



</style>