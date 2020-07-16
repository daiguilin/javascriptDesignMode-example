/*
 * @Author: daiGuilin
 * @Date: 2020-07-16 11:08:22
 * @LastEditTime: 2020-07-16 11:08:58
 * @LastEditors: daiGuilin
 */
// 接收者类
class Receiver {
    execute() {
        console.log('接收者执行请求')
    }
}

// 命令者
class Command {
    constructor(receiver) {
        this.receiver = receiver
    }
    execute() {
        console.log('命令');
        this.receiver.execute()
    }
}
// 触发者
class Invoker {
    constructor(command) {
        this.command = command
    }
    invoke() {
        console.log('开始')
        this.command.execute()
    }
}

// 仓库
const warehouse = new Receiver();
// 订单    
const order = new Command(warehouse);
// 客户
const client = new Invoker(order);
client.invoke()


// 优点
// 对命令进行封装，使命令易于扩展和修改
// 命令发出者和接受者解耦，使发出者不需要知道命令的具体执行过程即可执行
// 缺点
// 使用命令模式可能会导致某些系统有过多的具体命令类。