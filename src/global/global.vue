<script>
    import router from '../router'
    import json from '../mock/tsconfig.json'

    const jsonp = json
    const tokenKey = 'X-Access-Token'
    const color = '#27933E'
    const gradientColor = 'linear-gradient(to right, #00befc, #00ffd2)'
    const apiPrefix = ''
    const errorText = '服务器发生异常，请联系管理员' //错误页面提示文案
    //函数
    const toNext = (path,data) =>{
        router.push({path:path,query:data})
    }
    const cancel = (data) =>{
        router.go(-1)
    }
    const message = (type,msg) =>{
        Notify({ type: type, message: msg });
    }
    //测试
    const imgUrl = 'http://assist.info.ledoujia.com:10001/ret-system/sys/common/static';

    //正式
    // const imgUrl = 'http://assist.ledoujia.com:10001/ret-system/sys/common/static';

    export default {
        jsonp,tokenKey,color,toNext,cancel,apiPrefix,errorText,message,imgUrl,gradientColor
    }
</script>
