<template>
    <div id="init">
        <div class="loading">
            <Vloading></Vloading>
            <div class="loadingText">正在加载...</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "init"
    }
</script>

<style scoped lang="stylus">
#init{
    width: 100%;
    height: 100vh;
    text-align center
    background-image url("../../assets/image/init.jpg")
    background-size 100% 100%
    .loading{
        position absolute
        bottom 20vh
        left: 0;
        right:0;
        margin: 0 auto;
        .loadingText{
            width 100%
            font-size 0.8rem
            color #9D9D9D
            margin-top 1rem
        }
    }
}
</style>