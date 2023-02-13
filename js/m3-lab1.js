

//1
/*Create a string array that contains your five favorite movies. */
var moviesList = ["Kal Ho Na Ho", "Swades", "3 Idiots", "Yeh Jawaani Hain Deewani", "The Imitation Game"];

/*Then, use the console to display the second movie in your array.*/
window.console.log(moviesList[1]);

//2
/*Declare an array called movies using the function constructor method. Add the length of 5 into the constructor. */
var movies = new Array(5);

/*Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array.  */
movies[0] = "Kal Ho Na Ho";
movies[1] = "Swades";
movies[2] = "3 Idiots"
movies[3] = "Yeh Jawaani Hain Deewani";
movies[4] = "The Imitation Game";

/* Then, use the console to display the first movie in your array. */
window.console.log(movies[0]);

//3
/* Copy your code from step 2. */
var movies = new Array(5);
movies[0] = "Kal Ho Na Ho";
movies[1] = "Swades";
movies[2] = "3 Idiots"
movies[3] = "Yeh Jawaani Hain Deewani";
movies[4] = "The Imitation Game";

/* Add a new movie into the 3rd position within your array. */
movies[2] = "Iron Man";

/* Then, use the console to display the length of the array. You should now have 6 total movies stored in the array. */
window.console.log(movies.length);

//4
/* Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. */
var movies = ["Kal Ho Na Ho", "Swades", "3 Idiots", "Yeh Jawaani Hain Deewani", "The Imitation Game"];

/* Now, use the delete operator to remove the first movie in the array. */
delete movies[0];

/*  Use the console to display the contents of the array. */
window.console.log(movies);

//5
/* Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the array until you have 7 total movies in your array. */
var movies = ["Kal Ho Na Ho", "Swades", "3 Idiots", "Yeh Jawaani Hain Deewani", "The Imitation Game", "The Avengers", "Iron Man"];

/* Now, use a for/in loop to iterate through the array and display each movie within the console window. */
for (var movie in movies) {
	window.console.log(movies[movie]);
}

//6
var movies = ["Kal Ho Na Ho", "Swades", "3 Idiots", "Yeh Jawaani Hain Deewani", "The Imitation Game", "The Avengers", "Iron Man"];

for (var movie of movies) {
  window.console.log(movie);
}




//7

var movies = ["Kal Ho Na Ho", "Swades", "3 Idiots", "Yeh Jawaani Hain Deewani", "The Imitation Game", "The Avengers", "Iron Man"];

for (var movie of movies) {
  window.console.log(movie);
}




//8
var movies = ["Kal Ho Na Ho", "Swades", "3 Idiots", "Yeh Jawaani Hain Deewani", "The Imitation Game", "The Avengers", "Iron Man"];
var leastFavMovies = ["Thor", "Thor: The Dark World", "Thor: Love and Thunder"];

window.console.log("Movies I like:");
for (var movie in movies) {
  console.log(movie);
}

window.console.log("\nMovies I regret watching:");
for (var movie in leastFavMovies) {
  console.log(movie);
}


//9

var movies = ["Kal Ho Na Ho", "Swades", "3 Idiots", "Yeh Jawaani Hain Deewani", "The Imitation Game", "The Avengers", "Iron Man"];
var leastFavMovies = ["Thor", "Thor: The Dark World", "Thor: Love and Thunder"];

window.console.log("Movies I like:");
for (var movie in movies) {
  console.log(movie);
}

window.console.log("\nMovies I regret watching:");
for (var movie in leastFavMovies) {
  console.log(movie);


movies = movies.concat(leastFavMovies);
movies.sort().reverse();

console.log("Reverse sorted list of concatenated movies:");
for (var movie of movies) {
  console.log(movie);
}

//10

var movies = ["Kal Ho Na Ho", "Swades", "3 Idiots", "Yeh Jawaani Hain Deewani", "The Imitation Game", "The Avengers", "Iron Man"];
var leastFavMovies = ["Thor", "Thor: The Dark World", "Thor: Love and Thunder"];

window.console.log("Movies I like:");
for (var movie in movies) {
  console.log(movie);
}

window.console.log("\nMovies I regret watching:");
for (var movie in leastFavMovies) {
  console.log(movie);


movies = movies.concat(leastFavMovies);
movies.sort().reverse();

console.log("Reverse sorted list of concatenated movies:");
for (var movie of movies) {
  console.log(movie);
}

var lastMovie = movies.pop();

console.log("The last movie in the concatenated array is: " + lastMovie);

//11

var movies = ["Kal Ho Na Ho", "Swades", "3 Idiots", "Yeh Jawaani Hain Deewani", "The Imitation Game", "The Avengers", "Iron Man"];
var leastFavMovies = ["Thor", "Thor: The Dark World", "Thor: Love and Thunder"];

window.console.log("Movies I like:");
for (var movie in movies) {
  window.console.log(movie);
}

window.console.log("\nMovies I regret watching:");
for (var movie in leastFavMovies) {
  console.log(movie);


movies = movies.concat(leastFavMovies);
movies.sort().reverse();

console.log("Reverse sorted list of concatenated movies:");
for (var movie of movies) {
  console.log(movie);
}

window.console.log(movies.shift());

//12
var movies = ["Kal Ho Na Ho", "Swades", "3 Idiots", "Yeh Jawaani Hain Deewani", "The Imitation Game", "The Avengers", "Iron Man"];
var leastFavMovies = ["Thor", "Thor: The Dark World", "Thor: Love and Thunder"];

movies = movies.concat(leastFavMovies);

var indices = [];

for (var i = 0; i < movies.length; i++) {
    if (movies.includes(movies[i])) {
        indices.push(i);

    }
}

for (var i = 0; i < indices.length; i+=1) {
    movies[indices[i]] = "Mission Impossible "+(i+1);
}

window.console.log("Movies that I like: " + movies);


//13

var movies = [["Dilwale Dulhania Le Jayenge", 1], ["Kuch Kuch Hota Hai", 2], ["Dil", 3], [" Kabhi Khushi Kabhie Gham", 4], ["Kal Ho Naa Ho", 5]];

var movieNames = movies.filter(function(movie) {
  return typeof movie[0] === 'string';
});

console.log("Movie Names: ");
for (var movie of movieNames) {
  console.log(movie[0]);
}


//14

var employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];

var showEmployee = function(employeeArray) {
  console.log("Employees:");
  for (var employee of employeeArray) {
    console.log(employee);
  }
};

showEmployee(employees);

//15

function filteration(a) {
  return a.filter(function(item) {
    return item !== false && item !== null && item !== 0 && item !== "";
  });
}

window.console.log(filterValues([58, '', 'abcd', true, null, false, 0]));



//16
function randomFunction(a) {
  return a[Math.floor(Math.random() * a.length)];
}

var n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(randomFunction(n));


//17

function largest(numbers) {
  let max = numbers[0];
  for (var i=0;i<numbers.length;i+=1) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

var a = [1, 20, 3, 40, 5, 6, 70, 8, 99, 100];

console.log("Largest number is "+largest(a)); 