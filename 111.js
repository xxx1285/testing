"use strict";

// const obj = {
//    name: 'test',
//    with: 1024,
//    height: 3400,
//    colors: {
//       border: 'black',
//       bg: 'red'
//    },
//    chtoto: [222, 'dddd']
// };
// let wewee = Object.keys(obj.colors).length;
// // console.log(obj['colors']['bg']);
// for (;wewee <= 10; wewee++) {
//    console.log(wewee);
// }

// let counter = 0;
// for (let key2 in obj) {
//    if (typeof(obj[key2]) === 'object') {
//       for (let m in obj[key2]) {
//          console.log(`Свойство для ${m} имеет значение для ${obj[key2][m]}` + typeof(obj[key2]));
//          counter++;
//       }
//    } else {
//       console.log(`Свойство для ${key2} имеет значение для ${obj[key2]}` + typeof(obj[key2]));
//       counter++;
//    }
// }



// // console.log(obj['colors']['bg']);


// delete obj.name;

// console.log(obj);

// for (let key in obj) {
//    console.log(`Свойство для ${key} имеет значение для ${obj[key]}`);
// }



// console.log(obj[key]);



const arr = [1, 2, 22, 222, 22, 4];
arr.sort(comNums);
console.log(arr);

function comNums (a, b) {
   return a - b;
}
// arr.forEach(function(wwq, rrre, arr) {
//    console.log(`${wwq}: ${rrre} внутри ${arr}`)
// });
// for (i = 0; i < arr.length; i++) {
//    console.log (arr[i]);
// }

// for (let uuu of arr) {
//    console.log (uuu);
// }

const add = {
   a: 32,
   v: 443
};
const sas = {
   f: 23,
   fd: 'Fantik'
};
const clon = Object.assign({}, sas);
clon.f = 55;

console.log(sas);
console.log(clon);