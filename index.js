const express = require("express");
const categories = require("./routes/categories");
const listings = require("./routes/listings");
const candidatures = require("./routes/candidatures");
const listing = require("./routes/listing");
const listings_univ = require("./routes/listings_univ");
const listing_univ = require("./routes/listing_univ");
const users = require("./routes/users");
const user = require("./routes/user");
const auth = require("./routes/auth");
const my = require("./routes/my");
const messages = require("./routes/messages");
const expoPushTokens = require("./routes/expoPushTokens");
const helmet = require("helmet");
const compression = require("compression");
const config = require("config");
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(helmet());
app.use(compression());

app.use("/api/categories", categories);
app.use("/api/listing", listing);
app.use("/api/listings", listings);
app.use("/api/candidatures", candidatures);
app.use("/api/listing_univ", listing_univ);
app.use("/api/listings_univ", listings_univ);
app.use("/api/user", user);
app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/my", my);
app.use("/api/expoPushTokens", expoPushTokens);
app.use("/api/messages", messages);

const port = process.env.PORT || config.get("port");
app.listen(port, function () {
	console.log(`Server started on port ${port}...`);
});
