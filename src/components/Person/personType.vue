<template>
    <div>
        <h3>{{title}}</h3>
        <ul>
            <li v-for="item in items">
                <div class="title">{{item.type}}</div>
                <ul>
                    <li v-for="i in item.item">
                        <div class="child">
                            <span class="name">{{i.title}}</span>
                            <span class="count">{{i.number}}</span>
                        </div>
                        
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'PersonType',

    data() {
        return {
            title:"分类",
            items:[
                {
                    type:"游戏",
                    item:[
                        {
                            title:"王者",
                            number:10
                        }
                    ]

                },
                {
                    type:"学习",
                    item:[
                        {
                            title:"Serve",
                            number:3
                        },
                        {
                            title:"可视化",
                            number:4
                        },
                        {
                            title:"操作系统",
                            number:5
                        }
                    ]
                },
                {
                    type:"日常",
                    item:[
                        {
                            title:"娱乐",
                            number:1,
                        }
                    ]
                }
            ]
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>
    h3{
        text-align: left;
        margin-left: 5%;
        padding-top: 10px ;
    }
    .title{
        margin-top: 5%;
        text-align: left;
        margin-left: 5%;
        margin-right: 5%;
    }
    .child{
        margin-top: 2.5%;
        text-align: start;
        margin-left: 15%;
        margin-right: 5%;
    }
    .name{
        display: inline-block;
        width: 80%;
        text-align: start;
    }
    .count{
        width: 20%;
    }
</style>