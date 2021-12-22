const express = require("express");
const router = express.Router();

const store = require("../store/listings_univ");
const auth = require("../middleware/auth");
const listingMapper = require("../mappers/listings_univ");

router.get("/:id", auth, (req, res) => {
	const listing_univ = store.getListing_univ(parseInt(req.params.id));
	if (!listing_univ) return res.status(404).send();
	const resource = listingMapper(listing_univ);
	res.send(resource);
});

module.exports = router;
