let nn = 29;

function isprime(a) {
  if (a <= 1) {
    return false;
  }
  for (let i = 2; i < a; i++) {
    if (a % i == 0) {
      return false;
    }
  }
  return true;
}

for (let b = 2; b <= nn; b++) {
  let sum = 0;
  if (isprime(b)) {
    sum += b;
    console.log(`1~n的所有質數有${sum}`);
  }
}

// let numm = Math.floor(Math.random() * 100) + 1;
// let prime = 0;

// function primeNum(a) {
//   if (a < 2) {
//     return false;
//   }

//   for (let i = 2; i < a; i++) {
//     if (a % i == 0) {
//       return false;
//     }
//   }
//   return true;
// }

// for (let k = 2; k <= numm; k++) {
//   if (primeNum(k)) {
//     prime += k;
//   }
// }

// console.log(`變數${numm}的質數總和是${prime}`);

// function isPrime(num) {
//   if (num <= 1) return false; // 小於等於1的數不是質數
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false; // 存在其他整數因數則不是質數
//   }
//   return true; // 沒有其他整數因數則是質數
// }

// function sumOfPrimes(n) {
//   let sum = 0;
//   for (let i = 2; i <= n; i++) {
//     if (isPrime(i)) {
//       sum += i;
//     }
//   }
//   return sum;
// }
// console.log(sumOfPrimes(7));
