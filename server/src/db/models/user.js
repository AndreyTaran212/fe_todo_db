'use strict';
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define('User', {
		firstName: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isAlpha: true,
			}
		},
		lastName: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isAlpha: true,
			}
		},
		email: {
			type: DataTypes.STRING,
			unique: true,
			validate: {
				isEmail: true,
			}
		},
		login: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				len: [6, 16],
			}
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'passwordHash',
			set (val) {
				this.setDataValue('password', bcrypt.hash(val, 10));
			}
		}
	}, {});
	User.associate = function (models) {
		// associations can be defined here
	};
	return User;
};