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

let a = []

function ArrayRandom(a) {
  a = Math.floor(Math.random()*10)
  return a
}
for(let i = 1 ;i<= a.length; i++){
  a[i] = i+1
  console.log(ArrayRandom(a[i]));
}









// -------------- B   ---------------- 

// let a = [];
// let b
// for(let i = 0 ; i <= 5; i++){

//   b = Math.floor(Math.random()*10)
//   console.log(b);
// }






// -------------- C   ---------------- 