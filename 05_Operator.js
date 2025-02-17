// Mathematical Opeator
let x = 5;
let y = 9;
console.log(y+x)  // Addition Operator
console.log(y-x)  // Subtraction Operator
console.log(y*x)  // Multiplication Operator
console.log(y/x)  // Division Operator
console.log(y%x)  // Remainder Operator
console.log(y**x) // Power 

let a = 11;
a += 10;
console.log(a)
a -= 10;
console.log(a)
a /= 5;
console.log(a)
a %= 5;
console.log(a)
a *= 5;
console.log(a)
a **= 5;
console.log(a)
a++
console.log(a)
a--
console.log(a)
console.log(a++)  // likhu then barhao
console.log(a) 
console.log(--a) // ghatao then likhu


// Comperision operator
let first = 1
let second = 1
let third = '1'
let fourth = 0
let fifth = 2
console.log(first == second) // compare only value
console.log(first <= second) // less then equals to
console.log(first >= second) // greter then equals to
console.log(first < second)  // less then  
console.log(first > second)  // greter then
console.log(first < fifth)   // less then 
console.log(first > fourth)  // greter then
console.log(first == third)  //
console.log(first === third) // triple '=' represent value + datatype
console.log(first != fourth) // Not eqauls to

// Logical Operator
let one = true
let two = false
console.log(one && one)
console.log(one && two)
console.log(one || two)
console.log(!one)  // assigning value ko invert kerdega
console.log(!two)  // assigning value ko invert kerdega


// Ternary Operator
let age = 18;
let isAdult = age >= 18 ? "Yess" : "No";
// or
isAdult = (age >= 18 )? "Yess" : "No";
console.log(isAdult);


// Bitwise Operator
// 0 or 1

let m = 5;
let n = 3;
console.log(m&n)  // 0101 & 0011 = 0001 so answer is 1
console.log(m|n)  // 0101 | 0011 = 0111 so answer is 7
console.log(m^n)  // 0101 ^ 0011 = 0110 so answer is 6

// Left Shift and Right Shift
console.log(5 << 1) // 0101 << 1 = 1010 = 0*2^0 + 1*2^1 + 0*2^2 + 1*2^3   Double kerna ho tu left shift  
console.log(5 >> 1) // Half kerna ho tu Right shift  