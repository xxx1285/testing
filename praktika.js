'use strict';

const personalMovieDB = {
   count: 0,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
   start: function() {
      personalMovieDB.count = +prompt(`Skolko smotrel filmov?`, ``);
      
      while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
         personalMovieDB.count = +prompt(`Skolko smotrel filmov?`, ``);
      }
   },
   rememberMyFilms: function() {
      for (let i = 0; i < 2; i++) {
         let a = prompt(`Last FILM ${i}`, ``),
            b = prompt(`2 HELP ${i}`, ``);
         let c = 111;
         if (a != null && b != null && a != '' && b != '') {
            personalMovieDB.movies[a] = b;
            console.log('done');
         } else {
            console.log('error');
            i--;
         }
      }
   },
   detectPersonalLevel: function() {
      if (personalMovieDB.count < 10) {
         console.log("Pereglyanuto malo filmov");
      } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
         console.log('You are good lookMan');
      } else if (personalMovieDB.count >= 30) {
         console.log('Are you kinoman?');
      } else {
         console.log('ERROR');
      }
   },
   showMyDB: function(hidden) {
      if (!hidden) {
         console.log(personalMovieDB);
      }
   },
   toggleVisibleMyDB: function() {
      if (personalMovieDB.privat) {
         personalMovieDB.privat = false;
      } else {
         personalMovieDB.privat = true;
      }
   },
   writeYouGenres: function() {
      for (let i = 1; i <= 5; i++) {
         let genre = prompt(`You faworite shanr in cinema ${i}`).toLowerCase();

         if (genre === '' || genre == null) {
            console.log('ERROR - Are you not vveli bukvu?');
            i--;
         } else {
            personalMovieDB.genres[i - 1] = genre;
         } 
      }
      personalMovieDB.genres.forEach((item, i) => {
         console.log(`Любимий жанр ${i + 1} - это ${item}`)
      })
   }
};

// console.log(typeof(String(4)));

// console.log(typeof(5 + ''));

// console.log(typeof(+'4'));

// let rrrrMas = ['aaa', 3, 'eee'];
// let ttttMas = [555, 'ffff', 4567];
// let zzzMas = [...rrrrMas, ...ttttMas];
// console.log(2 && 1 && null && 0 && undefined);
console.log('Алек' > 'нь');
// let x = 5; alert( x++ ); 
// // console.log(parseInt('12px', 3));
// 2 && 1 && null && 0 && undefined ?