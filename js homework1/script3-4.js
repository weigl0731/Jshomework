//   3.

// --------------------a --------------------ok

// let n = 10;
// let total = 3;
// let total2 = 4;

// for (let i = 1; i <= n; i++) {
//   total *= 2;
//   total2 *= 2;
// }
// console.log("3的倍數總和" + total + "\t4的倍數總和" + total2);

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

// ----------- D --------------
let n = 10;
let sum = 0;
function isprime(a) {
  if (a === 1) {
    return false;
  }
  for (let i = 2; i < a; i++) {
    if (a % i === 0) {
      return false;
    }
  }
  return true;
}

for (let i = 2; i < n; i++) {
  if (isprime(i)) {
    sum += i;
  }
  console.log(i);
}

console.log(sum);

// ------------- E -----------------  ok

// function getDaysInMonth(year, month) {
//   if ((year % 4 == 0 && year % 100 !== 0) || year % 400 === 0) {
//     switch (month) {
//       case 1:
//       case 3:
//       case 5:
//       case 7:
//       case 8:
//       case 10:
//       case 12:
//         return 31;
//       case 4:
//       case 6:
//       case 9:
//       case 11:
//         return 30;
//       case 2:
//         return 29;
//     }
//   } else {
//     switch (month) {
//       case 1:
//       case 3:
//       case 5:
//       case 7:
//       case 8:
//       case 10:
//       case 12:
//         return 31;
//       case 4:
//       case 6:
//       case 9:
//       case 11:
//         return 30;
//       case 2:
//         return 28;
//     }
//   }
// }
// year = 2023;
// month = 2;
// a = getDaysInMonth(year, month);
// console.log("2023年的2月份有幾天:\t" + a + "天");

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

// let arr = [];
// let a = 9;
// for (let i = 0; i <= 8; i++) {
//   let count = 2;
//   let arr2 = [];
//   for (let j = 1; j <= a - 1; j++) {
//     arr2[j] = a * count;

//     count++;
//   }
//   a--;
// }
// console.log(arr2);
// console.log(arr);
