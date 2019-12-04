const fs = require ('fs');
const path = require('path');
let file = process.argv[2];

function validPath(){
  return new Promise(function(resolve, reject){
    fs.lstat(file, (err, stats) => {
      if(err){
        reject(new Error("Archivo o carpeta inexistente"))
      }else if(mdFile(file)){
        return readFile(file);
      }else if(stats.isDirectory() === true){
        fs.readdir(file, 'utf8',(err,file)=>{
          file.forEach(element => {
            if(mdFile(element)){
              readFile(file+'/'+element);
            }            
          });
      })
    }
    resolve(stats);
  })
  })
}


const mdFile = (file =>{
  if (file.slice(-3) == '.md'){
    return true;
  }else {
    return false;
  }
})

function readFile(file){
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) throw err
    console.log(data)
  })
  
}

readFile(file);
validPath(file);