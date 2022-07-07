<template>
  <div class="login">
    <div class="left">
      <img src="@/assets/left_img.png" alt="" class="aside" />
    </div>
    <div class="right">
      <div class="logo">
        <img style="width:274px;margin-right: 125px;" src="@/assets/logo_login.png" alt="">
      </div>
      <div class="card">
        <el-card shadow="hover" class="box-card">
          <template #header>
            <div class="card-header">
              <span>
                <h3>账号登录</h3>
              </span>
            </div>
          </template>

          <el-form :model="loginForm" label-width="60px" :rules="loginRules" ref="loginFormRef">
            <el-form-item label="账号" prop="username">

              <el-input auto-complete="false" v-model="loginForm.username" placeholder="请输入账号/手机号/邮箱">
              </el-input>

            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input type="password" auto-complete="false" v-model="loginForm.password" placeholder="请输入密码">
              </el-input>
            </el-form-item>
            <el-form-item>
              <div class="loginbutton">
                <div class="loginbutton1">
                  <el-button id="btn" type="primary" @click="sub_btn" >登录
                  </el-button>
                </div>
                <div class="loginbutton1">
                  <router-link to="home">
                    <el-button type="info">返回首页</el-button>
                  </router-link>
                </div>
              </div>

            </el-form-item>
          </el-form>
        </el-card>
      </div>
      <div class="rfooter">
        <div class="rfooter1">
          <div class="rfooter2">说明文档</div>
          <div class="rfooter2">用户协议</div>
          <div class="rfooter2">隐私政策</div>
          <div class="rfooter2">关于我们</div>
        </div>
        <div class="rfooter1">
          <div class="rfooter2">Copyright @ 2018 佛山市南海区广工大数控装备协同创新研究院AI云平台 All rights ressrved.</div>
        </div>
      </div>
    </div>

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
.login {
  display: flex;
  justify-content: space-around;
  height: auto;
}

.right {
  display: flex;
  flex-direction: column;
}

.box-card {
  width: auto;
  height: auto;
  margin-top: 150px;
}

.rfooter {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px;
}

.rfooter1 {
  display: flex;
  margin: 25px;
  justify-content: space-between;
}

.rfooter2 {
  font-size: 14px;
  color: #2c3e50;
  margin-inline: 25px;
}
.loginbutton {
  display: flex;
  flex-direction: row;
}
.loginbutton1 {
  margin-inline:50px;
}
</style>