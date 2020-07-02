/*
 * @Author: daiGuilin
 * @Date: 2020-06-29 09:55:59
 * @LastEditTime: 2020-06-29 10:17:28
 * @LastEditors: daiGuilin
 */

//工厂模式
class Product {
    constructor(name) {
        this.name = name
    }
    init() {
        console.log('init')
    }
    fun() {
        console.log('fun')
    }
    showName() {
        console.log(this.name)
    }
}

class Factory {
    create(name) {
        return new Product(name)
    }
}

var p = new Factory();
var p1 = p.create('p1')
p1.init()
p1.showName()
var p2 = p.create('p2')
p2.init()
p2.showName()