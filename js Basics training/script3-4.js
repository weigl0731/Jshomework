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
//   str += "\n";
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
//   arr[i] = Math.floor(Math.random() * 10);

//   for (let j = 0; j < i; j++) {
//     console.log("arr[i]等於 :" + arr[i] + "\t arr[j]等於 :" + arr[j]);
//     if (arr[i] == arr[j]) {
//       i--;
//       console.log("陣列數字重複");
//     }
//   }
//   console.log(arr + "\n");
// }
// console.log(arr);
// -------------- B   ----------------  ok

// let arr = []; // 宣告
// let sum = 0;
// let average = 0;
// for (let i = 0; i < 5; i++) {
//   arr[i] = Math.floor(Math.random() * 10);
//   for (let j = 0; j < i; j++) {
//     console.log("arr[i]等於 :" + arr[i] + "\t arr[j]等於 :" + arr[j]);
//     if (arr[i] == arr[j]) {
//       i--;
//       console.log("陣列數字重複");
//     }
//   }
// }
// for (let a of arr) {
//   sum += a;
// }

// console.log("陣列裡的數字為 :\n" + arr + "\n");
// average += Math.floor(sum / arr.length);

// console.log("陣列數字的總和為:\t" + sum + "\n陣列數字的平均為:\t" + average);

//  -----------------   C  ---------------------

// let arr = []; // 宣告
// let sum = 0;
// let average = 0;
// for (let i = 0; i < 5; i++) {
//   arr[i] = Math.floor(Math.random() * 10);
//   for (let j = 0; j < i; j++) {
//     if (arr[i] == arr[j]) {
//       i--;
//     }
//   }
// }
// for (let a of arr) {
//   sum += a;
// }

// console.log("陣列裡的數字為 :\n" + arr + "\n");
// console.log("排序過後：\n" + arr.sort());
// average += Math.floor(sum / arr.length);

// if (arr.indexOf(average) !== -1) {
//   console.log("陣列元素的值等於平均值的數字:" + average);
// } else if (arr.indexOf(average) == -1) {
//   console.log()
// }

//------------------ D ---------------

// const mySkills = ["javascript", "java", "sql", "c", "python", "php", "swift"];

// function indexcount(x, char) {
//   let count = 0;
//   let index = x.indexOf(char);
//   while (index !== -1) {
//     count++;
//     index = x.indexOf(char, index + 1);
//   }
//   return count;
// }
// let jCount = indexcount(mySkills[], "j");
// console.log("j有:" + jCount);

// --------------- E ----------------------

let arr = [];
let a = 9;
let str = "";
for (let i = 0; i <= 8; i++) {
  let count = 2;
  for (let j = 1; j <= a - 1; j++) {
    b = a * count;
    str += b;
    count++;
  }
  a--;
  arr.push([str]);
}

console.log(arr);
// console.log(str);

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
