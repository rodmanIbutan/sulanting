<template>
    <div class="news">
        <h3>{{title}}</h3>
        <span>{{content}}</span>
    </div>
</template>

<script>
export default {
    name: 'PersonNews',

    data() {
        return {
            title:"公告",
            content:"这是一则公告这是一则公告这是一则公告这是一则公告，这是一则公告，这是一则公告这是一则公告，这是一则公告,这是一则公告.这是一则公告"
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
    span{
        display: block;
        text-align: left;
        padding: 10px;
    }

</style>