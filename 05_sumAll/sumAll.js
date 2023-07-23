const sumAll = function (firstNum, secondNum) {
    let sum = 0;
    let start = 0;
    let end = 0;
    if (firstNum < 0 || secondNum < 0) return "ERROR"
    if ((typeof firstNum != "number") || (typeof secondNum != "number")) return "ERROR"
    if (firstNum <= secondNum) {
        start = firstNum;
        end = secondNum;
    }
    else {
        end = firstNum;
        start = secondNum;
    }

    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
