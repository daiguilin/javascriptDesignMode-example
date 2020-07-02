/*
 * @Author: daiGuilin
 * @Date: 2020-06-29 10:18:33
 * @LastEditTime: 2020-06-29 10:30:03
 * @LastEditors: daiGuilin
 */

//适配器模式
class Plug {
    getName() {
        return 'iphone充电头';
    }
}
class Target {
    constructor() {
        this.plug = new Plug()
    }
    getName() {
        return this.plug.getName() + ' 适配器Type-c充电头'
    }
}

let p1 = new Target();
console.log(p1.getName())

//------------------------------------------------------------

var googleMap = {
    show: function () {
        console.log('开始google渲染地图');
    }
};
var baiduMap = {
    display: function () {
        console.log('开始baidu渲染地图');
    }
};

var baiduAdapter = {
    show: function () {
        return baiduMap.display()
    }
}

var renderMap = function (map) {
    if (map.show instanceof Function) {
        map.show()
    }
}
renderMap(googleMap)
renderMap(baiduAdapter)