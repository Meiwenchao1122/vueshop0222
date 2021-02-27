<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card>
         <el-row :gutter="20">
            <el-col :span="8">
                <el-input placeholder="请输入内容">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </el-col>
            <el-col :span="4">
                <el-button type="primary">添加用户</el-button>
            </el-col>
        </el-row> 
        <!-- 表格部分 -->
            <template>
                <el-table
                stripe
                border
                :data="userlist"
                style="width: 100%">
                <el-table-column type="index" label="#">
                </el-table-column>
                <el-table-column
                    prop="username"
                    label="姓名"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="email"
                    label="邮箱"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="mobile"
                    label="电话">
                </el-table-column>
                <el-table-column
                    prop="role_name"
                    label="角色">
                </el-table-column>
                <el-table-column
                    
                    label="状态">
                    <!-- 作用域 插槽  -->
                    <template scope="props">
                        <el-switch
                        v-model="props.row.mg_state"
                        active-color="#13ce66"
                        inactive-color="#ff4949"
                        @change="userStateChanged(props.row)">
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column
                    label="操作"
                    width="180">
                    <template scope="props">
                        <!-- 修改 -->
                        <el-button size="mini" type="primary" icon="el-icon-edit"></el-button>
                        <!-- 删除 -->
                        <el-button size="mini" type="primary" icon="el-icon-share"></el-button>
                        <!-- 设置 -->
                        <el-tooltip  effect="dark" content="分配角色" placement="top-start" :enterable="false">
                            <el-button size="mini" type="primary" icon="el-icon-delete"></el-button>
                        </el-tooltip>
                    </template>
                </el-table-column>
                </el-table>
            </template>
            <template>
                <div class="block">
                    <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="queryInfo.pagenum"
                    :page-sizes="[1,2,5,10]"
                    :page-size="queryInfo.pagesize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="total">
                    </el-pagination>
                </div>
            </template>
        </el-card>
    </div>
</template>
<script>
export default {
    data(){
        return {
            queryInfo:{
                query:"",
                // 当前页数
                pagenum:1,
                //当前每页显示多少条数据
                pagesize:2
            },
            userlist:[],
            total:0,
          
        }
    },
    created(){
        this.getUserList()
    },
    methods:{
        async  getUserList(){
            const {data:res} =await  this.$http.get('users',{params: this.queryInfo})
        //    console.log('res :>> ', res);
            if(res.meta.status !== 200) return this.$message.error(res.meta.msg) 
            this.userlist = res.data.users
            this.total = res.data.total

        },
        handleSizeChange(newSize){
           console.log('每页显示多少条:>> ', newSize); 
           this.queryInfo.pagesize = newSize
           this.getUserList()
        },
        handleCurrentChange(newPage){
            console.log('页码值发生改变:>> ', newPage);
            this.queryInfo.pagenum= newPage 
            this.getUserList()
        },
        // 监听状态开关
     async   userStateChanged(userInfo){
            //    console.log('useriInfo :>> ', userInfo); 
            const {data:res} = await  this.$http.put(`users/${userInfo.id}/state/${userInfo.mg_state}`)
            if(res.meta.status !== 200){
                this.userlist.mg_state = res.data.mg_state
                return thsi.$message.error(res.meta.msg)
            }
        //  添加成功
            this.$message.success("修改状态成功")
        }
    }
}
</script>
<style lang="less" scoped>
</style>