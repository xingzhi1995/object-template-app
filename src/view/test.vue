<template>
    <div class="ceshijieko">
        <button @click="button">火箭</button>
        <button @click="buttontwo">炸弹</button>
        <img  :style="{display:None}" :src="'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'" alt="" />
        <img  :style="{display:Nonetwo}" :src="'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'" alt="" />
    </div>
</template>

<script>

    export default {
        name: 'ceshijieko',
        data(){
            return{
                None:'none',
                Nonetwo:'none',
                lyf:1,
                lyftwo:1,
                timeName:null
            }
        },
        methods:{
            button(){
                this.None = 'block'
                //清除上次时间函数
                clearInterval(this.timeName)
                //执行事件函数
                this.timeName= setInterval(()=>{
                    this.lyf += 1
                    if(this.lyf > 38){
                        this.lyf = 38;
                        this.None = 'none'
                    }
                },10)
                this.lyf = 1;
            },
            buttontwo(){
                this.Nonetwo = 'block'
                //清除上次时间函数
                clearInterval(this.timeName)
                //执行事件函数
                this.timeName= setInterval(()=>{
                    this.lyftwo += 1
                    if(this.lyftwo > 29){
                        this.lyftwo = 29;
                        this.Nonetwo = 'none'
                    }
                },10)
                this.lyftwo = 1;
            }
        }
    }
</script>

<style scoped>

</style>