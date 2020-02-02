const fs = require('fs')
    

const file = fs.readFileSync('./lib.js',{encoding:'utf8'})
.toString()

fs.writeFileSync('./lib.js','var me = "me"')

console.log(file)