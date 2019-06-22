<template>
  <div class="fillcontain">
    <el-row style="height: 100%; ">
      <el-col :span="4" style="height: 100%; background-color:rgb(84, 92, 100) ">
        <el-menu
          :default-active="defaultActive"
          background-color="#545C64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="manage">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              导航一
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="20" style="height: 100%;">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-col>
    </el-row>

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
