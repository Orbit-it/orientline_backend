const listings = [
	{
		id: 1,
		institute: "IPSAS",
		title: "Génie Electrotechnique",
		images: [{ fileName: "ipsasge" }],
		description: "Le parcours du Genie Electrotechnique et Electricité Industruelle permet d'offrir des perspectives de carrière dans plusieurs secteurs à fort potentiel de croissance.",
		duration:5,
		price:4500
	},
	{
		id: 2,
		institute: "ESEAC",
		title: "Licence en Droit",
		images: [{ fileName: "eseac" }],
		description: "Cette Licence vous permettra de travailler au poste de : Avocat, Huissier notaire, Huissier de justice, Traducteur assermenté, Agent immobilier, etc.",
		duration:3,
		price:3500
	},
	{
		id: 3,
		institute: "IPSAS",
		title: "Génie Informatique",
		images: [{ fileName: "ipsasgi" }],
		description: "L'informatique fait aujourd'hui partie intégrante de la majorité des entreprises, à un tel point que le métier d'informaticien s'est diversifié.",
		duration:5,
		price:4500
	},
];

const addListing = (listing) => {
	listing.id = listings.length + 1;
	listings.unshift(listing);
	
};

const getListings = () => listings;

const getListing = (id) => listings.find((listing) => listing.id === id);

const filterListings = (predicate) => listings.filter(predicate);

module.exports = {
	addListing,
	getListings,
	getListing,
	filterListings,
};
