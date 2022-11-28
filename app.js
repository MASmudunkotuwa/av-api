const express = require('express');
const appp = express(); //create an express application

appp.listen(3500,()=>{
    console.log(' Listening on port 3500');
});
//callback function here is call a route handler
appp.get('/',(req,res)=>{

    res.send('You have successfully connected to our API. Welcome ');

});
//get All
appp.get('/api/avengers',(req,res)=>{

    let avengers =['Iron Man','Captain America', 'Thor','Black Widow'];
   // res.send('All avengers details are listed here ');
    res.send(avengers);

});

appp.get('/api/av',(req,res)=>{

    res.send('You have successfully');

});

appp.get('/api/avengers/:avID',(req,res)=>{

let optpara =req.query.filterBy; //access optional parameter
    res.send ('You have requested for the avengerID ' + req.params.avID + 'and the   optional parameters passsed for filterBy is '+ optpara);
});
//eg: localhost:3500/api/avengers/3?filterBy="avengerType"
//how to access the value that is passed into the filter by optional parameter   