<template>
    <el-scrollbar wrap-class="scrollbar-wrapper">
        <div class="sider-bar">
            <el-menu
                background-color="#3f3f47"
                text-color="#fff"
                active-text-color="#fff"
                :unique-opened="true"
                :router="true"
                :default-active="$route.path">
                <el-submenu index="1">
                    <template slot="title">
                        <span>测评管理</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="/evaluation/evaluation">测评管理</el-menu-item>
                        <el-menu-item index="/evaluation/sort">分类管理</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">
                        <span>机构管理</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="/agency/agency">入驻机构管理</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="/user/user">
                    <span>用户管理</span>
                </el-menu-item>
                <el-submenu index="4">
                    <template slot="title">
                        <span>营销管理</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="/market/commission">提成管理</el-menu-item>
                        <el-menu-item index="/market/coupon">优惠券管理</el-menu-item>
                        <el-menu-item index="/market/share">分享统计</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="/order/order">
                    <span>订单管理</span>
                </el-menu-item>
                <el-menu-item index="/password/password">
                    <span>修改密码</span>
                </el-menu-item>
            </el-menu>
        </div>
    </el-scrollbar>
</template>
<script>
export default {
    name: 'SiderBar',
    data(){
        return{

        }
    }
}
</script>
<style lang="scss">
@import '../utils/app.scss';
.el-menu>.el-menu-item.is-active{
    background-color: $mainColor!important;
}
.el-menu-item-group__title{
    display: none;
}
.el-submenu.is-opened{
    .el-menu-item-group{
        background-color: #565664;
        .el-menu-item{
            background-color: #565664!important;
        }
    }
}
.el-submenu.is-active.is-opened{
    .el-menu-item-group{
        .el-menu-item.is-active{
            // color: #fff;
            background-color: $mainColor!important;
        }
    }
}

.scrollbar-wrapper {
    overflow-x: hidden!important;
    .el-scrollbar__view {
        height: 100%;
    }
    .el-menu{
        width: 100%;
        height: 100%;
        border: none;
    }
}
.el-scrollbar__bar.is-horizontal{
    display: none;
}
</style>
<style lang="scss" scoped>
@import '../utils/app.scss';
// .sider-bar{
//     position: fixed;
//     width: 160px;
//     top: 60px;
//     left: 0;
//     bottom: 0;
//     background-color: $sidebg;
//     overflow-x: hidden;
// }
.scrollbar-wrapper {
    overflow-x: hidden!important;
    .el-scrollbar__view {
        height: 100%;
    }
    .el-menu{
        width: 100%;
        height: 100%;
        border: none;
    }
}
</style>
