import { User, sequelize }  from './db/models';
import { Model, DataTypes } from 'sequelize';
import moment               from 'moment';

/*const bcrypt = require('bcrypt');*/

/*
 const hashPassword = async password => {
 try {
 return bcrypt.hash(password, 10);
 } catch (e) {
 return e;
 }
 };

 const createUser = async data => {
 try {
 data.passwordHash = await hashPassword(data.password);
 const createUser = await User.create(data);
 if (createUser) {
 return createUser.get();
 }
 new Error();
 } catch (e) {
 throw e;
 }
 };

 /!*createUser({
 firstName: 'Name',
 lastName: 'Surname',
 email: '1111@gmail.com',
 login: 'VasyaVasya',
 password: '12341234'
 })
 .then(console.log)
 .catch(console.error);*!/

 const getUserById = async id => {
 try {
 return (await User.findByPk(id)).get();
 } catch (e) {
 throw e;
 }
 };

 getUserById(101).then(console.log);*/

class Task extends Model {

}

Task.init({
						value: {
							type: DataTypes.STRING,
							allowNull: false,
							validate: {
								notEmpty: true,

							}
						},
						deadLine: {
							type: DataTypes.DATE,
							allowNull: false,
							validate: {
								isDate: true,
								isAfter: new Date(),
							}
						},
						isDone: {
							type: DataTypes.BOOLEAN,
							defaultValue: false,
							allowNull: false,
						}
					}, {
						sequelize,
						timestamps: true,
					});

Task.belongsTo(User);
User.hasMany(Task);

Task.sync();

