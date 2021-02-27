<template>
<el-container class="home_container">
    <el-header>
        <div>
            <img src="../assets/heima.png" alt="">
            <span>电商后台管理系统</span>
        </div>
        <el-button type="info" @click="out">退出</el-button>
    </el-header>
    <el-container>
        <el-aside :width="isCollapse ? '65px':'200px'">
            <!-- 折叠 -->
            <div class="fold" @click="setCollapse">
                <span>|||</span>
            </div>
            <!-- 菜单 -->
            <el-menu background-color="#333744" text-color="#fff" active-text-color="#409eff" unique-opened
            :collapse-transition="false" :collapse="isCollapse" :router="true" :default-active="activePath">
            <!-- 一级菜单 -->
            <el-submenu :index="item.id+''" v-for="item in menuList" :key="item.id">
                <!-- 一级菜单模板区域 -->
                <template slot="title">
                <i :class="iconObj[item.id]"></i>
                <span>{{item.authName}}</span>
                </template>
                    <!-- 二级菜单接口 -->
                    <el-menu-item :index="'/'+er_item.path" v-for="er_item in item.children" :key="er_item.id" @click="setActivePath('/'+er_item.path)">
                        <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>{{er_item.authName}}</span>
                        </template>
                    </el-menu-item>
            </el-submenu>
         
        </el-menu>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</el-container>

</template>
<script>
export default {
    data(){
        return{
            menuList:[],
            iconObj:{
                '125':'iconfont icon-user',
                '103':'iconfont icon-tijikongjian',
                '101':'iconfont icon-shangpin',
                '102':'iconfont icon-danju',
                '145':'iconfont icon-baobiao',
            },
            isCollapse:false,
            activePath:''
            }
        },
    created(){
        this.getMenuList(),
        this.setActivePath()
    },
    methods:{
       out(){
           window.sessionStorage.clear();
           this.$router.push('/login')
       },
        async getMenuList(){
          const {data:res} = await this.$http.get('menus')
          console.log('res.data :>> ', res.data);
          this.menuList = res.data
        },
        setCollapse(){
            this.isCollapse = !this.isCollapse
        },
        setActivePath(activePath){
            this.activePath = activePath
        }
   } 
}
</script>
<style lang="less" scode>
.el-header{
    background-color: #373d41;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    color: #fff;
    > div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        span{
            padding: 15px;
        }
    }
}
.el-main{
    background-color: #EAEDF1;
}
.el-aside{

    background-color: #333744;
    .el-menu{
        border-right: 0px;
    }
}
.home_container{
    height: 100%;
}
.iconfont{
    margin-left: 10px;
}
.fold{
    color: #fff;
    display: flex;
    justify-content: center;
    background-color: #373639;
}
</style>