const express = require("express");
const router = express.Router();
const Joi = require("joi");
const multer = require("multer");

const store = require("../store/listings");
const categoriesStore = require("../store/categories");
const validateWith = require("../middleware/validation");
const auth = require("../middleware/auth");
const imageResize = require("../middleware/imageResize");
const delay = require("../middleware/delay");
const listingMapper = require("../mappers/listings");
const config = require("config");

const upload = multer({
	dest: "uploads/",
	limits: { fieldSize: 25 * 1024 * 1024 },
});

const schema = {
	title: Joi.string().required(),
	description: Joi.string().allow(""),
	institute: Joi.string().required(),
	duration: Joi.string().required(),
	price: Joi.string().required(),
};

router.get("/", (req, res) => {
	const listings = store.getListings();
	const resources = listings.map(listingMapper);
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
		upload.array("images", config.get("maxImageCount")),
		validateWith(schema),
		//validateCategoryId,
		imageResize,
	],

	async (req, res) => {
		const listing = {
			title: req.body.title,
			description: req.body.description,
			institute: req.body.institute,
			duration: req.body.duration,
			price: req.body.price,
		};
		listing.images = req.images.map((fileName) => ({ fileName: fileName }));

		store.addListing(listing);

		res.status(201).send(listing);
	}
);

module.exports = router;
