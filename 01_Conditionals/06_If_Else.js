let age = 18;
if(age > 18){  // inside if an condition after evaluate is boolean expression
    console.log("I am an adult")
}
else if(age < 18){
    console.log("I am not adult")
}
else{
    console.log("I am only 18")
}
age = 21
let ticket = true
if (age > 18){   // nested condition
    if(ticket){
        console.log("Go into the party")
    }
    else{
        console.log("Purchase the ticket first")
    }
}
else{
    console.log("Sorry come again after 18")
}