<template>
    <van-button :color="global.gradientColor" :style="{width:width}" size="small" @click="handle">{{label}}</van-button>
</template>

<script>
    export default {
        name: "vconfirmbtn",
        props:['label','width'],
        methods:{
            handle(){
                this.$emit('onClick')
            }
        }
    }
</script>

<style scoped>

</style>