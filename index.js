const fs = require('fs');

function testFileRead(){    
  const callBackFileRead = (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    // Split the data into rows
    const rows = data.trim().split('\n');

    // Create an array to hold the CSV data
    const csvData = [];

    // Loop through each row and split it into columns
    for (let i = 0; i < rows.length; i++) {
      // Remove dashes and extra spaces from the row
      const cleanedRow = rows[i].replace(/-/g, '').replace(/\s+/g, ' ').trim();

      // Skip empty or non-numeric rows
      if (!cleanedRow || !/^\d/.test(cleanedRow)) continue;

      const columns = cleanedRow.split(' ');

      csvData.push(columns);
    }

    // Convert the CSV data to a string
    const csvString = csvData.map(row => row.join(',')).join('\n');

    // Write the CSV string to a file
    fs.writeFile('output.csv', csvString, (err) => {
      if (err) throw err;
      console.log('CSV file saved!');
    });
  }

  fs.readFile('0912.TXT', 'utf-8', callBackFileRead);
}

testFileRead();
