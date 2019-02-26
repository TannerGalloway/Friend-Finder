// routes within the webpage to take
const path = require("path");
module.exports = function(server)
{
    server.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    server.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    }); 
}
  