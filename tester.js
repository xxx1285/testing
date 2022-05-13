"use strict";

// if (4 == 8) {
//    console.log('Ok');
// } else {
//    console.log('Error');
// }


// (net == 50) ? console.log("Ok") : console.log("Errof");
// if (net < 52) {
//    console.log("Good");

// } else if (net > 55) {
//    console.log('Normall');
// } 
// else {console.log("Bad");
// }

// (net == 52) ? console.log('ok') : console.log('No'); 
// switch (num) {
//    case 50: console.log('YES');
//    break;
//    case 55: console.log('Mayby');
//    break;
//    default: console.log('Default');
//       break;
// };



// while (qwerty <= 55) {
//    console.log(`okey ${qwerty}`);
//    qwerty++;
// }


// do {
//    console.log(`okey ${qwerty}`);
//    qwerty++;
// }
// while (qwerty <= 55);

// let qwerty = 50;

// for (let i = 3; i < 8; i++) {
//    if (i == 6) { continue;};
//    console.log(`okey ${i}`);
//    qwerty++;
// }

let numberOfFilms = +prompt(`Skolko smotrel filmov?`, ``)

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   privat: true
};

function rememberMyFilms() {
   for (let i = 0; i < 2; i++) {
      let a = prompt(`Питання 1 захodi ${i}`, ``),
         b = prompt(`2 HELP ${i}`, ``);
      let c = 111;
      if (a != null && b != null && a != '' && b != '') {
         personalMovieDB.movies[a] = b;
         console.log('done');
      } else {
         console.log('error');
         i--;
      };
   }
}

function showMyDB (hidden) {
   if (!hidden) {
      console.log(personalMovieDB);
   };
};

showMyDB(personalMovieDB.privat);


// function roughScale(x, base) {
//    const parsed = parseInt(x, base);
//    if (isNaN(parsed)) { return 0; }
//    return parsed * 100;
//  }
 
//  console.log(roughScale(' 0xF', 16));
//  // expected output: 1500
 
//  console.log(roughScale('321', 2));
 // expected output: 0