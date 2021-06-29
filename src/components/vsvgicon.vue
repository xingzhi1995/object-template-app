<template>
  <svg class="ldj" aria-hidden="true" :style="{width:width,height:height,color:color}">
    <use :xlink:href="`#ldj-${name}`"></use>
  </svg>
</template>

<script>
  export default {
    name: "VSvgIcon",
    props:['name','width','height','color'],
  }
</script>

<style scoped>

</style>
