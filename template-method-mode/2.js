const Drinks = function () { };

Drinks.prototype.firstStep = function () {
    console.log('烧开水')
}

Drinks.prototype.secondStep = function () {

}

Drinks.prototype.thirdStep = function () {
    console.log('倒入杯子')
}

Drinks.prototype.fourthStep = function () {

}
Drinks.prototype.ifNeedFlavour = function () { // 加上钩子
    return true
}
Drinks.prototype.init = function () { // 模板方法模式核心: 在父类上定义好执行算法
    this.firstStep()
    this.secondStep()
    this.thirdStep()
    if (this.ifNeedFlavour()) {
        this.fourthStep()
    }

}
const Tea = function () { }
Tea.prototype = new Drinks;

Tea.prototype.secondStep = function () {
    console.log('浸泡茶叶')
}

Tea.prototype.fourthStep = function () {
    console.log('加柠檬')
}
const Coffee = function () { };
Coffee.prototype = new Drinks;

Coffee.prototype.secondStep = function () {
    console.log('冲泡咖啡')
}

Coffee.prototype.fourthStep = function () {
    console.log('加糖')
}

Coffee.prototype.ifNeedFlavour = function () { // 加上钩子
    return window.confirm('是否需要佐料吗？') // 弹框选择是否佐料
}

const tea = new Tea()
tea.init()

const coffee = new Coffee()
console.log(coffee, 'Coffee')
coffee.init()
