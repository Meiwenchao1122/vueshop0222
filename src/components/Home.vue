<template>
    <div class="home">
        HOME
        <el-button type="info" @click="out">退出</el-button>
    </div>
</template>
<script>
export default {
   methods:{
       out(){
           window.sessionStorage.clear();
           this.$router.push('/login')
       }
   } 
}
</script>
<style lang="less" scode></style>