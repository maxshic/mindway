<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
export default {
    name: "App"
};
</script>

<style>
#nprogress .bar{
    background-color: #eef40a;
}
#app{
    min-width: 1000px;
    overflow-x: auto;
}
</style>
