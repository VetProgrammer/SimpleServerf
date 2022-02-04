const express = require('express'),
      cors = require("cors");

const API_PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());

app.get('/api', function(req, res){
    console.log("CALLED API");
    res.send({result: 'Hellooooo'})
})

app.get('/quit', function(req, res){
    console.log("CALLED QUIT");
    res.send({result: 'Good Bye'})
})

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
