const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt('How many movies do you wathes', '');
    while (
      personalMovieDB.count == '' ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt('How many movies do you wathes', '');
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt('What was the last movie you watched?', ''),
        b = prompt('How would you rate the movie you watched?', '');

      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Thanks, your data is good!');
      } else {
        console.log('your answer is  incorect! Try again! ');
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    const key = personalMovieDB.count;

    if (key < 10) {
      console.log('Watched quite a few films!');
    } else if (key >= 10 || key < 30) {
      console.log('You are a classic viewer!');
    } else if (key >= 30) {
      console.log('You are a film buff!');
    } else {
      console.log('An error has occurred!');
    }
  },
  showMyDB: (hidden = personalMovieDB.privat) => {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`your favorite genre number ${i} is: `);

      if (genre === '' || genre === null) {
        console.log('You fogot to write dates! try again!');
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`My favorite genre ${i + 1} -  is  ${item}`);
    });
  },
  toggleVisibleMyDB: function () {
    personalMovieDB.privat
      ? (personalMovieDB.privat = false)
      : (personalMovieDB.privat = true);
  },
  // if (personalMovieDB.privat) {
  //   personalMovieDB.privat = false;
  // } else {
  //   personalMovieDB.privat = true;
  // }
};

// ==================================================================
