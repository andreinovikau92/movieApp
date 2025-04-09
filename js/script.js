

let numberOfFilms;

function start () {
    
    numberOfFilms = +prompt('How many movies have you watched already?', '');

    while (numberOfFilms == ''  || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many movies have you watched already?', '');
    }
}

start();

const personalMovieDB = {
    'count': numberOfFilms,
    'movies': {},
    'actors': {},
    'geners': [],
    'privat': false
};

function rememberMyFilms () {
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
}

//rememberMyFilms();

function detectPersonalLevel () {
    if(personalMovieDB.count < 10) {
        console.log('Watched quite a few films');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('You are a classic spectator');
    } else if (personalMovieDB.count >= 30) {
        console.log('You are a movie buff!');
    } else {
        console.log('Error');
    }
}

//detectPersonalLevel();

function showMyDB (hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres () {
    for(let i = 1; i <= 3; i++) {
        const genre = prompt(`Your favorite movie by number ${i}`, '');
        personalMovieDB.geners[i - 1] = genre;
    }
}

writeYourGenres();