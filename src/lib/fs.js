const fs = require("fs");


const notesFile = "notes.json";
const readFileFromNotes = ()=>{
    try{
        const data = fs.readFileSync(notesFile) 
        const parseData =  JSON.parse(data.toString()) 
        return Array.isArray(parseData) ? parseData : []
    } catch{
        return []
    }     
};


// save notes in the file
const writeFileToNotes = (notes)=>{
    fs.writeFileSync(notesFile, JSON.stringify(notes));
}


module.exports = {readFileFromNotes, writeFileToNotes};