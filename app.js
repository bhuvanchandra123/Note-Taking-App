const fs = require("fs");
const express = require("express");
const { logger } = require("./src/middleware/logger");
const notes = require("./src/routes/notes")



const app = express();
app.use(express.json());

app.use(logger);


app.use("/notes", notes)


app.listen(5000).on('listening', ()=>{
     console.log('localhost:5000 is listening');
})
