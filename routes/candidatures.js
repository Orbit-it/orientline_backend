const express = require("express");
const router = express.Router();
const Joi = require("joi");
const multer = require("multer");

const store = require("../store/candidatures");
const categoriesStore = require("../store/categories");
const validateWith = require("../middleware/validation");
const auth = require("../middleware/auth");
const imageResize = require("../middleware/imageResize");
const delay = require("../middleware/delay");
const listingMapper = require("../mappers/listings");
const config = require("config");

const schema = {
	title: Joi.string(),
	institute: Joi.string(),
	user:Joi.string(),
	email:Joi.string(),
	nationality:Joi.string()
}

router.get("/", (req, res) => {
	const candidatures = store.getcandidatures();
	res.send(candidatures);
});

router.post(
	"/",
	[
		validateWith(schema),
	],

	async (req, res) => {
		const candidature = {
			title: req.body.title,
			institute: req.body.institute,
			user:req.body.user,
			email:req.body.email,
			nationality:req.body.nationality,
		};

		store.addcandidature(candidature);

		res.status(201).send(candidature);
	}
);

module.exports = router;
