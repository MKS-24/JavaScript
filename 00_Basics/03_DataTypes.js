// Primitive data type (string , Number , Bigint, Boolean , Undefined , null , symbol )
//  Non - Primitive data type ( Array , Object)


// String
let name = "Muhammad Khuzaima Siddiqui";
let name1 ='Muhammad Khuzaima Siddiqui';
console.log(name,name1)

// Numeric 
let age = 19; 
console.log(age)
let negvalue = -999;
console.log(negvalue)
let largevalue = 99999999999999999999999999999999;
let bignum =  99999999999999999999999999999999n; //for big number
console.log(largevalue)
console.log(bignum)

//  Boolean
let answer = true
console.log(answer)
console.log(false)

// undefined
let school;  // define hi nh howa hai
console.log(school)
school = "new"
console.log(school)

// null
let hobby = null
hobby = 'kdhfs'
console.log(hobby)

// symbol    -> use for unique identifier
let id = Symbol("id")
let id2 = Symbol("idnew")
console.log(id===id2)

// Array
let color = ['red' , 'blue' , 'green' , 55]
console.log(color)

// object    -> like dictionary
let person = {
    name : "Muhammad Khuzaima Siddiqui",
    age : 19
}
console.log(person)