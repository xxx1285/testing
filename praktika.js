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
      for (let i = 1; i <= 3; i++) {
         personalMovieDB.genres[i - 1] = prompt(`You faworite shanr in cinema ${i}`);
      }
   }
};