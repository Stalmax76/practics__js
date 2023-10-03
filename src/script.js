const numberOfFilms = +prompt('How many movies do you wathes', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

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
const key = personalMovieDB.count;
console.log(`key is: ${key}`);

if (key < 10) {
  console.log('Watched quite a few films!');
} else if (key >= 10 || key < 30) {
  console.log('You are a classic viewer!');
} else if (key >= 30) {
  console.log('You are a film buff!');
} else {
  console.log('An error has occurred!');
}

console.log(personalMovieDB);
