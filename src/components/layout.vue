<template>
    <div>
        <div class="navbar">
            <img class="logo" src="../assets/img/logo.png" alt="">
            <div class="header-content">
                <img src="../assets/img/bell.png" width="25" alt="">
                <span>happy123</span>
            </div>
        </div>
        <sider-bar class="sidebar-container"></sider-bar>
        <div class="main-container">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import SiderBar from '@/components/siderBar'

export default {
    components: { SiderBar }
}
</script>
<style lang="scss">
// @import '../utils/app.scss';
// .sidebar-container{
//     position: fixed;
//     width: 160px;
//     top: 60px;
//     left: 0;
//     bottom: 0;
//     background-color: $sidebg;
//     overflow-x: hidden;
// }
</style>
<style lang="scss" scoped>
@import '../utils/app.scss';
.navbar{
    position: fixed;
    height: 60px;
    top: 0;
    left: 0;
    width: 100%;
    background-color: $mainColor;
    .logo{
        cursor: pointer;
    }
    .header-content{
        height: 60px;
        line-height: 60px;
        float: right;
        color: #fff;
        padding: 0 30px;
        cursor: pointer;
        img{
            vertical-align: middle;
        }
    }
}
.sidebar-container{
    position: fixed;
    width: 160px;
    top: 60px;
    left: 0;
    bottom: 0;
    background-color: $sidebg;
    overflow: hidden;
    .menu-wrapper{
        overflow: hidden;
    }
}
.main-container{
    position: fixed;
    top: 60px;
    right: 0;
    bottom: 0;
    left: 160px;
    box-sizing: border-box;
    padding: 0 16px 16px 16px;
}
</style>
