// let age = 10;

// if (age <15){
//     console.log("you are child");
// }
// else if (age >18){
//     console.log("you can drive");
// }
// else if (age == 15){
//     console.log("you are intermediate");
    
// }
// else {
//     console.log("you are unknown");
// } 
    

// let x = 10
// let y = 15
// let result = "invalid"

// if (y!=0){
//     result=x/y    
// }
//     console.log(result);
// if (y > 0 )
// {
//     console.log("Y is positive")
// }
// else if  (y == 0 )
// {                                                       
//     console.log("Y is Neutral")
// }
// else {
//     console.log("Y is Negative")
// }

// let x = 30

// if (x>=80 && x<=100){
//     console.log("Distinction");
// }
// else if (x>=60 && x<=79){
//     console.log("first class");
// }
// else if (x>=50 && x<=59){
//     console.log("second class");
// }
// else if (x>=35 && x<=49){
//     console.log("pass");
// }
// else{
//     console.log("fail");
// }

// let age = 16

// if (age>=18){
//     console.log("u r elegible");
// }
// else{
//     let y = 18 - age
//     console.log("u r not elegible");
//     console.log("please wait for y years to vote");  
// }

// let num = 2

// if (num<0){
//     console.log("the num is negetive");
// }
// else if(num>0){
//     console.log("the num is positive");
// }
// else{
//     console.log("the number is neither positive nor negative");
// }


// Ternary operation
// let num = 12;

// let result = (num > 10) ? "Greater than 10" : "Not greater than 10";

// console.log(result);

// odd or even
// let number = 32;

// if (number % 2 === 0) {
//   console.log("Even");
// } 
// else {
//   console.log("Odd");
// }

// function string(xyz){
//     return typeof xyz === string;
// }
// console.log("");

// let num = 2
// for(i=1; i<=10; i++){
//     console.log(`${num} x ${i} = ${num*i}`); 
//     while (condition) {
        
//     }
// }

// let string = "3456";
// let reverse= "";

// for (i=string.length; i<=1 ; i--){
//     reverse.concat(string.charAt(i));
   
// }

   

//     // console.log("string.reverse");
   
// let arr = [1,2,3]
// console.log(arr[0]);
// let string = "two"
// string.split(",")

// const str = "hello";
// const reversed = str.split("").reverse();
// console.log(reversed);

// let num = "7"
// for(i=1; i<=10; i++){
//     console.log(`${num} x ${i} = ${num*i}`);
// }


// let i=2;
// let j=1;

// for(i=2 ;i<7 ; i++){
//     for(j=1; j<=10 ; j++){
//         if (j%2!=0)
//         {
//         console.log(`${i} X ${j} = ${i*j}`);
//     }
// }
//     console.log("break");
    
// }

// for (i=1; i<=100; i++){
//     if(i%2==0)
//         console.log(`${i}`);
        
// }

// let x = "5,7,8,9,4,3,5,6,1"
// let y= x.split(",")
// let z= y.sort()
// for (i=0; i<y.length; i++){
//         console.log(y[i])
        
// }
// let x=10
// let y=20
// let result

// result=x
// x=y
// y=result
// console.log(`x =  ${x}`);
// console.log(`y = ${y}`);

// let x = "LIKHITH"
// let y = ""
// let reversed = x.split("").reverse().join("")
// console.log(reversed);
 
// for (i=x.length-1; i>=0; i--){
//     y+=(x.charAt(i))
// }    console.log(y);


// names = "Rohan"

// let x=0;
// let y = names.length;

// for(i=0; i<names.length/2 ; i++){
//     let temp = names.charAt(x);
//     names[x]= names.charAt(y);
//     names[y] = temp;
// }
// console.log(names);

// let x = 9
//     y = 8

//     z= x+y
//     console.log(z);
    
//     if (x==y){
//         console.log(true);
//       }
//       else if(x<y){
//         console.log("x is less than y");

//       }
//       else if(x>y){
//                 console.log("x is greater than y");

//       }
//     else{console.log(false);
// }

// let x = "Dilip"
//     y = ""
// for (i=x.length-1; i>=0; i--){
//    if (i==0){
//         y+=x.toUpperCase().charAt(i)
//     }
//     else{
//         y+=x.toUpperCase().charAt(i)+"-"
//     }
// }
// console.log(y);
// x.toLowerCase

// let str = "let me check"
// let result = ""
// for (i=str.length-1; i>=0; i--){
//     result+= str.charAt(i)
// }
//     console.log(result);

// let x= "8008"
// let y= ""
// for (i=x.length-1; i>=0; i--){
//     y+= x.charAt(i)
// }
// console.log(y);

// if(x=y){
//     console.log("This is paliandrome");
// }
// else{
//     console.log("This is not paliandrome");
    
// }

// let x = [6, 8, 9, 5, 9, 2]
// let y = 0
// for(i=0; i<=x.length-1; i++){
//     y= y+x[i]
//     console.log(y);
// }

// var x = [2,5.5,6,6,88,10]
//     y = x.sort((a, b) => a - b)
//     console.log(y);
//     console.log(y[y.length-1]);
//     console.log(y[0]);


    // let x = [1,2,3,4,5]
    // for(i=0; i<=x.length; i++){
    //     console.log(x[i]);
    
    // }

    // let num = 2
    // for(i=0; i<=10; i++){
    //     console.log(`${num} x ${i} = ${num*i}`);
    // }


// for(i=0; i<=10; i++){
//     if (i%3==0){
//     console.log(i); 
//     }
// }
 
// function greet(name){
//   return`${name} hello!`
// }
// console.log(greet("name"));

// let multiply = function (a, b){
//     return a*b;
// }
// console.log(multiply(2, 3));

// let x = "Dilip"
//     y = ""
// let reversed = x.split("").reverse().join("")
// console.log(reversed);

// function reverseString = ''

// let x = "dilip"
//     y = ""
//     for(i=x.length-1; i>=0; i--){
//         y+=(x.charAt(i))
//     }
//             console.log(y);

// function outer() {
//   let X = 0;

//   function inner() {
//     X++;
//     console.log(X);
//   }

//   return inner;
// }
// const counter = outer()
// counter()
// counter()
// counter()
// counter()
// counter()

let num = [1, 2, 3, 4, 5];

let doubled = num.map(num => num * 2);

console.log(doubled);





        


    
    
        
   




 
    


 


 
 






