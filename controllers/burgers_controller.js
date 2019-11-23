var express = require("express");

var burger = require("../models/burgers.js");

var router = express.Router();

router.get("/", function(req, res) {
	burger.all(function(data) {
		var hbsObject = {burgers: data};

		res.render("index", hbsObject);
	});
});

router.post("/", function(req, res) {
	burger.create(["burger_name"], [req.body.name], function(data) {
		res.redirect("/");
	});
});

router.put("/:id", function(req, res) {
	var condition = "burger_name = '" + req.params.id.trim() + "'";


	burger.update({ devoured: 1 }, condition, function() {
		res.sendStatus(200).end();
	});
});




module.exports = router;