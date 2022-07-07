<template>
  <div class="home">
    <el-container>
      <el-header height=82px style="background-color:rgb(1, 10, 20)">
        <Header></Header>
      </el-header>
      <img src="@/assets/banner.png" style="width: 100%;background-color:rgb(1, 10, 20);margin: auto;" />
      <div class="block-title">深度学习云平台建立AI模型</div>
      <el-row :gutter="18" class="row-bg" justify="space-evenly">
        <el-col :span="6">
          <div class="grid-content ep-bg-purple" />
          <div class="item-title">物体检测</div>
          <div class="item-content">
            定制图中每个物体的位置、名称，适合有多个主体、或要识别位置及数量的场景
          </div>
          <div class="item-label">
            <el-button @click="tzlogin()">图片内容检索</el-button>
            <el-button @click="tzlogin()">制造业分拣或质检</el-button>
          </div>
          <div class="use-button">
            <el-button type="primary" @click="tzlogin()">在线使用</el-button>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content ep-bg-purple-light" />
          <div class="item-title">图像分类</div>
          <div class="item-content">
            定制识别一张图中是否是某类物体/状态/场景，适合图片中主体或者状态单一的场景
          </div>
          <div class="item-label">
            <el-button @click="tzlogin()">视频监控</el-button>
            <el-button @click="tzlogin()">工业检测</el-button>
            <el-button @click="tzlogin()">医疗诊断</el-button>
          </div>
          <div class="use-button">
            <el-button type="primary" @click="tzlogin()">在线使用</el-button>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content ep-bg-purple" />
          <div class="item-title">图像分割</div>
          <div class="item-content">
            对比物体检测，支持多边形标注训练数据，模型可识别目标位置及轮廓(像素级)
          </div>
          <div class="item-label">
            <el-button @click="tzlogin()">卫星图像分析</el-button>
            <el-button @click="tzlogin()">医学图像分析</el-button>
          </div>
          <div class="use-button">
            <el-button type="primary" @click="tzlogin()">在线使用</el-button>
          </div>
        </el-col>
      </el-row>
      <br>
      <br>
      <img src="@/assets/process.png" alt="" style="background-color: azure;width: 100%;height:100%;">
      <div class="footer">
        <el-row :gutter="20" >
          <el-col :span="6">
            <div class="grid-content ep-bg-purple" />
            <img src="@/assets/logo.png" alt="" style="height:80px;margin-top: 50px;"/>
          </el-col>
          <el-col :span="3">
            <div class="grid-content ep-bg-purple" />
            <div class="item-title" style="color: rgb(255, 255, 255);margin-top: 50px;font-size: 16px;">新手入门</div>
            <div style="margin-top: 30px;color: rgb(255, 255, 255);font-size: 14px;">说明文档</div>
            <div style="margin-top: 30px;color: rgb(255, 255, 255);font-size: 14px;">标注工具使用说明</div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content ep-bg-purple" />
            <div class="item-title" style="color: rgb(255, 255, 255);margin-top: 50px;font-size: 16px;">保障措施</div>
            <div style="margin-top: 30px;color: rgb(255, 255, 255);font-size: 14px;">用户协议</div>
            <div style="margin-top: 30px;color: rgb(255, 255, 255);font-size: 14px;">隐私协议</div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content ep-bg-purple" />
            <div class="item-title" style="color: rgb(255, 255, 255);margin-top: 50px;font-size: 16px;">关注我们</div>
            <div style="margin-top: 30px;"><img src="@/assets/qrcode.jpg" alt="" style="height:128px;width:128px"></div>
            
          </el-col>
          <el-col :span="5">
            <div class="grid-content ep-bg-purple" />
            <div class="item-title" style="color: rgb(255, 255, 255);margin-top: 50px;font-size: 16px;">全国服务热线</div>
            <div style="color: rgb(255, 255, 255);font-size: 28px; font-weight: 600;">400-114-2025</div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="5">
            <div style="margin-top: 30px;color: rgb(255, 255, 255);font-size: 14px;">技术支持：佛山市广工大创新协同研究院</div>
          </el-col>
          <el-col :span="12">
            <div style="margin-top: 30px;color: rgb(255, 255, 255);font-size: 14px;">Copyright @ 2022 佛山市南海区广工大数控装备协同创新研究院AI云平台 All rights reserved.</div>
          </el-col>
          <el-col :span="3">
            <div style="margin-top: 30px;color: rgb(255, 255, 255);font-size: 14px;">粤ICP备14013016号-3</div>
          </el-col>
        </el-row>
      </div>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ElMessage, ElMessageBox } from 'element-plus'
import Header from '@/components/Header.vue'

export default defineComponent({
  name: "HomeView",
  components: {
    Header
  },
  methods: {
    tzlogin() {
      ElMessageBox.confirm(
        '此功能模块需要登录，是否跳转至登录页面？',
        '提示',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }
      )
        .then(() => {
          this.$router.push('/login');
        })
        .catch(() => {
          ElMessage({
            type: 'info',
            message: '取消成功',
          })
        })
    }
  }
});

</script>

<style scoped>
.banner-img {
  width: 100%;

}

.block-title {
  margin-top: 50px;
  margin-bottom: 50px;
  width: 100%;
  text-align: center;
  font-size: 34px;
  color: #232324;
  font-weight: 600;
}


.item-title {
  font-size: 16px;
  font-weight: 600;
  margin-top: 22px;
  margin-bottom: 24px;
}

.item-content {
  font-size: 16px;
  color: #616365;
  width: 354px;
  text-align: center;
  line-height: 28px;
}

.item-label {
  margin-top: 24px;
  display: flex;
  flex-direction: row;
}

.use-button {
  width: 240px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  margin-top: 16px;
}

.el-row {
  
  width:100%;
}
.footer {
  background-image: url(@/assets/footer.png);
  background-size: cover;
  height:352px;
  
}
</style>