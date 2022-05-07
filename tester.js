'use strict';
const numberofFilms = +prompt('Сколько фильмов вы уже посмотрели?', '22');

const personalMovieDB = {
   count: numberofFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};
let movies = {};

let a = prompt("Один из последних просмотренных фильмов?", ""),
    b = prompt("На сколько оцените его?", ""),
    c = prompt("Один из последних просмотренных фильмов?", ""),
    d2 = prompt("На сколько оцените его?", "");

personalMovieDB.movies.a = b;
personalMovieDB.movies.c = d2;


console.log(personalMovieDB);

