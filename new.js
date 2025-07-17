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
// console.log("it contains vowels");


// let arr = "Discover the pinnacle of IT"
// let x = arr.split(" ")
// console.log(x);
// let y = x.splice(2, 1, "a,e,i,o,u")
// console.log(y);
// console.log(x);






// let arr = "Discover the pinnacle of IT education Sfhrtf in Bangalore with Gym itdefined.org! Elevate your career through our Software Courses in DevOps, Full Stack Web"
// let y = ["a","e","i","o","u"]
// let x = arr.split(" ")
// let z = []
// let s = []
// for (i=0; i<x.length; i++){
//     flag = true;

//     for (let j = 0; j<y.length; j++){
//         if(x[i].toLowerCase().includes(y[j])){
//             flag = false;
//                 break;
//         }
//     }   
//     if(flag == true){
//         s.push(x[i]);
//     }
//     if(flag == false){
//         z.push(x[i]);
//     }
// }

// console.log("these words dont have any vowels");

// console.log(s);

// console.log("=====================================");

// console.log("these words have vowels");
// console.log(z);


// let x = [1,5,7,5,9,2,1,8,5,4,8,2]
// for (i=x.length-1; i>=0; i--){
//     console.log(x[i]);
// }
// let y = []
// let i = 0
// do{
//     y = x.sort()
//     i++
// }
// while(i<=x.length)
// console.log(y);


// let x = [1,5,7,5,9,2,1,8,5,4,8,2]
// let uniqueArray = [...new Set(x)]
// console.log(uniqueArray);

// let x = [1,5,8,9,6,3,4,8,22,55,24,63]
// let y = []
// let z = []

// function isPrime(num){
//     if (num<=1) 
//         return false
//     for(i=2; i<=Math.sqrt(num); i++){
//         if (num % i==0)
//         return false
//     }
//     return true;
// }
// for(let i=0; i<x.length; i++){
//     if (isPrime(x[i])){
//         y.push(x[i])
//     }
//     if (!isPrime(x[i])){
//         z.push(x[i])
//     }
// }
// console.log(z);
// console.log(y);



// function factorial(x){
//     let y = 1
//     for(i=2; i<=x; i++){
//         y*= i;
//     }
//     return y
// }
// console.log(factorial(5));


// class person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     greet(){
//         console.log(`my name is ${this.name} and my age is ${this.age}`);
//     }
// }
// let person1 = new person("Arjun", 30)
// person1.greet();
// let person2 = new person("Ajay", 28)
// person2.greet();
// let person3 = new person("Arun", 26)
// person3.greet();

// let person = {
//   name: "Alice",
//   age: 30,
//   isStudent: false
// };
// console.log(person);


// let x =[3456987,46353,454681,6843535]
// let y = []
// for(i=x.length-1; i>=0; i--){
//     y.push(x[i])
// }
// console.log(y);

// let arr = [1, 2, 3, 4, 5];
// let reversedArr = [];

// for (let i = arr.length - 1; i >= 0; i--) {
//   reversedArr.push(arr[i]);
// }

// console.log(reversedArr);

// let book = { title: "1984", author: "George Orwell" };
// book.year = 1949;   
// delete book.author;          

// console.log(book); 


// let user = { username: "john_doe", email: "john@example.com" };
// console.log(user.email);

// let x = "jhsu kyuc ckuhc scsiiu"
// let y = x.split(" ").reverse();
// console.log(y);

// class Car {
//   constructor(brand, model, year) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//   }
//   getDetails() {
//     return `${this.brand} ${this.model} (${this.year})`;
//   }
// }
// let c1 = new Car("Toyota", "Innova", 2025);
// console.log(c1.getDetails());
// let c2 = new Car("BMW", "m5", 2025);
// console.log(c2.getDetails());


// function factorial(n){
//   if (n < 0) return null;
//   let result = 1;
//   for(i=2; i<=n; i++){
//     result *= i;
//   }
//   return result;
// }
// console.log(factorial(5));


// function getMe(){
//     console.log("Hello Sir, Order plzz");

//      function orderPlaced(){
//         console.log("your order has been placed");
//      }
//      orderPlaced();
//  return new Promise((res) => {
//   console.log("waiting for confirmation");
  
// setTimeout(() => res("you have ordered fruit juice"), 3000);
//  });
// }

// function getPayment(){
//   return new Promise((res, rej)=>{
//     console.log("Select payment Method");
//     res("UPI Payment");
//     rej("By Cash");
//   })
// }
// getMe()
//   .then((msg)=>{
//     console.log(msg);
//     return getPayment("By Cash");
//   })

//   getPayment()
//     .then((msg)=>{
//       console.log(msg);
//       console.log("thank you");
      
//     })
//     .catch((msg)=>{
//       console.log("rejected");
//     })
  




//     function orderPlaced(){
//         console.log("your order has been placed");

//        

//      orderPlaced(); 
// }




// let n = []
// for(let i=1; i<=100; i++){
//      let x = true;
//    for(let j=2;j<i;j++){
//     if (i%j === 0){
//         x = false;
//         break;
//    }
//     }
//     if(x){
//         n.push(i)
//     }
//    } 
//    console.log(n); 



// function findFactorial(n){
//   let fact = 1
//   for(let i=n; i>0; i--){
//     fact*=i;
//   }
//   console.log(fact);
// }

// console.log(findFactorial(3));

// let n = [1,2,1,2,1,2,1]
// for(let i=0; i<n.length; i++){
//   let temp = []
//   for(let j=0; j<=i; j++){
//     temp+=i;
//   }
//     console.log(temp);
// }

let c = "dilip"
let h = " "
for (i=c.length-1; i>=0; i--){
    h += c[i]
}
console.log(h);








