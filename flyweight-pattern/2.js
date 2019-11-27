const Model = function (gender) {
    this.gender = gender
}

Model.prototype.takePhoto = function () {
    console.log(`${this.gender}穿着${this.underwear}`)
}

const modelFactory = (function () {
    const modelGender = {};
    return {
        createModel: function (gender) {
            if (modelGender[gender]) {
                return modelGender[gender]
            }
            return modelGender[gender] = new Model(gender)
        }
    }
})()

const modelManager = (function () {
    let modelObj = {};
    return {
        add: function (gender, i) {
            modelObj[i] = `第${i}款衣服`;
            return modelFactory.createModel(gender)
        },
        copy: function (model, i) {
            model.underwear = modelObj[i]
        },
        get: function () {
            return modelObj
        },
        clear: function () {
            modelObj = null
        }
    }
})()

for (let i = 0; i < 50; i++) {
    const model = modelManager.add('male', i);
    modelManager.copy(model, i);
    // model.takePhoto()
    if (i === 49) {
        console.log(modelManager.get())
        modelManager.clear();
        console.log(modelManager.get())
    }
}

