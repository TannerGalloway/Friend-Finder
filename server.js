// create a server to host the website
const express = require("express");
const htmlroutes = require("./app/routing/htmlRoutes");
const apiroutes = require("./app/routing/apiRoutes");

//setting up express
const app = express();
const PORT = process.env.PORT || 8080;

//setting up data parseing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

htmlroutes(app);
apiroutes(app);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});