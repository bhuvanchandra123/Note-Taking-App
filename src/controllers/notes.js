const { readFileFromNotes, writeFileToNotes } = require("../lib/fs");


const addNote = (req, res) => {
    const {title, content} = req.body;
    if(!title || !content){
        return res.status(404).json({error: "title and content required"})
    }
    const notes = readFileFromNotes();
    const newNotes = {title, content};
    notes.push(newNotes)
    writeFileToNotes(notes)
    res.status(201).json({message: "Note saved successfully"})
}


const deleteNote = (req, res) =>{
    const {title} = req.params;
    const notes = readFileFromNotes();
    // const note = notes.find(note => note.title === title)
    //  if(!note){
    //     return res.send({message: "note does not exist"})
    //  }

    // let note;
    // let newNote = []
    // for(let el of notes){
    //     if(el.title !== title){
    //       newNote.push(el)
    //     }else{
    //         note = el
    //     }
    // }

   const index = notes.findIndex(el => el.title === title )
   if(index === -1){
     return res.status(404).json({message: "note not found"})
   }
    const note = notes[index];
    notes.splice(index, 1)

    writeFileToNotes(notes)         
  
  return res.send({status: true, message: "note deleted successfully", data: note})
};



const deleteNotes = (req, res) =>{
    const notes = writeFileToNotes([])
    res.send({message: "notes deleted secussfully"})
};


const getNote = (req, res) => {
    const {title} = req.params;
    const notes = readFileFromNotes();
    const note = notes.find(note => note.title === title)
    if(!note){
        return res.status(404).json({error: "note not found"})
    }
    res.send(note)
};

const getNotes = (req, res) => {
    const notes = readFileFromNotes();
    res.send(notes)
};


const editNote = (req, res) => {
    const {titleName} = req.params;
   const {title, content} = req.body;
   if(!title || !content){
       return res.status(400).json({error: "title and content required"})
   }
   const notes = readFileFromNotes();
    let note;
    let newNotes = []
    for(let el of notes){
        if(el.title !== titleName){
          newNotes.push(el)
        }else{
          note = el
        }
    }
    if (!note) {
        return res.status(404).json({ error: "Note not found" });
    }
    note = {title, content};
    newNotes.push(note)
    

   writeFileToNotes(newNotes)
   res.status(201).json({message: "Note changed successfully"})
}




module.exports = {addNote, deleteNote, deleteNotes, getNote, getNotes, editNote}