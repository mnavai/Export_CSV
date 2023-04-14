const fs = require('fs')
const { type } = require('os')


function testFileRead(){    
    fs.readFile('0912.TXT','utf8',(err,data)=>{
                if(err){
                    console.log(err)
                    return
                }
                console.log(`The Shape of Data ${typeof data} \n The data as below : `)
        });
    
}

testFileRead()