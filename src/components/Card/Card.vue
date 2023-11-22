<template>
   
        <el-card :body-style="{height:'100%',padding:'0px'}" class="card">
            <div class="main_card">
                <div class="title">{{title}}</div>
                <div class="content">{{content}}</div>
            </div>
            <div class="time">
                <div class="date">
                    <span class="date_day">{{time_mouth}}-{{time_day}}</span>
                    <span class="date_year">{{time_year}}</span>
                </div>
                
                <el-button  circle>
                    <i class="el-icon-right"></i>
                </el-button>

            </div>
        </el-card>
</template>

<script>

export default {
    name: 'Card',
	
    data() {
        return {
            title:"忽如一夜春风来，千呼万唤使出来",
            content:"这里是一段简单的介绍",
            time_day:"25",
            time_mouth:"01",
            time_year:"2022"

        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>
.el-card{
    border: none;
}
.card{
    height: 80%;
    width: 100%;
    margin-top: 40px;
    margin-bottom: 40px;
    background-color: #FFFFFF;
    box-shadow: none;
    transition-property: height,background-color box-shadow margin-top margin-bottom;
    transition-duration: .3s;
    transition-timing-function:ease-in-out;
    border-style: solid;
    border-width: 0.3px;
    border-color: #E9E9E9;
    
}
.card:hover{
    height: 100%;
    background-color: #13DF81;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    margin-top: 15px;
    margin-bottom: 15px;
}
.card:hover .time{
    background-color: #FFFFFF;
}
.card:hover .title{
    color: #FFFFFF;
    font-size: 30px;
}
.card:hover .content{
    color: #FFFFFF;
    font-size:large ;
}
.card:hover .date_day{
    color:#13DF81 ;
}
.card:hover .date_year{
    color:#13DF81 ;
}
.card:hover .el-button{
    visibility: visible;
}
.main_card{
    height: 67%;
    width: 90%;
    padding-left: 10%;
    padding-top: 10.5%;
}
.title{
	display: block;
    color: rgba(16, 16, 16, 1);
    font-size: 18px;
    font-family: cursive;
    margin-bottom: 10%;
}
.content{
	display: block;
    color: rgba(145, 145, 145, 1);
    font-size: 16px;
    font-family: cursive;
}
.time{
    height: 25%;
    width: 100%;
    background-color: #E9E9E9 ;
    transition-property: background-color;
    transition-duration: .3s;
    transition-timing-function:ease-in-out;
}
.date_day, .date_year{
    display: block;
}
.date_day{
    font-size: 30px;
    font-weight: 600;
}
.date_year{
    font-size: 15px;
    font-weight: 300px;
    margin-top: 15px;
}
.date{
    left: 10%;
    position: relative;
    top: 10%;
}
.el-button{
    position: relative;
    background-color: #13DF81;
    left: 80%;
    top: -35%;
    visibility: hidden;
}
.el-icon-right{
    color: #ffffff;
    font-size: 18px;
}
</style>