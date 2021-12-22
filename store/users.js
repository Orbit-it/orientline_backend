const users = [
	{
		id: 1,
		nationality:{label:"Administrateur"}, 
		name: "Mansour DIOP",
		email: "mansour@orientline.admin",
		password: "@adminuser",
	},
	{
		id: 2,
		nationality:{label:"Administrateur"},
		name: "Nars Bongima",
		email: "nars@orientline.admin",
		password: "@adminuser",
	},
	{
		id: 3,
		nationality:{label:"Senegal"},
		name: "Serigne Mansour DIOP",
		email: "mansour@orientline.tn",
		password: "123456",
	},
	{
		id: 4,
		nationality:"Tunisienne",
		name: "User3",
		email: "user2@orientline.tn",
		password: "123456",
	},
	{
		id: 5,
		nationality:"Tunisienne",
		name: "User4",
		email: "user2@orientline.tn",
		password: "123456",
	},
	
];

const getUsers = () => users;

const getUserById = (id) => users.find((user) => user.id === id);

const getUserByEmail = (email) => users.find((user) => user.email === email);

const getUserByType = (nationality) => users.find((user)=> user.nationality === nationality);

const addUser = (user) => {
	user.id = users.length + 1;
	users.push(user);
};

module.exports = {
	getUsers,
	getUserByEmail,
	getUserById,
	getUserByType,
	addUser,
};
