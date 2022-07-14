<template>
  <div class="home">
    <Header></Header>
    <img src="@/assets/banner.png" style="width: 100%;background-color:rgb(1, 10, 20);margin: auto;" />
    <div class="block-title">深度学习云平台建立AI模型</div>
    <div class="aimodel">
      <div class="aimodel1">
        <div>
          <img style="width:274px" src="@/assets/detection.png" alt="">
        </div>
        <div class="item-title">物体检测</div>
        <div class="item-content">
          定制图中每个物体的位置、名称，适合有多个主体、或要识别位置及数量的场景
        </div>
        <div class="item-label">
          <el-button @click="tzlogin()">图片内容检索</el-button>
          <el-button @click="tzlogin()">制造业分拣或质检</el-button>
        </div>
        <div class="use-button">
          <el-button style="width:100%" type="primary" @click="tzlogin()">在线使用</el-button>
        </div>
      </div>
      <div class="aimodel1">
        <div>
          <img style="width:274px" src="@/assets/production.png" alt="">
        </div>
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
          <el-button style="width:100%" type="primary" @click="tzlogin()">在线使用</el-button>
        </div>
      </div>
      <div class="aimodel1">
        <div>
          <img style="width:274px" src="@/assets/split.png" alt="">
        </div>
        <div class="item-title">图像分割</div>
        <div class="item-content">
          对比物体检测，支持多边形标注训练数据，模型可识别目标位置及轮廓(像素级)
        </div>
        <div class="item-label">
          <el-button @click="tzlogin()">卫星图像分析</el-button>
          <el-button @click="tzlogin()">医学图像分析</el-button>
        </div>
        <div class="use-button">
          <el-button style="width:100%" type="primary" @click="tzlogin()">在线使用</el-button>
        </div>
      </div>
    </div>
    <br>
    <br>
    <br>
    <div style="background-color: aliceblue; background-size: cover;">
      <br>
      <br>
      <div class="block-title">产品功能</div>
      <div class="gn">
        <div class="gn1">
          <div class="item-title">数据管理</div>
          <div class="item-content">使用储存在平台的数据作为数据集，供模型训练调用</div>
        </div>
        <div class="gn1">
          <div class="item-title">模型训练</div>
          <div class="item-content">简化创建模型、训练模型过程，提供多种GPU硬件资源</div>
        </div>
      </div>
      <div class="gn">
        <div class="gn1">
          <div class="item-title">校验服务</div>
          <div class="item-content">可通过模型校验了解模型效果</div>
        </div>
        <div class="gn1">
          <div class="item-title">模型仓库</div>
          <div class="item-content">一键下载满足需求的模型，供各种应用使用</div>
        </div>
      </div>
      <br>
      <br>
    </div>
    <div style="background-color: azure; background-size: cover;">
      <div style="display: flex;justify-content: center;">
        <img src="@/assets/process.png" alt="" style="height: auto;max-width: 1200px;margin: 89px;">
      </div>
    </div>
    <div class="footer">
      <div class="footer1">
        <div class="footer11"><img src="@/assets/logo.png" alt="" style="height:80px;margin-top: 50px;" /></div>
        <div class="footer12">
          <div class="item-title" style="color: rgb(255, 255, 255);margin-top: 50px;font-size: 16px;">新手入门</div>
          <div style="margin-top: 30px;color: rgb(255, 255, 255);font-size: 14px;">说明文档</div>
          <div style="margin-top: 30px;color: rgb(255, 255, 255);font-size: 14px;">标注工具使用说明</div>
        </div>
        <div class="footer13">
          <div class="item-title" style="color: rgb(255, 255, 255);margin-top: 50px;font-size: 16px;">保障措施</div>
          <div style="margin-top: 30px;color: rgb(255, 255, 255);font-size: 14px;">用户协议</div>
          <div style="margin-top: 30px;color: rgb(255, 255, 255);font-size: 14px;">隐私协议</div>
        </div>
        <div class="footer14">
          <div class="item-title" style="color: rgb(255, 255, 255);margin-top: 50px;font-size: 16px;">关注我们</div>
          <div style="margin-top: 30px;"><img src="@/assets/qrcode.jpg" alt="" style="height:128px;width:128px"></div>
        </div>
        <div class="footer15">
          <div class="item-title" style="color: rgb(255, 255, 255);margin-top: 50px;font-size: 16px;">全国服务热线</div>
          <div style="color: rgb(255, 255, 255);font-size: 28px; font-weight: 600;">400-114-2025</div>
        </div>W
      </div>
      <div class="footer2">
        <div style="margin-top: 30px;color: rgb(255, 255, 255);font-size: 14px;">技术支持：佛山市广工大创新协同研究院</div>
        <div style="margin-top: 30px;color: rgb(255, 255, 255);font-size: 14px;">Copyright @ 2022
          佛山市南海区广工大数控装备协同创新研究院AI云平台 All rights reserved.</div>
        <div style="margin-top: 30px;color: rgb(255, 255, 255);font-size: 14px;">粤ICP备14013016号-3</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, provide } from "vue";
import { ElMessage, ElMessageBox } from 'element-plus'
import Header from '@/components/Header.vue'
export default defineComponent({
  name: "HomeView",
  components: {
    Header
  },
  setup() {
    const pageinfo: string = 'HomeView';
    provide('pageinfo', pageinfo);
    return {
      pageinfo
    }
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
.aimodel {
  display: flex;
  justify-content: space-evenly;
}
.aimodel1 {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
}
.block-title {
  margin-top: 50px;
  margin-bottom: 50px;
  width: 100%;
  text-align: center;
  font-size: 34px;
  color: #232324;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;

}
.item-title {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 16px;
}
.item-content {
  font-size: 16px;
  color: #616365;
  width: 354px;
  float: left;
  line-height: 28px;
}
.item-label {
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.use-button {
  width: 100%;
  text-align: center;
  margin-top: 16px;
}
.gn {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 20px;
}
.gn1 {
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-bottom: 15px;
  box-shadow: 10px 10px 5px #0a8cef;
  border: solid 2px rgb(9, 100, 236);
  border-radius: 10px;
  padding: 20px;

}
.gn1:hover {
  box-shadow: 20px 20px 10px #0a8cef;
  transition: 1s;
}
.footer {
  background-image: url(@/assets/footer.png);
  background-size: cover;
  height: 352px;
  display: flex;
  flex-direction: column;
}
.footer1 {
  display: flex;
  justify-content: space-evenly;
}
.footer2 {
  display: flex;
  justify-content: space-evenly;
}
</style>