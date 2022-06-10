const fs = require('fs');
const path = require('path');

fs.copyFile(path.join(__dirname + '/package.json'), path.join(__dirname + '/build/package.json'), (err, data) => {
    if(err) throw new Error(err);
    console.log("package.json - Copied");
})

fs.copyFile(path.join(__dirname + '/ecosystem.config.js'), path.join(__dirname + '/build/ecosystem.config.js'), (err, data) => {
    if(err) throw new Error(err);
    console.log("ecosystem.config.js - Copied");
})

fs.copyFile(path.join(__dirname + '/deploy.sh'), path.join(__dirname + '/build/deploy.sh'), (err, data) => {
    if(err) throw new Error(err);
    console.log("deploy.sh - Copied");
})
