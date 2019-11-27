//普通模式
var performanceS = function (salary) {
    return salary * 4;
};
var performanceA = function (salary) {
    return salary * 3;
};
var performanceB = function (salary) {
    return salary * 2;
};
var calculateBonus = function (performanceLevel, salary) {
    if (performanceLevel === 'S') {
        return performanceS(salary);
    }
    if (performanceLevel === 'A') {
        return performanceA(salary);
    }
    if (performanceLevel === 'B') {
        return performanceB(salary);
    }
};
var res = calculateBonus('A', 10000); // 输出：30000
console.log(res, 'res')
//策略模式
var strategies = {
    "S": function (salary) {
        return salary * 4;
    },
    "A": function (salary) {
        return salary * 3;
    },
    "B": function (salary) {
        return salary * 2;

    }
};
console.log(strategies['S'](1000))