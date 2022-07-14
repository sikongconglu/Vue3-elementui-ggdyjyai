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
          <el-form :model="loginForm" label-width="60px" :rules="rules" ref="loginFormRef">
            <el-form-item label="账号" prop="uname">
              <el-input auto-complete="false" v-model="loginForm.uname" placeholder="请输入账号/手机号/邮箱">
              </el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pwd">
              <el-input type="password" auto-complete="false" v-model="loginForm.pwd" placeholder="请输入密码">
              </el-input>
            </el-form-item>
            <el-form-item>
              <div class="loginbutton">
                <div class="loginbutton1">
                  <el-button id="btn" type="primary" @click="submitForm(loginFormRef)">登录
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
import { reactive, ref, toRefs } from "vue";
import type { FormInstance } from 'element-plus';
import { LoginData, ILoginRetData } from "@/type/login";
import { login } from "@/request/api";
export default {
  name: "login",
  setup() {
    const data = reactive(new LoginData())
    const loginFormRef = ref<FormInstance>()
    const rules = {
      uname: [
        {
          required: true,  //是否必须字段
          message: "请输入用户名",   // 触发的提示信息
          trigger: "blur"   // 触发时机: 当失去焦点时（光标不显示的时候），触发此提示
        },
      ],
      pwd: [
        {
          required: true,  //是否必须字段
          message: "请输入密码",   // 触发的提示信息
          trigger: "blur"   // 触发时机: 当失去焦点时（光标不显示的时候），触发此提示
        },
      ]
    }
    let token = localStorage.getItem("token");
    if (token) {//已登录                   
      router.push('/homepage')
    }
    const submitForm = (formEl: FormInstance | undefined) => {
      // 对表单内容进行验证
      if (!formEl) return
      formEl.validate((valid) => {
        if (valid) {
          login(JSON.stringify({ 'contents': [data.loginForm] })).then((res) => {
            let jsonobj: any = JSON.parse(JSON.stringify(res));
            let iretData: ILoginRetData = <ILoginRetData>jsonobj;
            if (iretData.message == 'ok') {
              if (iretData.result.length > 0) {
                localStorage.setItem("token", iretData.result[0].token)
                localStorage.setItem("jid", iretData.result[0].jid.toString())
                localStorage.setItem("customercode", iretData.result[0].customercode.toString())
                router.push('/homepage')
              }
              else {
                ElMessage.error("数据格式错误！");
              }
            }
            else {
              ElMessage.error("登录错误：" + iretData.message + "!");
            }
          })
        } else {
          ElMessage.error("提交错误！");
          console.log('error submit!')
          return false
        }
      })
    }
    return {
      ...toRefs(data),
      loginFormRef,
      rules,
      submitForm,
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
  margin-inline: 50px;
}
</style>