<template>
    <div class="Sift">
        <div>种植种类</div>
        <el-tabs v-model="activeName"  @tab-click="handleClick">
            <el-tab-pane label="所有" name="all">
                <Type></Type>
            </el-tab-pane>
            <el-tab-pane label="水果" name="fruit" >  水果  </el-tab-pane>
            <el-tab-pane label="绿植" name="plant">  绿植  </el-tab-pane>
            <el-tab-pane label="蔬菜" name="thvegetables">  蔬菜  </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import Type from "./Type.vue"
export default {
    name: 'Sift',
    components:{
        Type,
    },
    data() {
        return {
            activeName:'all',
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>
    .el-tabs>.el-tabs__header{
        margin: 0px 0px 0px 0px;
    }
</style>