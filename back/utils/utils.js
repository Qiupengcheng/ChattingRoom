const fs = require('fs');

function asyncReadFile(filePath){
  return new Promise(function(resolve, reject) {
    fs.readFile(filePath, (err, data) => {
      if(err){
        reject(err)
      }else{
        resolve(data)
      }
    })
  });
}

module.exports = {
  asyncReadFile
}
