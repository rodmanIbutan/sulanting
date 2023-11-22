<template>
    <div class="main"></div>
</template>

<script>
    export default {
        created(){
            var url = this.$route.params.url
            console.log(url);
			this.$router.push(url)
        }
    }
</script>