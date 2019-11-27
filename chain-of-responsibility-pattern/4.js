
const order500 = (orderType, pay, stock) => {
    if (orderType === 1 && pay === true) {
        console.log('500 元定金预购, 得到 100 元优惠券')
    } else {
        //order200(orderType, pay, stock)
        return 'nextSuccess'
    }
}

const order200 = (orderType, pay, stock) => {
    if (orderType === 2 && pay === true) {
        console.log('200 元定金预购, 得到 50 元优惠券')
    } else {
        //orderCommon(orderType, pay, stock)
        return 'nextSuccess'
    }
}

const orderCommon = (orderType, pay, stock) => {
    if (orderType === 3 && stock > 0) {
        console.log('普通购买, 无优惠券')
    } else {
        console.log('库存不够, 无法购买')
    }
}

Function.prototype.after = function (fn) {
    const self = this;
    return function () {
        const result = self.apply(self, arguments)
        if (result === 'nextSuccess') {
            return fn.apply(self, arguments)
        }

    }
}


const order = order500.after(order200).after(orderCommon)
order(2, true, 500)