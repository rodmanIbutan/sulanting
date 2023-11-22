<template>
    <div class="Type">
        <div v-if="!display" class="fenLei">
            <span class="title">{{title}}></span>
            <el-button  @click="isShow" class="show">收起</el-button>
        </div>
        <div v-if="display" class="fenLei">
            <span class="title">{{title}} ...</span>
            <el-tag
                :key="tag"
                v-for="tag in arr"
                closable
                :disable-transitions="false"
                @close="handleClose(tag)">
                {{tag}}
            </el-tag>
            <el-button @click="isShow" class="show">展开</el-button>
        </div>
        
        <ul v-if="!display">
            <li v-for="(type,index) in types" :key="index">
                <span class="type"> {{type.type}}：</span>
                <a href="javascript:;" v-for="(list,index2) in type.lists" v-bind:class="{active:type.flag[index2]===1}" :key="index2"
                    @click="listBundle(index,index2)">{{list}}
                </a>
                <hr>
            </li>
        </ul>

    </div>
</template>

<script>

export default {
    name: 'Type',

    data() {
        return {
            display:true,
            title:"所有分类",
            types:[
                {
                    type:"季节",
                    lists:["春天","夏天","冬天","秋天"],
                    flag:[]
                },
                {
                    type:"月份",
                    lists:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
                    flag:[]
                }                
            ],
            arr:[]
            
        };
    },
    computed:{
        
    },
    beforeMount(){
        // 为每个分类子项添加一个标记，标记分类子项是否被选中
        for(let i = 0 ; i < this.types.length ; i++){
            let len = this.types[i].lists.length
            for(let j = 0 ; j < len ; j++){
                this.types[i].flag[j] = -1
            }
        }
    },
    mounted() {
    },

    methods: {
        listBundle(index, i) {
            //找到操作的这一行，把这一行的数据中的index，设置为点击的标签的下标 
            this.types[index].flag[i] *= -1
            // 添加标记
            if(this.types[index].flag[i]==1){
                this.arr.push(this.types[index].lists[i])
            }
            // 删除标记
            if(this.types[index].flag[i]==-1){
                this.arr.splice(this.arr.indexOf(this.types[index].lists[i]),1)
                console.log("1")
            }
            // 重新渲染
            this.$forceUpdate()
        },
        // 是否展示分类
        isShow(){
            this.display = !this.display
        },
        handleClose(tag) {
            for(let i = 0 ; i < this.types.length ; i++){
                let len = this.types[i].lists.length
                for(let j = 0 ; j < len ; j++){
                    if(this.types[i].lists[j] == tag)
                        this.types[i].flag[j] = -1
                }
            }
            this.arr.splice(this.arr.indexOf(tag), 1);
        },
    },
};
</script>

<style scoped>
    .Type{
        margin-bottom: 10px;
        display: flow-root;
    }
    .type{
        color: gainsboro;
        width: 8%;
        margin-left: 1%;
    }
    table{
        width: 100%;
    }
    a {
        display: inline-block;
        padding: 5px 10px 0 10px;
        border-radius: 5px;
        text-decoration: none;
        color: black;
    }
    .el-tag + .el-tag {
        margin-left: 10px;
    }

    .active {
        color: rgb(126, 198, 148);
    }
    li {
        list-style: none;
        float: left;
        margin: 10px 20px 0 0;
        width: 100%;
        height: 70;
    }
    hr{
        border: none;
        border-top: 1px dotted #ccc;
    }
    ul{
        margin-top: 10px;
        border-top: 1px solid #ccc;
    }
    .show{
        justify-content: flex-end;
        margin-left: auto;
    }
    .fenLei{
        display: flex;
        align-items: center;
        width: 100%;
    }
    .title{
        justify-content: flex-start;
    }
</style>