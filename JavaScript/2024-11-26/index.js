import MovieActors from "./models/MovieActors.model.js";
import Movie from "./models/Movie.model.js";
import Actor from "./models/Actor.model.js";
import { Op } from "sequelize";

// const newMovie = await Movie.create(
// 	{
// 		title: "The Equalizer 2",
// 		imdb: 8,
// 		actors: [{ id: 1 }],
// 	},
// 	{ include: [Actor] }
// );

// const actors = [
// 	{
// 		firstName: "Paul",
// 		lastName: "Mescal",
// 	},
// 	{
// 		firstName: "Denzel",
// 		lastName: "Washington",
// 	},
// 	{
// 		firstName: "Pedro",
// 		lastName: "Pascal",
// 	},
// 	{
// 		firstName: "Connie",
// 		lastName: "Nielsen",
// 	},
// 	{
// 		firstName: "Joseph",
// 		lastName: "Quinn",
// 	},
// ];

// await Actor.bulkCreate(actors);

// await MovieActors.bulkCreate([
// 	{
// 		movieId: 3,
// 		actorId: 2,
// 	},
// 	{ movieId: 3, actorId: 3 },
// 	{
// 		movieId: 5,
// 		actorId: 1,
// 	},
// 	{
// 		movieId: 5,
// 		actorId: 2,
// 	},
// 	{
// 		movieId: 5,
// 		actorId: 5,
// 	},
// 	{
// 		movieId: 6,
// 		actorId: 1,
// 	},
// 	{
// 		movieId: 6,
// 		actorId: 2,
// 	},
// 	{
// 		movieId: 6,
// 		actorId: 4,
// 	},
// ]);

// const movieActors = await Movie.findAll({
// 	include: [
// 		{
// 			model: Actor,
// 			through: { attributes: [] },
// 		},
// 	],
// });
// const actorMovies = await Actor.findAll({
// 	include: [
// 		{
// 			model: Movie,
// 			through: { attributes: [] },
// 		},
// 	],
// });
// console.log(actorMovies[2].toJSON());
// console.log(movieActors.map((movie) => movie.toJSON())[0].actors);

const movies = await Movie.findAll({
	where: {
		imdb: {
			[Op.lt]: 7.5,
		},
	},
});

console.log(movies.map((movie) => movie.toJSON()));
