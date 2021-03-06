/*
 * @Author: daiGuilin
 * @Date: 2020-07-14 15:28:17
 * @LastEditTime: 2020-07-14 15:33:09
 * @LastEditors: daiGuilin
 */
let examCarNum = 0         // 驾考车总数
/* 驾考车对象 */
class ExamCar {
    constructor(carType) {
        examCarNum++
        this.carId = examCarNum
        this.carType = carType ? '手动档' : '自动档'
        this.usingState = false    // 是否正在使用
    }

    /* 在本车上考试 */
    examine(candidateId) {
        return new Promise((resolve => {
            this.usingState = true
            console.log(`考生- ${candidateId} 开始在${this.carType}驾考车- ${this.carId} 上考试`)
            setTimeout(() => {
                this.usingState = false
                console.log(`%c考生- ${candidateId} 在${this.carType}驾考车- ${this.carId} 上考试完毕`, 'color:#f40')
                resolve()                       // 0~2秒后考试完毕
            }, Math.random() * 2000)
        }))
    }
}

/* 手动档汽车对象池 */
ManualExamCarPool = {
    _pool: [],                  // 驾考车对象池
    _candidateQueue: [],        // 考生队列

    /* 注册考生 ID 列表 */
    registCandidates(candidateList) {
        candidateList.forEach(candidateId => this.registCandidate(candidateId))
    },

    /* 注册手动档考生 */
    registCandidate(candidateId) {
        const examCar = this.getManualExamCar()    // 找一个未被占用的手动档驾考车
        if (examCar) {
            examCar.examine(candidateId)           // 开始考试，考完了让队列中的下一个考生开始考试
                .then(() => {
                    const nextCandidateId = this._candidateQueue.length && this._candidateQueue.shift()
                    nextCandidateId && this.registCandidate(nextCandidateId)
                })
        } else this._candidateQueue.push(candidateId)
    },

    /* 注册手动档车 */
    initManualExamCar(manualExamCarNum) {
        for (let i = 1; i <= manualExamCarNum; i++) {
            this._pool.push(new ExamCar(true))
        }
    },

    /* 获取状态为未被占用的手动档车 */
    getManualExamCar() {
        return this._pool.find(car => !car.usingState)
    }
}

ManualExamCarPool.initManualExamCar(3)          // 一共有3个驾考车
ManualExamCarPool.registCandidates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])  // 10个考生来考试
// 场景例子

// 文件上传需要创建多个文件实例的时候
// 如果一个应用程序使用了大量的对象，而这些大量的对象造成了很大的存储开销时就应该考虑使用享元模式

// 优点

// 大大减少对象的创建，降低系统的内存，使效率提高。

// 缺点

// 提高了系统的复杂度，需要分离出外部状态和内部状态，而且外部状态具有固有化的性质，
// 不应该随着内部状态的变化而变化，否则会造成系统的混乱

