<template>
 <div class="login_container">
   <div class="login_box">
     <!-- 图片部分 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="">
      </div>
      <!-- from 表单部分 -->

      <el-form :model="loginFrom" ref="loginFromRef" class="login_from" :rules="loginFromRules">
          <el-form-item prop="username">
            <el-input prefix-icon="iconfont icon-user" v-model="loginFrom.username"></el-input>
            </el-form-item>
          <el-form-item prop="password">
            <el-input prefix-icon="iconfont icon-3702mima" v-model="loginFrom.password" type="password"></el-input>
          </el-form-item>
        <!-- 按钮 -->
          <el-form-item class="login_btn">
              <el-button type="primary" @click="login">登录</el-button>
              <el-button type="success" @click="resetFrom">重置</el-button>
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

      loginFrom:{
        username:'admin',
        password:'123456'
      },
      loginFromRules: {
            username: [
              { required: true, message: '请输入姓名', trigger: 'blur' }, { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
            ],
            password: [
              { required: true, message: '请输入密码', trigger: 'blur' }, { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
            ],
        
      }
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

    resetFrom(){
        //  this.$refs.loginFromRef.resetFielsd(); 
        this.$refs.loginFromRef.resetFields()
    },
    login(){
      this.$refs.loginFromRef.validate(async valid =>{
          // console.log('calid :>> ', valid);
          if(!valid) return 
          const {data} =await this.$http.post('login',this.loginFrom)
          console.log('data :>> ', data);
          if(data.meta.status != 200){
            this.$message.error('登录失败')
          }else{
            this.$message.success('登录成功')
            // console.log('data.token :>> ', data.data.token);
            window.sessionStorage.setItem('token',data.data.token)
            this.$router.push('/home')
          }
      })
    }
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
   .login_from{
        width: 100%;
        padding: 10px;
        position: absolute;
        bottom: 0;
        box-sizing: border-box;
      }
      .login_btn{
        display: flex;
        justify-content: flex-end;
      }
}
</style>
