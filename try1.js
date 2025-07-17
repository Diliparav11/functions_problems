// let x = [10, 14, 5, 8, 16,28,36]

// let a = x[0]
// let b = x[0]

// for (i=0; i<x.length; i++){
//     if(x[i]<a){
//         a = x[i]

//     }
//     else if (x[i]>b){
//         b = x[i]
//     }
// }
// console.log(a);
// console.log(b);

//------ min and max --------//
// let x = [10, 14, 5, 8, 16,28,36]
// for (i=0; i<x.length-1; i++){
//     for (let j=0; j<x.length-1-i; j++){
//         if (x[j] > x[j+1]){
//             let temp = x[j]
//             x[j] = x[j+1]
//             x[j+1]=temp
//         }
//     }
// }
// console.log(x);
// console.log("minimum =", x[0]);
// console.log("maximum =", x[x.length-1]);

//----------2nd min and 2nd max ----------//
// let x = [10, 14, 5, 8, 16,28,36]
// for (i=0; i<x.length-1; i++){
//     for (let j=0; j<x.length-1-i; j++){
//         if (x[j] > x[j+1]){
//             let temp = x[j]
//             x[j] = x[j+1]
//             x[j+1]=temp
//         }
//     }
// }
// console.log(x);
// console.log("second minimum =", x[1]);
// console.log("second maximum =", x[x.length-2]);

//---------- sort an array -------//
// let x = [10, 14, 5, 8, 16,28,36]
// for (i=0; i<x.length-1; i++){
//     for (let j=0; j<x.length-1-i; j++){
//         if (x[j] > x[j+1]){
//             let temp = x[j]
//             x[j] = x[j+1]
//             x[j+1]=temp
//         }
//     }
// }
// console.log(x);


//---------- Duplicate of Array -------//
// function isArray(arr){
//     let unique = []
//     for(i=0; i<arr.length; i++){
//     let isduplicate = false
//         for(j=0; j<unique.length; j++){
//             if(arr[i] === unique[j]){
//                 isduplicate = true;
//                 break;
//             }
//         }
//         if(!isduplicate){
//             unique[unique.length] = arr[i];
//         }
//     }
//     return unique;
// }
// let a = [1,1,5,1,5,8,5,7,8,5,2,5,1,5,4,2,5]
// let u = isArray(a);
// console.log(u);

//---------- Duplicate of String -------//
// function isString(str){
//     let unique = ""
//     for(i=0; i<str.length; i++){
//     let isduplicate = false
//         for(j=0; j<unique.length; j++){
//             if(str[i] == unique[j]){
//                 isduplicate = true;
//                 break;
//             }
//         }
//         if(!isduplicate){
//             unique += str[i];
//         }
//     }
//     return unique;
// }
// let a = "Hello World";
// let u = isString(a);
// console.log(u);








