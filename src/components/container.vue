<template>
    <div id="container">
        <header class="header"><slot name="header"></slot></header>
        <section class="wrap"><slot name="content"></slot></section>
        <footer class="footer"><slot name="footer"></slot></footer>
    </div>
</template>

<script>
    export default {
        name: "container"
    }
</script>

<style scoped>
    header{
        height:40px;
        font-size:20px;
        color:#fff;
        text-align: center;
        background:#000;
        line-height: 40px;
    }
    footer{
        position:absolute;
        left:0;
        right:0;
        bottom:0;
        height:40px;
        color:#fff;
        text-align:center;
        background: #000;
        line-height: 40px;
    }
    .wrap{
        position:absolute;
        left:0;
        right:0;
        top:40px;
        bottom:40px;
        overflow: auto;
    }
</style>