const listings = [
	{
		id: 1,
		institute: "IPSAS",
		title: "Génie Pétrolier",
		images: [{ fileName: "ipsaslogo" },{ fileName: "ipsasgp" }],
		description: "Les étudiants du Master Génie pétrolier ont une belle carrière à envisager en tant que cadre dans l'industrie pétrolière et peuvent accéder à différents postes tels que : Ingénieur gisement, ingénieur forage, ingénieur installations pétrolières, ingénieur exploitation, ingénieur recherche aval, ingénieur procédés.",
		duration:3,
		price:2900  
	},
	{
		id: 2,
		institute: "IPSAS",
		title: "Diplôme national d'architecte",
		images: [{ fileName: "ipsaslogo" },{ fileName: "ipsasdna" }],
		description: "La formation d'un architecte s'étale sur 5 ans plus 1 an de stage : - Un premier cycle d'une durée de 2 ans complété par un stage professionnel - Un deuxième cycle d'une durée de 3 ans d'études et une année de stage professionnel",
		duration:5,
		price:3000
	},
	{
		id: 3,
		institute: "IPSAS",
		title: "Génie civil",
		images: [{ fileName: "ipsaslogo" },{ fileName: "ipsasgcivil" }],
		description: "Ce cycle vous permettra de travailler au poste de : Chef de chantier, conducteur de travaux, gestionnaire d'approvisionnement, technicien d'études, ingénieur en bâtiment, maître d'œuvre, chef d'équipe, ingénieur génie civil, ingénieur génie climatique.",
		duration:3,
		price:2900
	},
	{
		id: 4,
		institute: "IPSAS",
		title: "Génie énergétique",
		images: [{ fileName: "ipsaslogo" },{ fileName: "ipsasgener" }],
		description: "Les retombées de ce nouveau cycle de formation d'ingénieurs intéressent plusieurs secteurs industriels et entreprises de production tels que : Les entreprises qui produisent l'énergie, soit sous la forme d'énergie électrique, soit sous la forme d'énergie issue d'une transformation de l'électricité, les entreprises qui utilisent et/ou mettent en œuvre une récupération d’énergie dans le cadre de leur processus industriel. En outre, les diplômés peuvent poursuivre des études post-graduées en Mastère et en Doctorat, en Tunisie ou à l'étranger.",
		duration:3,
		price:2900
	},
	{
		id: 5,
		institute: "IPSAS",
		title: "Génie industriel",
		images: [{ fileName: "ipsaslogo" },{ fileName: "ipsasgind" }],
		description: "Ce cycle vous permettra d'accéder aux secteurs d'activités suivants : Textile, construction mécanique, matériel de transport, agro-alimentaire, pharmaceutique, énergétique, ingénierie et étude technique-informatique.",
		duration:3,
		price:2900
	},
	{
		id: 6,
		institute: "IPSAS",
		title: "Master en Environnement, Sécurité et Qualité",
		images: [{ fileName: "ipsaslogo" },{ fileName: "ipsasenv" }],
		description: "Ce Master vous permettra d'accéder au poste de : Responsable qualité-hygiène-sécurité, Chef de projets industriels, Responsable organisation et méthode, Ingénieur procédés, Ingénieur consultant.",
		duration:2,
		price:3000
	},
	{
		id: 7,
		institute: "IPSAS",
		title: "Génie Electrotechnique",
		images: [{ fileName: "ipsaslogo" },{ fileName: "ipsasge" }],
		description: "Le parcours du Genie Electrotechnique et Electricité Industruelle permet d'offrir des perspectives de carrière dans plusieurs secteurs à fort potentiel de croissance.",
		duration:5,
		price:2400
	},
	{
		id: 8,
		institute: "ESEAC",
		title: "Licence en Droit",
		images: [{ fileName: "eseaclogo" }, { fileName: "eseac" }],
		description: "Cette Licence vous permettra de travailler au poste de : Avocat, Huissier notaire, Huissier de justice, Traducteur assermenté, Agent immobilier, etc.",
		duration:3,
		price:2300
	},
	{
		id: 9,
		institute: "IPSAS",
		title: "Génie Informatique",
		images: [{ fileName: "ipsaslogo" },{ fileName: "ipsasgi" }],
		description: "L'informatique fait aujourd'hui partie intégrante de la majorité des entreprises, à un tel point que le métier d'informaticien s'est diversifié.",
		duration:5,
		price:2400
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
