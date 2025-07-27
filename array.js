// let arr= [4,8,10,[3,5,6,[8,9,10],12]]
//     y= arr.flat(2)
// console.log(y);


// let arr= [4,8,10,[3,5,6,[8,9,10],12]]
// function flatArray(arr){
//     let y = []
//     for (i=0; i<arr.length; i++){
//         if(Array.isArray(arr[i])){
//             let flat=flatArray(arr[i]);
//             for (let j=0; j<flat.length; j++){
//                 y.push(flat[j])
//             } 
//         }else {
//                 y.push(arr[i])
//             }
//     }
//     return y;
// }
// console.log(flatArray(arr));

// let num = [10,20,111,1,5]
// let result = num.filter(function(number){
//     return number>10;
// })
// console.log(result);


// let num = [10,20,30,8,87,156]
// let result = num.filter(a=> a>10);
// console.log(result);

// function isPrime(num){
//     if (num <=1){
//         console.log("The number is invalid");
//     }
//     for (let i=2; i<num; i++){
//         if(num%i == 0){
//             return console.log("the number is not prime");
//         }
//     }
//     console.log("The number is prime");
// }
// console.log(isPrime(1));

// let x = 5
// for(let i=1; i<=x; i++){
//     str = ''
//     for(let j=0; j<=x-1-i; j++){
//     str += ' '
//     }
//     for(j=0; j<i; j++){
//     str += '* '
//     }
//     console.log(str);
// }

// let x = 5
// for(let i=1; i<=x; i++){
//     str = ""
// for(let j=0; j<=i; j++){
//     str += "*"
// }
// console.log(str);
// }





