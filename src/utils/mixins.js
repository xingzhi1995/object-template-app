import {getAjax} from "../api/api";

export const mixins = {
    methods:{
        loadData(){
            getAjax(this.url.list).then(res=>{})
        }
    },
    created(){
        this.loadData()
    }
}