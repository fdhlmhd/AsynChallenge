const fs = require("fs");

// fs.readdir('/', (err,result) => {
//     if (err) {
//         throw new Error(err.message)
//     }
//     console.log(result);

// })

const readDir = new Promise((resolve, reject) => {
  fs.readdir("/", (err, result) => {
    if (err) reject(err);
    resolve(result);
  });
});

readDir
.then(result => console.log(result))
.catch(err => console.log(err));
