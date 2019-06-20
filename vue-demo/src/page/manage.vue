<template>
  <div class="fillcontain">
    <el-container style="height: 100%; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-active="defaultActive" router>
          <el-menu-item index="manage"><i class="el-icon-menu"></i>首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-document"></i>数据管理</template>
            <el-menu-item index="userList">用户列表</el-menu-item>
            <el-menu-item index="shopList">角色列表</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-document"></i>图表</template>
            <el-menu-item index="userList">用户分布</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
       <!-- <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>
-->
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
        <el-main>
          <el-table :data="tableData">
            <el-table-column prop="date" label="日期" width="140">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>
export default {
  computed: {
    defaultActive: function () {
      return this.$route.path.replace('/', '')
    }
  }
}
</script>
<style scoped lang="less">
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
