const Player = function (name) {
    this.name = name;
    playerMiddle.add(name)
}

Player.prototype.win = function () {
    playerMiddle.win(this.name)
}

Player.prototype.lose = function () {
    playerMiddle.lose(this.name)
}

const playerMiddle = (function () {
    const players = [], winArr = [], loseArr = [];
    return {
        add: function (name) {
            players.push(name)
        },
        win: function (name) {
            winArr.push(name)
            if (winArr.length + loseArr.length === players.length) {
                this.show()
            }
        },
        lose: function (name) {
            loseArr.push(name)
            if (winArr.length + loseArr.length === players.length) {
                this.show()
            }
        },
        show: function () {
            for (let winer of winArr) {
                console.log(winer + '挑战成功')
            }
            for (let lose of loseArr) {
                console.log(lose + '挑战失败')
            }
        }
    }
})()

const aa = new Player('小明')
const bb = new Player('小红')
const cc = new Player('小强')

aa.win()
bb.lose()
cc.win()