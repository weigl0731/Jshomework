//   3.

// a

//  ---------------  B   --------------- ok

// let a = 9;
// let str = "";

// for (let i = 1; i <= 8; i++) {
//   let count = 2;
//   for (let j = 1; j <= a - 1; j++) {
//     b = a * count;
//     count++;
//     str += b + "\t";
//   }
//   a--;
//   str += "\n"
// }
// console.log(str);

// -------------------------------------

//   --------   C  -------  ok

// leit str = ""
// for(let i = 0 ; i <1 ; i++){
//   let a = -1
//   for (let j =1; j <= 11 ; j++ ){
//     a += 3
//     str += a + "\t";
//   }
// }
// console.log(str);

/*   ------------------------------    4.     ----------------------- */

// -------------- A   ----------------  ok

// let arr = []; // 宣告
// for (let i = 0; i < 5; i++) {
//   arr[i] = Math.trunc(Math.random() * 10); // 設定值
// }
// console.log(arr);

// -------------- B   ---------------- ok

let arr = []; // 宣告
let sum = 0;
let average = "";
for (let i = 0; i < 5; i++) {
  arr[i] = Math.trunc(Math.random() * 10); // 設定值
  sum += arr[i];
}

console.log(sum);
