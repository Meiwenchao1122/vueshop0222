<template>
 <div class="login_container">
   <div class="login_box">
     <!-- 图片部分 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="">
      </div>
      <!-- from 表单部分 -->
      <el-form label-width="80px">
  <el-form-item label="活动名称">
    <el-input ></el-input>
  </el-form-item>
      </el-form>
   </div>
 </div>
</template>

<script>
export default {
 props: {

 },
 data() {
 return {

 };
 },
 computed: {

 },
 created() {

 },
 mounted() {

 },
 watch: {

 },
 methods: {

 },
 components: {

 },
};
</script>

<style lang='less' scoped>
.login_container{
  background-color: #2b4b6b;
  height: 100%;
  .login_box{
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 4px;
    position: absolute;
    left: 50%;
    right: 50%;
    transform: translate(-50%,50%);
    .avatar_box{
      width: 130px;
      height: 130px;
      border: 1px solid #eee;
      border-radius: 50%;
      box-shadow: 0px 0px 10px #ddd;
      background-color: #fff;
      position: absolute;
      left: 50%;
      transform: translate(-50%,-50%);
      padding: 10px;
      img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
      }
    }
  }
}
</style>
