import User from "./models/User.model.js";
import Post from "./models/Post.model.js";

await Post.sync({ alter: true });
await User.sync({ alter: true });

// Post'o sukūrimas useriui
const newPostResponse = await Post.create({
	title: "JS is Awesome",
	description: "But theres so many things to learn...",
	userId: 800,
});

console.log(newPostResponse.toJSON());

// Perskaitymas visu Postu tam tikram Useriui
const myPostsResponse = await Post.findAll({
	where: { userId: 1 },
});
const myPosts = myPostsResponse.map((post) => post.toJSON());
console.log(myPosts);

// Perskaitymas visu Useriu
const usersResponse = await User.findAll({
	include: [Post],
});
const users = usersResponse.map((user) => user.toJSON());
console.log(users[0]);

//Sukurimas naujo userio:
const newUserResponse = await User.create({
	name: "Agnė",
	lastName: "Agnė",
	elPastas: "agne@agne.lt",
	age: 22,
});
const newUser = newUserResponse.toJSON();
console.log(newUser);

// Trynimas userio
await usersResponse[1].destroy();
// Arba
await User.destroy({
	where: {
		id: 3,
	},
});

// Userio atnaujinimas
usersResponse[1].lastName = "Basd";
usersResponse[1].name = "Asdf";
await usersResponse[1].save();
// Arba
await User.update({ name: "Agne" }, { where: { id: 4 } });
