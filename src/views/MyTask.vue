<template>
    <el-card shadow="hover" style="width:auto">
        <el-table :data="tableData" max-height="250">
            <el-table-column fixed prop="version" label="版本" width="150" />
            <el-table-column prop="state" label="训练状态" width="120" />
            <el-table-column prop="time" label="训练时长" width="120" />
            <el-table-column prop="effect" label="模型效果" width="600" />
            <el-table-column fixed="right" label="操作" width="120">
                <template #default="scope">
                    <el-button link type="primary" size="small" @click.prevent="deleteRow(scope.$index)">
                        删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-card>
</template>
<script lang="ts">
import { ref } from 'vue';
export default {
    name: "MyTask",
    setup() {
        let tableData = ref([
            {
                version: "V1",
                state: "训练完成",
                time: "57分钟",
                effect: "精准率：78.81%"
            },
            {
                version: "V2",
                state: "训练完成",
                time: "69分钟",
                effect: "精准率：78.07%"
            }
        ]);
        let deleteRow = (index: number) => {
            tableData.value.splice(index, 1)
        };
        return {
            tableData,
            deleteRow,
        };
    },
}
</script>