
const candidatures = [
	{
		id: 1,
		title: "Génie Electrotechnique",
		institute: "IPSAS",
		user:"Default User",
		email:"Defaul mail",
		nationality:"Default nationality",
	},
];

const addcandidature = (candidature) => {
	candidature.id = candidatures.length + 1;

	candidatures.unshift(candidature);
	
};

const getcandidatures = () => candidatures;

const getcandidature = (id) => candidatures.find((candidature) => candidature.id === id);

const filtercandidatures = (predicate) => candidatures.filter(predicate);

module.exports = {
	addcandidature,
	getcandidatures,
	getcandidature,
	filtercandidatures,
};
