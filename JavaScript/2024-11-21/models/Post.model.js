import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import User from "./User.model.js";

const Post = sequelize.define("post", {
	title: {
		type: DataTypes.STRING,
	},
	description: {
		type: DataTypes.STRING,
	},
});

// Post.belongsTo(User);
User.hasMany(Post);

export default Post;

// 1:1
// 1:N
// N:N
