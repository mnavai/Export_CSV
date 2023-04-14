const fs = require('fs')
const { type } = require('os')


function testFileRead(){    
    const callBackFileRead = (err,data)=>{
        if(err){
            console.log(err)
            return

         }

    //split data into rows
    const rows = data.trim().split('\n')
    
    //create an array to hold the csv 
    const csvData = []

    //loop over each row and split data into columns
    for (let i = 12 ; i < rows.length; i++){
        const columns = rows[i].trim().split("\s+")
        csvData.push(columns)
    }

    //convert csv into string 
    const csvString = csvData.map(row => row.join(',')).join('\n');

    //write csv string to the file
    fs.writeFileSync('output.csv',csvString,(err) => {
        if(err) throw err;
        console.log("csv created")

    });
                //console.log(`The Shape of Data ${data} \n The data as below : `)
    }

     fs.readFile('0912.TXT', 'utf-8', callBackFileRead);
    
}

testFileRead()