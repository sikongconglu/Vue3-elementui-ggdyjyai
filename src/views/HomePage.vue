<template>
    <div class="homepage">
        <div class="header">
            <Header></Header>
        </div>
        <div>
            <el-card shadow="hover">
                <el-container>
                    <el-aside width="18%" style="height: 100%;">
                        <el-scrollbar style="height: 100%">
                            <el-menu router :default-active="$route.path" @open="handleOpen"
                                :default-openeds="['1', '3']">
                                <el-sub-menu index="1">
                                    <template #title>
                                        <el-icon>
                                        </el-icon>模型中心
                                    </template>
                                    <el-menu-item-group>
                                        <el-menu-item index="/homepage/mytask">我的任务</el-menu-item>
                                        <el-menu-item index="1-2">训练模型</el-menu-item>
                                        <el-menu-item index="1-3">校验模型</el-menu-item>
                                        <el-menu-item index="1-4">下载模型</el-menu-item>
                                    </el-menu-item-group>
                                </el-sub-menu>
                                <el-sub-menu index="2">
                                    <template #title>
                                        <el-icon>
                                        </el-icon>数据服务
                                    </template>
                                    <el-menu-item-group>
                                        <el-menu-item index="2-1">数据总览</el-menu-item>
                                    </el-menu-item-group>
                                </el-sub-menu>
                                <el-sub-menu index="3">
                                    <template #title>
                                        <el-icon>
                                        </el-icon>设备管理
                                    </template>
                                    <el-menu-item-group>
                                        <el-menu-item index="3-1">接入列表</el-menu-item>
                                    </el-menu-item-group>
                                </el-sub-menu>
                            </el-menu>
                        </el-scrollbar>
                    </el-aside>
                    <el-main>
                        <router-view>
                        </router-view>
                    </el-main>
                </el-container>
            </el-card>
        </div>
    </div>
</template>
<script lang="ts">
import Header from '@/components/Header.vue'
import router from '@/router';
import { ElMessageBox } from 'element-plus';
import { provide } from "vue";
export default {
    components: {
        Header
    },
    setup() {
        const pageinfo: string = 'HomePage';
        provide('pageinfo', pageinfo);
        let token = localStorage.getItem("token");
        if (token) {//已登录                   
        }
        else {//未登录，返回登录页面
            ElMessageBox.alert("还未登录，请先登录");
            router.push("/login");
        }
    },
}
</script>
<style scoped>
.homepage {
    display: flex;
    flex-direction: column;
}
</style>