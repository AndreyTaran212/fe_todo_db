const { User } = require('./db/models');
const bcrypt = require('bcrypt');

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

/*createUser({
						 firstName: 'Name',
						 lastName: 'Surname',
						 email: '1111@gmail.com',
						 login: 'VasyaVasya',
						 password: '12341234'
					 })
	.then(console.log)
	.catch(console.error);*/


const getUserById = async data =>{
try {
	const searchUser = await User.findByPk(data);
	return searchUser.get()
}catch (e) {
	throw e;
}
};

getUserById(101).then(console.log);