/*
 * @Author: daiGuilin
 * @Date: 2020-07-02 16:12:04
 * @LastEditTime: 2020-07-02 17:19:34
 * @LastEditors: daiGuilin
 */
//发布 & 订阅  --一对多

// 主题 保存状态，状态变化之后触发所有观察者对象
class Subject {
    constructor() {
        this.state = 0
        this.observers = []
    }
    getState() {
        return this.state
    }
    setState(state) {
        this.state = state;
        this.notifyAllObservers();
    }
    notifyAllObservers() {
        this.observers.forEach(observer => {
            observer.update()
        })
    }
    attach(observer) {
        this.observers.push(observer)
    }
}

// 观察者/订阅者
class Observer {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
        this.subject.attach(this)
    }
    update() {
        console.log(`${this.name} update, state: ${this.subject.getState()}`)
    }
}

// 测试
let s = new Subject()
let o1 = new Observer('o1', s)
let o2 = new Observer('02', s)