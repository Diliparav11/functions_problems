// let x = [10, 20, 30, 40, 50];
// let i = 0;

// do {
//     console.log(x[i]);
//     i++;
// } 
// while (i < x.length);

// let x = [5, 6, 8, 9, 3]
// let i=x.length;
// do{
//     console.log(x[i]);
//     i--
// }
// while (i>=0)

// let x = 10
// let i=0
// do{
//     console.log(`${x} x ${i} = ${x*i}`);
//     i++
// } 
// while(i<=10)


// let x = [6, 82, 5, 9, 3, 4]
//     x.sort((a, b) => a - b);
//     console.log(x);


    
// class Bride{
//     height;
//     weight;
//     colour;


//     constructor(uddA, dappa, colour){

//         this.height = uddA
//         this.weight = dappa+uddA
//         this.colour = colour

//     }

// }

//     option1 = new Bride(5.8, 65, "skin")
//     option2 = new Bride(9, 60, "white")
//     option3 = new Bride(6, 100, "black")
//     option4 = new Bride(6, 100, " skin")
// console.log(option2.weight);


// function add(x, y){
//    return x+y
// }
// function sub(x, y){
//     return x-y
// }
// function multiply(x, y){
//     return x*y
// }
// console.log(add(8, 7));
// console.log(sub(8, 7));
// console.log(multiply(8, 7));

// function calci(x, y, z){
//     if(y=="+"){
//         return x+z
//     }
//     else if (y=="-"){
//         return x-z
//     }
//     else if (y=="*"){
//         return x*z
//     }
//     else if(y=="/"){
//         return x/z
//     }
//     else{
//         return "wrong operator provided"
//     }      
// }
// console.log(calci(5*6 ));

// function calculateArea(l, b){
//     return l*b;
// }
// console.log(calculateArea(20, 30));


// let x = [10, 20, 30]
// let arr =function(j){
//     y = 0
//     for(i=0; i<j.length; i++){
//         y = y + j[i]; // y+=x[i];
//     }
//     return y
// }(x)
//  console.log(arr);

// function multiplyNumbers(a, b){
//     if(b==undefined){
//         return a*1
//     }
//     else{
//         return a*b
//     }
// }
// console.log(multiplyNumbers(2, 5));

// function sum(...arguments){
//     y = 0
//     for(i=0; i<arguments.length; i++){
//         y = y + arguments[i]
//     }
//     return y
// }

// console.log(sum(1,2,3,5,8,7));

// function reverseArray(arr){
//     y = []
//     for(i=arr.length-1; i>=0; i--){
//         y+=(arr[i])
//     }
//     return y
// }
// console.log(reverseArray([5,8,7,6,3,4,2]));



// let arr = "Discover the pinnacle of IT education Sfhrtf in Bangalore with itdefined.org! Elevate your career through our Software Courses in DevOps, Full Stack Web"
// let y = ["a","e","i","o","u"]
// let x = arr.split(" ")
// let z = [];
// let s = []
// for (i=0; i<x.length; i++){
//     for (let j = 0; j<y.length; j++){
//    if(x[i].includes(y[j])){
//     z.push(x[i]);
//     break;
//     }

// }
// }
// console.log(z);

// if (z==x[i]){
//     console.log("it contains vowels");
// }
// else{
//     console.log("it does not contains vowels");
// }

// let arr = "Discover the pinnacle of IT"
// let x = arr.split(" ")
// console.log(x);
// let y = x.splice(2, 1, "a,e,i,o,u")
// console.log(y);
// console.log(x);






let arr = "Discover the pinnacle of IT education Sfhrtf in Bangalore with itdefined.org! Elevate your career through our Software Courses in DevOps, Full Stack Web"
let y = ["a","e","i","o","u"]
let x = arr.split(" ")
let z = [];
let s = []
for (i=0; i<x.length; i++){
    flag = true;

    for (let j = 0; j<y.length; j++){
        if(x[i].toLowerCase().includes(y[j])){
            flag = false;
                break;
        }
    }   
    if(flag == true){
        s.push(x[i]);
    }
    if(flag == false){
        z.push(x[i]);
    }
}

console.log("these words dont have any vowels");

console.log(s);

console.log("===================================================================================================================");

console.log("these words have vowels");
console.log(z);












