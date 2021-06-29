import container from "../view/container";
import error from "../view/public/error";
import init from '../view/public/init'
import test from "../view/test";

export const list = [
    {
        path: '/',
        name: 'container',
        component: container
    },
    {
        path: '/error',
        name: 'error',
        component: error
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