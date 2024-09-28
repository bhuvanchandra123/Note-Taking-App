const express = require("express");
const { addNote, getNote, getNotes, deleteNote, deleteNotes, editNote } = require("../controllers/notes");
const router = express.Router();

router.post("/add", addNote)
router.get("/get/:title", getNote)
router.delete("/delete/:title", deleteNote)
router.delete("/delete-all", deleteNotes)
router.get("/get-all", getNotes)
router.put("/edit/:titleName", editNote)


module.exports = router;