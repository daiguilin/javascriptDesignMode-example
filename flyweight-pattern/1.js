const Model = function (gender) {
    this.gender = gender
}

Model.prototype.takePhoto = function () {
    console.log(`${this.gender}穿着${this.underwear}`)
}

const maleModel = new Model('male')

const femaleModel = new Model('female')

for (let i = 0; i < 50; i++) {
    maleModel.underwear = `第${i}款衣服`;
    maleModel.takePhoto()
}
for (let i = 1; i < 50; i++) {
    femaleModel.underwear = `第${i}款衣服`
    femaleModel.takePhoto()
}

console.log(maleModel, 'maleModel')