<template>
    <div class="login-container">
        <div class="login-form">
            <el-button class="login-btn" @click="login">登录</el-button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Login',
    data(){
        return {

        }
    },
    methods: {
        login(){
            this.$router.push('/evaluation/evaluation')
        }
    }
}
</script>
<style lang="scss">
.login-btn{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50% ,-50%);
}
</style>
