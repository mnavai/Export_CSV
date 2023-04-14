const fs = require('fs');

function testFileRead() {
  const callBackFileRead = (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    // Split the data into rows
    const rows = data.trim().split('\n');

    // Create an array to hold the CSV data
    const csvData = [];

    // Loop through each row and extract the values of each column based on its width
    for (let i = 0; i < rows.length; i++) {
      const values = [
        rows[i].substring(0, 5).trim(),
        rows[i].substring(5, 10).trim(),
        rows[i].substring(10, 17).trim(),
        rows[i].substring(17, 21).trim(),
        rows[i].substring(21, 27).trim(),
        rows[i].substring(27, 31).trim(),
        rows[i].substring(31, 36).trim(),
        rows[i].substring(36, 41).trim(),
        rows[i].substring(41, 47).trim(),
        rows[i].substring(47, 52).trim(),
        rows[i].substring(52, 60).trim(),
        rows[i].substring(60, 68).trim(),
        rows[i].substring(68, 76).trim(),
        rows[i].substring(76).trim(),
      ];

      // Skip rows that do not begin with a number
      if (!/^\d/.test(values[0])) continue;

      csvData.push(values);
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
