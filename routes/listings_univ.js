const express = require("express");
const router = express.Router();
const Joi = require("joi");
const multer = require("multer");

const store = require("../store/listings_univ");
const categoriesStore = require("../store/categories");
const validateWith = require("../middleware/validation");
const auth = require("../middleware/auth");
const imageResize = require("../middleware/imageResize");
const delay = require("../middleware/delay");
const listingMapper = require("../mappers/listings_univ");
const config = require("config");

const upload = multer({
	dest: "uploads/",
	limits: { fieldSize: 25 * 1024 * 1024 },
});

const schema = {
	pays: Joi.string().required(),
	institute_name: Joi.string().required(),
	about: Joi.string().required(),
};

router.get("/", (req, res) => {
	const listings_univ = store.getlistings_univ();
	const resources = listings_univ.map(listingMapper);
	res.send(resources);
});

router.post(
	"/",
	[
		// Order of these middleware matters.
		// "upload" should come before other "validate" because we have to handle
		// multi-part form data. Once the upload middleware from multer applied,
		// request.body will be populated and we can validate it. This means
		// if the request is invalid, we'll end up with one or more image files
		// stored in the uploads folder. We'll need to clean up this folder
		// using a separate process.
		// auth,
        upload.array("profile", config.get("maxImageCount")),
		upload.array("images", config.get("maxImageCount")),
		validateWith(schema),
		//validateCategoryId,
		imageResize,
	],

	async (req, res) => {
		const listing_univ = {
			institute_name: req.body.institute_name,
		};

		listing_univ.images = req.images.map((fileName) => ({ fileName: fileName }));
        listing_univ.profile = req.profile.map((fileName) => ({ fileName: fileName }));
		store.addListing_univ(listing_univ);

		res.status(201).send(listing_univ);
	}
);

module.exports = router;
