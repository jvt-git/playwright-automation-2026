
const path = require("path");
const fs = require("fs");
const fileSys = require('fs')
const { parse } = require("csv-parse/sync");

async function writeDataToFile(filename, data, encoding = "utf8") {
    try {
        const filepath = path.join(process.cwd(), "testdata", filename);
        await fs.promises.writeFile(filepath, data, encoding);
        console.log(`File with name ${filename} written successfully`);
    } catch (error) {
        console.log(`Error writing the file ${filename}`, error);
        throw error;
    }
}

async function readDataFromFile(filename, encoding = "utf8") {
    try {
        const filepath = path.join(process.cwd(), "testdata", filename);
        const data = await fs.promises.readFile(filepath, encoding);
        console.log(`Successfully read data from file ${filename}`);
        return data;
    } catch (error) {
        console.log(`Error reading the file ${filename}`, error);
        throw error;
    }
}
// arba async function... fs.promises.readFile(filepath, encoding) arba function .....fileSys.readFileSync(filepath, encoding);
function readCSV(filename, encoding = 'utf8') {
    try {
        const filepath = path.join(process.cwd(), 'testdata', filename);
        console.log(filepath);
        const csvFileContent = fileSys.readFileSync(filepath, encoding);
        return parse(csvFileContent, {
            columns: true,
            skip_empty_lines: true
        });
    }



    catch (error) {
        console.log(`Error reading CSV file ${filename}`, error);
        return [];
    }
}

// function readJSON(filename, encoding = 'utf8') {
//     try {
//         const filepath = path.join(process.cwd(), 'testdata', filename);
//         console.log(filepath);
//         console.log('File path:', filepath);
//         console.log('File exists:', fileSys.existsSync(filepath));
//         const jsonFileContent = fileSys.readFileSync(filepath, encoding);

//         return JSON.parse(jsonFileContent);

//     } catch (error) {
//         console.error(`Error reading JSON file: ${error.message}`);
//         throw error;
//     }
// }

function readJSON(filename, encoding = 'utf8') {
    try {
        const filepath = path.resolve(
            process.cwd(),
            'testdata',
            filename
        );

        console.log('Current directory:', process.cwd());
        console.log('Full file path:', filepath);
        console.log('File exists:', fileSys.existsSync(filepath));

        const jsonFileContent = fileSys.readFileSync(filepath, encoding);

        return JSON.parse(jsonFileContent);

    } catch (error) {
        console.error(`Error reading JSON: ${error.message}`);
        throw error;
    }
}



module.exports = {
    readCSV,
    readDataFromFile,
    writeDataToFile,
    readJSON,
};
