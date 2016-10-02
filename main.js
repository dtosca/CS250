"use strict"
/*

//Generates text file of the contents of the pdf
let fs = require('fs'),//using file system module
        PDFParser = require("pdf2json");//loading in pdf2json package

    let pdfParser = new PDFParser(this,1);

    pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
    pdfParser.on("pdfParser_dataReady", pdfData => {
        fs.writeFile("/home/dtosca/Desktop/CS250/doc1.content.txt", pdfParser.getRawTextContent());//write file of contents
    });

pdfParser.loadPDF("/home/dtosca/Desktop/CS250/doc1.pdf");

*/

//Reading in txt file that was generated

let fs = require('fs');//delete when using top
fs.readFile('/home/dtosca/Desktop/CS250/doc1.content.txt', function(err, data) {
    if (err) {
	return console.error(err);
    }
    var textContent = data.toString();
    textToDict(textContent)
});

//make JSON with string contents
function textToJSON (text) {
    console.log(text);
    
}
