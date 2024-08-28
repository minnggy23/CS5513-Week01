// Use this workspace to submit your homework for Week 1: Assignment 2: Git + GitHub Basics


//console.log('Hello, World!')

let myhttp = require('http');

let myserver = myhttp.createServer(

  function(myrequst,myresponse){
    console.log(myrequst.url);
  }
);

myserver.listen(80, '0.0.0.0');

