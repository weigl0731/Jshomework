//   3.

// --------------------a --------------------ok

let n = Math.trunc(Math.random() * 10) + 1;
let total = 3;
let total2 = 4;

for (let i = 1; i <= n; i++) {
  total *= 2;
  total2 *= 2;
}

console.log(`1~n的數為${n} 3的倍數總和${total} 4的倍數總和${total2}`);

//  ---------------  B   --------------- ok

let a = 9;
let str = "";

for (let i = 1; i <= 8; i++) {
  let count = 2;
  for (let j = 1; j <= a - 1; j++) {
    b = a * count;
    count++;
    str += b + "\t";
  }
  a--;
  str += "\n";
}
console.log(str);

// -------------------------------------

//   --------   C  -------  ok

let str1 = "";
for (let i = 0; i < 1; i++) {
  let a = -1;
  for (let j = 1; j <= 11; j++) {
    a += 3;
    str1 += a + "\t";
  }
}
console.log(str1);

// ----------- D --------------   ok
let nn = Math.trunc(Math.random() * 50) + 1;
let sum = 0;
function isprime(a) {
  if (a == 1) {
    return false;
  }
  for (let i = 2; i < a; i++) {
    if (a % i == 0) {
      return false;
    }
    return true;
  }
}

for (let b = 2; b < n; b++) {
  if (isprime(nn)) {
    sum += b;
  }
}
console.log(`質數${nn}`);
console.log(sum);

// ------------- E -----------------  ok

function getDaysInMonth(year, month) {
  if ((year % 4 == 0 && year % 100 !== 0) || year % 400 === 0) {
    switch (month) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        return 31;
      case 4:
      case 6:
      case 9:
      case 11:
        return 30;
      case 2:
        return 29;
    }
  } else {
    switch (month) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        return 31;
      case 4:
      case 6:
      case 9:
      case 11:
        return 30;
      case 2:
        return 28;
    }
  }
}
year = 2023;
month = 2;
a = getDaysInMonth(year, month);
console.log("2023年的2月份有幾天:\t" + a + "天");

/*   ------------------------------    4.     ----------------------- */

// -------------- A   ----------------  ok

let arr = []; // 宣告
for (let i = 0; i < 5; i++) {
  arr[i] = Math.floor(Math.random() * 10);

  for (let j = 0; j < i; j++) {
    console.log("arr[i]等於 :" + arr[i] + "\t arr[j]等於 :" + arr[j]);
    if (arr[i] == arr[j]) {
      i--;
      console.log("陣列數字重複");
    }
  }
  console.log(arr + "\n");
}
console.log(arr);
// -------------- B   ----------------  ok

let arr1 = []; // 宣告
let sum1 = 0;
let average = 0;
for (let i = 0; i < 5; i++) {
  arr1[i] = Math.floor(Math.random() * 10);
  for (let j = 0; j < i; j++) {
    console.log("arr1[i]等於 :" + arr1[i] + "\t arr1[j]等於 :" + arr1[j]);
    if (arr1[i] == arr1[j]) {
      i--;
      console.log("陣列數字重複");
    }
  }
}
for (let a of arr1) {
  sum += a;
}

console.log("陣列裡的數字為 :\n" + arr1 + "\n");
average += Math.floor(sum1 / arr1.length);

console.log("陣列數字的總和為:\t" + sum1 + "\n陣列數字的平均為:\t" + average);

//  -----------------   C  --------------------- ok

let arr2 = []; // 宣告
let sum2 = 0;
let average1 = 0;
for (let i = 0; i < 5; i++) {
  arr2[i] = Math.floor(Math.random() * 10);
  for (let j = 0; j < i; j++) {
    if (arr2[i] == arr2[j]) {
      i--;
    }
  }
}
for (let a of arr2) {
  sum2 += a;
}

console.log(arr2); // 排序前
arr2 = arr2.sort(); //排序後
console.log(arr2);
average1 += Math.floor(sum2 / arr2.length);
console.log("平均數 = " + average1);
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] == average1) {
    console.log(`陣列元素之值等於平均值 = ${i}`);
  } else if (arr2[i] < average1 && arr2[i + 1] > average1) {
    console.log(`平均值介於哪兩個元素值之間的數為${i}和${i + 1}`);
  }
}

//------------------ D ---------------  ok

const mySkills = ["javascript", "java", "sql", "c", "python", "php", "swift"];
let mySkillsstr = mySkills.join("");
let jcount = 0;
let acount = 0;
let vcount = 0;
let scount = 0;
let ccount = 0;
let rcount = 0;
let icount = 0;
let pcount = 0;
let tcount = 0;
let qcount = 0;
let lcount = 0;
let ycount = 0;
let hcount = 0;
let ocount = 0;
let ncount = 0;
let wcount = 0;
let fcount = 0;

for (let i = 0; i < mySkillsstr.length; i++) {
  if (mySkillsstr[i] == "j") {
    jcount += 1;
  }
  if (mySkillsstr[i] == "a") {
    acount += 1;
  }
  if (mySkillsstr[i] == "v") {
    vcount += 1;
  }
  if (mySkillsstr[i] == "s") {
    scount += 1;
  }
  if (mySkillsstr[i] == "c") {
    ccount += 1;
  }
  if (mySkillsstr[i] == "r") {
    rcount += 1;
  }
  if (mySkillsstr[i] == "i") {
    icount += 1;
  }
  if (mySkillsstr[i] == "p") {
    pcount += 1;
  }
  if (mySkillsstr[i] == "t") {
    tcount += 1;
  }
  if (mySkillsstr[i] == "q") {
    qcount += 1;
  }
  if (mySkillsstr[i] == "l") {
    lcount += 1;
  }
  if (mySkillsstr[i] == "y") {
    ycount += 1;
  }
  if (mySkillsstr[i] == "h") {
    hcount += 1;
  }
  if (mySkillsstr[i] == "o") {
    ocount += 1;
  }
  if (mySkillsstr[i] == "n") {
    ncount += 1;
  }
  if (mySkillsstr[i] == "w") {
    wcount += 1;
  }
  if (mySkillsstr[i] == "f") {
    fcount += 1;
  }
}
console.log(
  ` j的總數為${jcount}\n a的總數為${acount}\n v的總數為${vcount}\n s的總數為${scount}\n c的總數為${ccount}\n r的總數為${rcount}\n i的總數為${icount}\n p的總數為${pcount}
 t的總數為${tcount}\n q的總數為${qcount}\n l的總數為${lcount}\n y的總數為${ycount}\n h的總數為${hcount}\n o的總數為${ocount}\n n的總數為${ncount}\n w的總數為${wcount}
 f的總數為${fcount}`
);

// --------------- E ----------------------  ok

let arr3 = [];
let a3 = 9;

for (let i = 1; i <= 8; i++) {
  let arr4 = [];
  let count = 2;
  for (let j = 1; j <= a3 - 1; j++) {
    b = a3 * count;
    count++;
    arr4.push(b);
  }
  a3--;
  arr3.push(arr4);
}
console.log(arr3);
