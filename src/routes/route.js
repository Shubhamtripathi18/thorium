
const express = require('express');

const router = express.Router();

let playersArr=[]

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});
router.post('/functionUp',function(req,res){
    res.send("this is new route")     
})


// 1. problem assign.
let players=[];
router.post('/players', function(req, res) {
    let player = req.body;
    let playerName = player.name;
    for(let i = 0;i < players.length; i++){
        if(players[i].name == playerName){
             res.send ("player already exists");
        }
    }
    players.push(player);
    console.log("Player array",players);
    res.send(players);
    
});

//2. problem assign

router.post('/players/:playerName/bookings/:bookingId', function(req, res) {
    let name = req.params.playerName
    let isPlayerPresent = false

    for (let i = 0; i < players.length; i++) {
        if (players[i].name == name) {
            isPlayerPresent = true
        }
    }
    if (!isPlayerPresent) {
        return res.send('Player not present')
    }

    let booking = req.body
    let bookingId = req.params.bookingId
    for (let i = 0; i < players.length; i++) {
        if (players[i].name == name) {
            for (let j = 0; j < players[i].bookings.length; j++) {
                if (players[i].bookings[j].bookingNumber == bookingId) {
                    return res.send('Booking with this id is already present')
                }
            }
            players[i].bookings.push(booking)
        }
    }
    res.send(players)
}),


module.exports = router;