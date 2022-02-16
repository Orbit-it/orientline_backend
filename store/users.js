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
		nationality:"République Démocratique du Congo",
		name: "Ngoie Hermès",
		email: "ngoiehermes8@gmail.com",
		password: "kaz@Her26",
	},
	{
		id: 5,
		nationality:"République Démocratique du Congo",
		name: "Grace mafuta",
		email: "Gmafuta3@gmail.com",
		password: "gm1234",
	},
	{
		id: 6,
		nationality:"République Démocratique du Congo",
		name: "Okumaka",
		email: "naomieokumaka@gmail.com",
		password: "nao20055",
	},
	{
		id: 7,
		nationality:"République Démocratique du Congo",
		name: "BOLEMBO",
		email: "christianbolembo31@gmail.com",
		password: "christianekwambengo31@",
	},
	{
		id: 8,
		nationality:"République Démocratique du Congo",
		name: "imani",
		email: "adonaiimani63@gmail.com",
		password: "adonaitina$",
	},
	{
		id: 9,
		nationality:"République Démocratique du Congo",
		name: "Chris",
		email: "Christianb98@gmail.com",
		password: "29403332",
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
