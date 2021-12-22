const listings_univ = [
	{
		id: 1,
        pays:"Tunisie",
        label:"IPSAS",
		institute_name: "Institut Polytechnique Privé des Sciences Avancées de Sfax (IPSAS)",
        about: "IPSAS est une université privée des sciences avancées etc...",
		profile_institute: [{fileName: "ipsas"}],
		images: [{ fileName: "ipsasge" }],
	},
	{
		id: 2,
        pays:"Tunisie",
        label:"ESEAC",
		institute_name: "Ecole Supérieure des Etudes Administratives et Commerciales (ESEAC)",
        about: "ESEAC est une privée installé en Tunisie depuis ...... il donne un enseignement de qualité",
		profile_institute: [{fileName: "eseac"}],
		images: [{ fileName: "eseac" }],
	},
];

const addListing_univ = (listing_univ) => {
	listing_univ.id = listings_univ.length + 1;
	listings_univ.push(listing_univ);
	
};


const getListing_univ = (id) => listings_univ.find((listing_univ) => listing_univ.id === id);
const getListings_univ = (label) => listings_univ.find((listing_univ) => listing_univ.label === label);

const filterListings_univ = (predicate) => listings_univ.filter(predicate);

module.exports = {
	addListing_univ,
	getListing_univ,
    getListings_univ,
	filterListings_univ,
};
