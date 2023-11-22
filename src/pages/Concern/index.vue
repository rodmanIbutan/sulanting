<template>
     <div class="mainBox">
        <div class="left">
            <div class="personHeader m">
                <PersonHeader :img='img'></PersonHeader>
            </div>
            <div class="memberList">
                <ul class="member">
                    <li>
                        <ConcerMember :img="img"></ConcerMember>                        
                    </li >
                    <li>
                        <ConcerMember :img="img"></ConcerMember>                        
                    </li>
                    <li>
                        <ConcerMember :img="img"></ConcerMember>                        
                    </li>
                    <li>
                        <ConcerMember :img="img"></ConcerMember>                        
                    </li>
                </ul>
            </div>
        </div>
        <div class="right">
            <div class="fabu">
                这是发布框
            </div>
            <div class="dyn"><Dynamic :img="img"></Dynamic></div>
            <div class="dyn"><Dynamic :img="img"></Dynamic></div>
            <div class="dyn"><Dynamic :img="img"></Dynamic></div>
        </div>
        
    </div>
</template>

<script>
import PersonHeader from '../../components/Person/personHeader.vue'
import ConcerMember from '../../components/Person/concerMenber.vue'
import Dynamic from '../../components/Person/dynamic.vue'
export default {

    data() {
        return {
            img:require('../../../public/img/test8.png'),
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
    components:{
        PersonHeader,
        ConcerMember,
        Dynamic
    }
};
</script>

<style scoped>
    .mainBox{
        display: flex;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        line-height: 20px;
        background-color: rgba(255, 255, 255, 1);
        text-align: center;
        margin-top: 100px;
    }
    .m{
        transform: box-shadow 3s;
        border-radius: 10px;
        margin-left: 5%;
        margin-bottom: 20%;
    }
    .left{
        margin-left: 10%;
        width: 20%;
    }
    .right{
        width: 75%;
        margin-left: 2.5%;
        margin-right: 2.5%;
    }
    .personHeader{
        width: 100%;
        height: auto;
        background-color: rgba(255, 255, 255, 1);
        text-align: center;
        margin-top: 5px;
        margin-bottom: 10px ;
    }
    .memberList{
        margin-top: 30px;
        margin-left: 5%;
        margin-bottom: 20%;
    }
    .member{
        border-radius: 5px;
    }
    .member>li{
        margin-bottom: 20px;
    }
    .dyn{
        width: 50%;
        margin-bottom: 20px;
    }
    .fabu{
        height: 100px;
        border-style: solid;
        border-width: 1px;
        border-radius: 5px;
        width: 72%;
        margin-bottom: 20px;
    }
</style>