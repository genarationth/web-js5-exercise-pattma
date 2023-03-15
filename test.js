// Exercise #1
// Part 1
let person = ['Sofia','David','Juan'];
// console.log(person);

// Part 2
person.push('Sara','Augustin');
console.log(person);
console.log(person[0]);

// Part 3
person.splice(2,0,'Renata');
console.log(person);
person.push('Elena');
console.log(person);

// Exercise #2
let height = 5;
let temp = '';
for (let i = 1; i <= height; i++) {
    for (let j = 0; j < i; j++) {
        temp += '*' + ' ';
    }
    temp += '\n';
}
console.log(temp);

// Exercise #3
// ===== 1 =====
let xValue = 10;
const x = 0;
while (x < xValue) {
    if (xValue >= 0) {
        console.log(xValue);
        xValue -= 0.5;
    }
}

// ===== 2 =====
let num = 1;
while (num < 100) {
	console.log(num);
    num += 2;
} 

// ===== 3 =====
let loopNum = (num) => {
    let i = 1;
    while (i <= num) {
        let x = i;
        console.log(`[${x}]`);
        i++;
    }
}
loopNum(6);

// ===== 4 =====
let n = 19;
let sum = 0;
let i = 1;
while (i <= n) {
    sum += i;
    i++;
}
console.log(sum);