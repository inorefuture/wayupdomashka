let str1 = 'Мухосранск'
let str2 = 'Земля'

console.log(str1);
console.log(str2);

let num = 100

console.log(num);

if(10 > 9) {
    console.log('Да');
} else {
    console.log('Нет');
}

const numb1 = 40
const numb2 = 70

let result = numb1 * numb2
console.log(result);

const time = 2
const speedOfFirst = 95
const speedOfSecond = 114

let result1 = time * speedOfFirst
let result2 = time * speedOfSecond
result = result1 + result2
console.log(result);


randomNumber = Math.floor(Math.random() * 100)

if(randomNumber < 20) {
    console.log('randomNumber меньше 20')
} else if (randomNumber > 50) {
    console.log('randomNumber больше 50')
} else {
    console.log('randomNumber больше 20, и меньше 50')
}


randomNumber = Math.floor(Math.random() * 100)

switch(randomNumber) {
    case '< 20' :
    console.log('randomNumber меньше 20')
    break;
    case '> 50' :
    console.log('randomNumber больше 50')
    break;
    default :
    console.log('randomNumber больше 20, и меньше 50')
}
