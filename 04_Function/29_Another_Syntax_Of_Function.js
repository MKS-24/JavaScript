const multiply = function(a,b){
    return a*b;
} 
// multiply = function(a,b){
//     return a+b
// }   // give error just because of changing the value of const

let new_multiply = multiply;

let minus = function(a,b,c){
    console.log("dekhlu me print hogaya hu")
    return a-b-c;
}

// minus = 5

console.log(minus(5,6,0)) // give error QK mene value change kerdi thi minus ki
// console.log(minus(5,6,6)) // give error QK mene value change kerdi thi minus ki
// console.log(minus)



// Default Parameter
function sum(a = 5,b = 6){
    return a+b
}

console.log("Sum of 2 + 5 is",sum(1,1))


//  Rest Parameter

function sumall(a,...num){
    console.log(a)
    console.log(num) // array
    console.log(...num) // individual Numbers

    let add = 0
    for(let i = 0 ; i < num.length ; i++)
    {
        add += num[i]
    }
    return add
}

console.log(sumall(1,2,3,4,5));

// function minusall(...num , b){  // rest parameter ke baad koi bhi dusra individual parameter nh aaega
//     console.log(a)
//     console.log(num) // array
//     console.log(...num) // individual Numbers
// }


function func(){
    console.log(arguments);   // ager ye humne google ke console me chalaya tu wo undefined dega ye abhi isliye chal raha hai QK hum node server se kaam kerrahe hai
    console.log(arguments[1]);
    console.log("Without Argument ke bhi chalgaya without any error")
}

func(1,2,"any kuch",4,864,4,7,4,47)

// Arrow Function
const hey = function(name){
    console.log("Hello "+name)
}
hey("Khan")

// normal function me argument ka global variable hota hai lekin arrow function me global argument varible ka koi scn nh hai 

const hey2 = (name) => {   // Arrow Function and isme return nh hota
    console.log("Nice "+name)
    console.log("Coaching jao Beta")
}
hey2("Fatima")

let add = (x,y,z) => x+y+z

console.log(add(1,2,3))
console.log(add(1,2,3,4,5))

const likhu = () => {
    // console.log(arguments)   this will generate error
    console.log("Chai Chahiye Kon si Janab!")
}
likhu(1,2,3)

