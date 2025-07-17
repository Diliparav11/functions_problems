// function getMe(){
//     console.log("Hello Sir, Order plzz");
//     function orderPlaced(){
//         console.log("your order has been placed");

//         return new Promise((res, rej) => {
//             setTimeout(()=>res("you have ordered fruit juice"),3000)
//         });
//     }
//     return orderPlaced();
// }


// function getMe(){
//     console.log("Hello Sir, Order plzz");

//     function orderPlaced(){
//         console.log("your order has been placed");
//         return new Promise((res) => {

//             setTimeout(() => res("you have ordered fruit juice"), 3000);
//         });
//     }
//         return orderPlaced();
// }

// function modePayment(x){
//     console.log("select your mode of payment");
//     return new Promise((res, rej)=>{
//         if(x === "UPI"){
//             res("please enter upi id" + x);
//         }
//         else{
//             rej("thank u");
//         }
//     })
    
// }
// modePayment()
// getMe()
// .then((msg)=>{
//     console.log(msg);
//     return modePayment("UPI");
// });

// function selectOrder(){
//   console.log("Please select the order");
//   return new Promise((res)=>{
//     res("order selected")

//   })
// }

// function orderConfirmation(order){
//   console.log("Please confirm the order");
//  return new Promise((resolve, reject) => {
//     if (order === "fruit Juice") {
//       resolve("Order confirmed: " + order);
//     } else {
//       reject("Order not available");
//     }
//   });
// }

// function goPay(x){
//   console.log("Select payment method");
//  return new Promise((resolve, reject) => {
//     if (x === "UPI") {
//       resolve("Payment successful via " + x);
//     } else {
//       reject("Payment failed");
//     }
//   });}

// function orderPlaced() {
//   console.log("orderPlaced");
// }
// selectOrder()
// .then((msg)=>{
//   console.log(msg);
//   return orderConfirmation("fruit Juice");

// })
// .then((msg)=>{
// console.log(msg);
// return goPay("UPI")
// })  
// .then((pay)=>{
// console.log(pay);
// return orderPlaced();
// })
// .catch((err) => {
//   console.error("Error:", err);
// });


// arr = [4,5,7,5,9,8,5,8,5]
// function getUnique(arr){
//     let uniqueArray = []
//     for(i=0; i<arr.length; i++){
//         if (!uniqueArray.includes(arr[i])){
//             uniqueArray.push(arr[i])
//         }
//     }
//     return uniqueArray;
// }
// console.log(getUnique(arr));
// function getCount(unique, arr){
//     ans =[];
//     for(i=0; i<unique.length; i++){
//         g=0;
//         for(j=0; j<arr.length; j++){
//             if(unique[i]==arr[j]){
//             g++;
//             }
//         }
//         ans.push(unique[i]+" the repeat times are "+g);
//     }
//     return ans;

// }
// result = getCount(getUnique(arr),arr);

// console.log(result)


      





