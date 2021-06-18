<template>
<!--  <van-icon class-prefix="pad" :name="name" :size="fontsize" :color="color" @click="handleIcon"/>-->
</template>

<script>
  export default {
    name: "VIconfont",
    props:['name','fontsize','color'],
    methods:{
      handleIcon(){
        this.$emit('onClick')
      }
    }
  }
</script>

<style scoped>

</style>
