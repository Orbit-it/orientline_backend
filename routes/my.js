const express = require("express");
const router = express.Router();

const listingsStore = require("../store/listings");
const auth = require("../middleware/auth");
const listingMapper = require("../mappers/listings");
const candidaturesStore = require("../store/candidatures")

router.get("/listings", auth, (req, res) => {
	const listings = listingsStore.filterListings(
		(listing) => listing.userId === req.user.userId
	);
	const resources = listings.map(listingMapper);
	res.send(resources);
});

router.get("/candidatures", auth, (req, res) => {
	const candidatures = candidaturesStore.filtercandidatures(
		(candidature) => candidature.id === req.user.id
	);
	const resources = candidatures;
	res.send(resources);
});


module.exports = router;
