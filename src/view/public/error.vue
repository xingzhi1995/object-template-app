<template>
    <div id="error">
        <Vsvgicon :name="'error'" :height="'50vh'" :width="'60vw'"></Vsvgicon>
        <div class="errorCode">{{$route.query.code}}</div>
        <div class="errorText">{{global.errorText}}</div>
        <Vconfirmbtn :label="'重试'" :width="'30vw'" @onClick="global.cancel()"></Vconfirmbtn>
    </div>
</template>

<script>
    export default {
        name: "errror"
    }
</script>

<style scoped>

</style>