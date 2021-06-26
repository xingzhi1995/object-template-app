import container from "../view/container";
import errror from "../view/public/errror";
import init from '../view/public/init'
import test from "../view/test";

export const list = [
    {
        path: '/',
        name: 'container',
        component: container
    },
    {
        path: '/errror',
        name: 'errror',
        component: errror
    },
    {
        path: '/init',
        name: 'init',
        component: init
    },
    {
        path: '/test',
        name: 'test',
        component: test
    }
]