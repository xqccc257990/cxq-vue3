<template>
  <el-container class="main">
    <el-header class="header">
      <!-- <div class="logo">
        <img src="../assets/logo.png"
             alt
             srcset />
      </div> -->
      <div class="user">
        <el-dropdown>
          <span class="el-dropdown-link name">
            <span class="welcome">欢迎！：</span>
            {{account}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>账号设置</el-dropdown-item>
            <el-dropdown-item divided>
              <i class="fa fa-sign-out"></i>退出
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
    <el-container class="container">

      <el-aside class="container-left"
                width="200px">
        <div style="height:800px;color:red;background:blue;width:100px">ccdddd</div>
      </el-aside>
      <el-container class="container-right">

        <el-main class="right-main">

          <keep-alive>
            <router-view class="view" />

          </keep-alive>
        </el-main>
        <el-footer class="footer">Copyright © www.wavewisdom.com, 1.2.2.1 All Rights Reserved.</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    // let _this = this;
    return {
      account: "",
      menuList: []
    };
  }
};
</script>

<style lang="scss">
.main {
  height: 100%;

  .container {
    height: calc(100vh - 60px);
  }

  .header {
    position: relative;
    background-color: #409eff;

    .logo {
      img {
        margin-top: 8px;
      }
    }

    .user {
      position: absolute;
      top: 0;
      right: 20px;
      padding-top: 19px;
      height: 100%;

      .welcome {
        color: #c0c4cc;
      }

      .name {
        color: #ffffff;
        cursor: pointer;
      }
    }
  }

  .container-left {
    border-right: solid 1px #dcdfe6;

    .el-submenu__title {
      i {
        margin-right: 8px;
        margin-left: 8px;
        width: 18px;
        font-size: 18px;
        text-align: center;
      }
    }

    .el-menu-item {
      min-width: auto;
      text-indent: 13px;
    }
  }

  .right-main {
    display: flex;
    flex-direction: column;
  }

  .container-right {
    overflow-x: hidden;
    overflow-y: auto;
    height: calc(100vh - 60px);
  }

  .view {
    height: 100%;
  }

  .footer {
    line-height: 60px;
    text-align: center;
    font-size: 12px;
    color: #c0c4cc;
    border-top: solid 1px #dcdfe6;
  }
}
</style>