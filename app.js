// 1
function add(num1, num2) {
    return num1 + num2
}
console.log(add(2, 2))
// 2
function sub(num1, num2) {
    return num1 - num2

}
console.log(sub(1, 1))
// 3
function mult(num1, num2) {
    return num1 * num2
}
// 4
function divide(num1, num2) {
    return num1 / num2
}
// 5
function odd(number) {
    return number % 2 !== 0
}
// 6


function even(number) {
    return number % 2 === 0
}
// 7
function getSquareRoot(number) {
    return Math.sqrt(number)
}
// 8
function findLargest(a, b) {
    return a > b ? a : b
}
// 9 
function findSmallest(a, b) {
    return a < b ? a : b
}

// 10

function coutchar(srt){
    return str.length
}

// 11

function aor(length, width) {
    return length * width

}

// 12

function canvote(age) {
    if (age >= 18) {
        return true
    } else {
        return false
    }
}
// 13
function checkPass(number) {

    if (score >= 50) {
        return "Pass";
    } else {
        return "Fail";
    }

}

// 14
function checkTemperature(temp) {
    if (temp > 30) return "Hot";
    else if (temp < 15) return "Cold";
    else return "Normal";
}

// 15
function isValidPassword(password) {
    return password.length >= 8;
}
// 16

function calculatePercentage(value, total) {
    return (value / total) * 100;
}

// 17
function calculateDiscount(price, discount) {
    return price - (price * discount / 100);
}

// 18
function calculateBMI(weight, height) {
    return weight / (height * height);
}
//19
function calculateSpeed(distance, time) {
    return distance / time;
}
//20
function calculateDistance(speed, time) {
    return speed * time;
}


console.log(calculateDistance())
console.log(add())
console.log(sub())
console.log(mult())
console.log(divide())
console.log(odd())
console.log(even())
console.log(getSquareRoot())
console.log(findLargest())
console.log(findSmallest())
console.log(aor())
console.log(coutchar())
console.log(canvote)
console.log(checkPass())
console.log(checkTemperature())
console.log(isValidPassword())
console.log(calculatePercentage())
console.log(calculateBMI())
console.log(calculateSpeed())
console.log(calculateDistance())
