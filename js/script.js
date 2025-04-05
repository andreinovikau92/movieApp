

const numberOfFilms = +prompt('How many movies have you watched already?', '');

const personalMovieDB = {
    'count': numberOfFilms,
    'movies': {},
    'actors': {},
    'geners': [],
    'privat': false
};

for(let i = 0; i < 2; i++) {
    const a = prompt('One of the last movies you watched?', '');
    const b = prompt('How much would you rate it?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}



console.log(personalMovieDB);