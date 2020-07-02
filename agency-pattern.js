/*
 * @Author: daiGuilin
 * @Date: 2020-07-02 13:54:09
 * @LastEditTime: 2020-07-02 14:01:23
 * @LastEditors: daiGuilin
 */
let Flower = function () { }
let xiaoming = {
    sendFlower: function (target) {
        let flower = new Flower()
        target.receiveFlower(flower)
    }
}

let B = {
    receiveFlower: function (flower) {
        A.listenGoodMood(function () {
            A.receiveFlower(flower)
        })
    }
}

let A = {
    receiveFlower: function () {
        console.log('收到花' + flower)
    },
    listenGoodMood: function (fn) {
        setTimeout(() => {
            fn()
        }, 1000);
    }
}

xiaoming.sendFlower(B)