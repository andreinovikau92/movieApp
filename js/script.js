

const numberOfFilms = promt('How many movies have you watched already?', '');

const personalMovieDB = {
    'count': numberOfFilms,
    'movies': {},
    'actors': {},
    'geners': [],
    'privat': false
};

const a = prompt('One of the last movies you watched?', '');
const b = prompt('How much would you rate it?', '');
const c = prompt('One of the last movies you watched?', '');
const d = prompt('How much would you rate it?', '');

personalMovieDB.movies[a] = b;

console.log(personalMovieDB.movies);