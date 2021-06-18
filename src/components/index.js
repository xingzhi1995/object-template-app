/*
* 自动引入指定路径下所有组件，并注册
* */
// 处理首字母大写 abc => Abc
function changeStr(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
}

function plugins(Vue) {
    const requireComponent = require.context('./', false, /\.vue$/)
    requireComponent.keys().forEach(fileName => {
        const config = requireComponent(fileName)
        const componentName = changeStr(
            fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')   // ./child1.vue => child1
        )
        Vue.component(componentName, config.default || config) // 动态注册该目录下的所有.vue文件
    })
}

export default plugins
