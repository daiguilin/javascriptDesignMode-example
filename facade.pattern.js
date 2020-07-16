/*
 * @Author: daiGuilin
 * @Date: 2020-07-02 15:49:51
 * @LastEditTime: 2020-07-02 15:56:38
 * @LastEditors: daiGuilin
 */
//外观模式
// 1.兼容浏览器事件绑定
let addMyEvent = function (el, ev, fn) {
    if (el.addEventListener) {
        el.addEventListener(ev, fn, false)
    } else if (el.attachEvent) {
        el.attachEvent('on' + ev, fn)
    } else {
        el['on' + ev] = fn
    }
};

//2.封装接口
let myEvent = {
    // ...
    stop: e => {
        e.stopPropagation();
        e.preventDefault();
    }
};