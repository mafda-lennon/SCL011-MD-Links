const fs = require ('fs');
const path = require('path');
let file = process.argv[2];

function readFile(file){
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) throw err
    console.log(data)
  })
  
}

readFile(file);