<template>
  <div class="login">
    <el-container>
      <el-aside width="500px" height="1080px">
        <img src="@/assets/login.png" alt="" class="aside" />
      </el-aside>
      <el-main>
        <el-card shadow="hover" class="box-card">
          <template #header>
            <div class="card-header">
              <span>
                <h3>账号登录</h3>
              </span>
            </div>
          </template>

          <el-form :model="loginForm" label-width="120px" :rules="loginRules" ref="loginFormRef">
            <el-form-item label="账号" prop="username">

              <el-input auto-complete="false" v-model="loginForm.username" placeholder="请输入账号/手机号/邮箱">
              </el-input>

            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input type="password" auto-complete="false" v-model="loginForm.password" placeholder="请输入密码">
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button id="btn" type="primary" @click="sub_btn" style="margin-right: 50px;">登录
              </el-button>
              <router-link to="home">
                <el-button type="info">返回首页</el-button>
              </router-link>
            </el-form-item>
          </el-form>

          <template #footer>
            <div class="card-footer">
              <span>Copyright @ 2018 佛山市南海区广工大数控装备协同创新研究院AI云平台 All rights ressrved.</span>
            </div>
          </template>
        </el-card>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
import router from "@/router";
import { ElMessage } from "element-plus";
import { reactive, ref } from "vue";
import type { FormInstance } from 'element-plus';


export default {

  name: "login",
  setup() {
    sessionStorage.clear();
    console.log('session cleared');
    let loginFormRef = ref<FormInstance>();
    let loginForm = reactive({
      username: "",
      password: "",
    });

    let checknull = (rule: any, value: any, callback: any) => {
      if (!value) {
        return callback('不能为空')
      }
    }
    let loginRules = reactive({
      username: [{ validator: checknull, trigger: 'blur' }],
      password: [{ validator: checknull, trigger: 'blur' }]
    })
    let sub_btn = () => {
      if (!loginForm.username || !loginForm.password) {
        ElMessage.error("账号或密码不能为空！");
        return;
      }
      if (loginForm.username == "admin" && loginForm.password == "123456") {
        sessionStorage.setItem("user", loginForm.username);
        router.push('/homepage');
      }
      else {
        ElMessage.error("账号或密码错误！");
      }

    }
    return {
      loginForm,
      sub_btn,
      checknull,
      loginFormRef,
      loginRules
    };
  },

}


</script> 



<style scoped>
.box-card {
  width: 600px;
  height: 350px;
  margin: 100px;
}
</style>