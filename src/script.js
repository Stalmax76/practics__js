try {
  const numberOfFilms = +prompt('How many movies do you wathes', '');
  console.log(numberOfFilms);
  const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
  };

  const a = prompt('What was the last movie you watched?', '');
  const b = prompt('How would you rate the movie you watched?', '');
  const c = prompt('What was the last movie you watched?', '');
  const d = prompt('How would you rate the movie you watched?', '');
  console.log(a);
  console.log(b);
  personalMovieDB.movies[a] = b;
  personalMovieDB.movies[c] = d;

  console.log(personalMovieDB);
} catch (error) {
  console.log(error);
}
