const express = require("express");
const router = express.Router();

const store = require("../store/candidatures");
const auth = require("../middleware/auth");

router.get("/:id", auth, (req, res) => {
	const candidature = store.getcandidature(parseInt(req.params.id));
	if (!candidature) return res.status(404).send();
	res.send(candidature);
});

module.exports = router;
