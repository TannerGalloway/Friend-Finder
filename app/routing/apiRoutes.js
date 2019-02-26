// api routes when a user interactes with an element on the webpage.
const friends = require("./../data/friends");
module.exports = function(api)
{
    api.get("/api/friends", function(req, res)
    {
        res.json(friends);
    });

    api.post("/api/friends", function(req, res)
    {   
        var newfriendscore = 0;
        var partnerdiff = 0;
        var  partnerName = "";
        var partnerImage = "";
        var scoresResults = 0;
        var difference = 0;
        if(friends.length < 1)
        {
            friends.push(req.body);
            res.json({first: true, message: "You are the first person to use the site."});
            return;
        }

        // go through the scores array
        req.body.scores.forEach(element => {newfriendscore += parseInt(element);});

        // go through the friends data array
        friends.forEach(function(elem, i) 
        {
            scoresResults = 0; // go into the scores array for each friend in the array.
            elem.scores.forEach(score => {scoresResults += parseInt(score);});
                difference = 0; // find the differnce in answers the user entered and other users infomation 
                difference = newfriendscore - scoresResults;
                if(difference < 0)
                {
                    difference = difference - (difference + difference);
                }

                // find the user that have the closes score to the current user score
                if(partnerdiff === 0 || difference < partnerdiff)
                {
                    partnerdiff = difference;
                    partnerName = friends[i].name;
                    partnerImage = friends[i].image;
                }
        });
            friends.push(req.body);
            res.json({first: false, name: partnerName, image: partnerImage});
    })
};