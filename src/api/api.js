import fetch from '../utils/fetch'
import global from "../global/global";

const prefix = global.apiPrefix

//获取登录信息
export function getLoginData(data) {
    return fetch({
        url:'/ret-interface-api/auth/api/v1/exchange',
        method:'get',
        params:data
    })
}

export function postAjax(url,data) {
    return fetch({
        url:prefix+url,
        method:'post',
        data
    })
}

export function getAjax(url,data) {
    return fetch({
        url:prefix+url,
        method:'get',
        params:data
    })
}

export function putAjax(url,data) {
    return fetch({
        url:prefix+url,
        method:'put',
        data
    })
}

export function delAjax(url,data) {
    return fetch({
        url:prefix+url,
        method:'delete',
        params:data
    })
}
