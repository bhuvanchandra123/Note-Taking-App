# Assignment: Build a Simple Note-Taking App (Without Database)

## Objective:

Develop a simple **Note-Taking App** using Express.js. The app should allow users to:

1. Create and save notes (via a POST request).
2. Retrieve all saved notes (via a GET request).
3. Save the notes in the local file system as a JSON file, and retrieve them from the file.

## Features to Implement:

### 1. Add Note (POST /notes)

- Create a POST route that accepts a new note.
- Each note should have:
  - `title` (string, required)
  - `content` (string, required)
- The route should validate the incoming data and check if `title` and `content` are provided and non-empty strings.
- Save the note into a file (e.g., `notes.json`). Append new notes to the existing ones in the file.
- Return a success message when the note is saved successfully.

### 2. Get Notes (GET /notes)

- Create a GET route that reads the `notes.json` file and returns all saved notes.
- If there are no notes, return an empty array.

### 3. Delete Notes (POST /notes/delete)

- Create a POST route that accepts a `title` and deletes the note with that title from the file.
- If the note is found and deleted, return a success message.
- If the note is not found, return an error message.

### 4. Middleware Requirements:

- **Request Logger Middleware**: Create middleware that logs the HTTP method, URL, and timestamp whenever a request is made.
- **Validation Middleware** (for POST requests):
  - Ensure `title` and `content` are strings and not empty.
- **Error-Handling Middleware**: Catch any unhandled errors and return a generic error message.

### 5. Filesystem Operations:

- Use `fs` module to handle reading and writing to the `notes.json` file.
- On adding a note, read the existing notes from the file, append the new note, and write back to the file.
- For deleting a note, read the file, filter out the note with the matching title, and write back the updated list to the file.

## Sample Routes & Behavior
 
1. **POST /notes**

   - Body: `{ "title": "Meeting notes", "content": "Discuss the new project" }`
   - Saves the note to `notes.json` and responds: `{"message": "Note saved successfully"}` (status 201)

2. **GET /notes**

   - Reads from `notes.json` and returns all saved notes.
   - Response: `[{ "title": "Meeting notes", "content": "Discuss the new project" }]`

3. **POST /notes/delete**   

   - Body: `{ "title": "Meeting notes" }`
   - Deletes the note from `notes.json` and responds: `{"message": "Note deleted successfully"}` (status 200)

4. **Error Cases**:
   - POST `/notes` without `title` or `content`: `{"error": "Title and content are required"}` (status 400)
   - POST `/notes/delete` with non-existing title: `{"error": "Note not found"}` (status 404)

## Filesystem Operations Details:

- **Adding a Note**:

  - Use `fs.readFileSync` to read `notes.json`.
  - Parse the file content into an array, push the new note to the array, and use `fs.writeFileSync` to save the updated array back to `notes.json`.

- **Deleting a Note**:
  - Use `fs.readFileSync` to read `notes.json`.
  - Filter the notes array to exclude the note with the matching title, then use `fs.writeFileSync` to save the updated array.

## Bonus Challenge (Optional):

- Add a feature to **edit** an existing note using a POST route (`/notes/edit`) by providing the title and updated content.

**Submission:**

- Add this to new git repository and share GitHub repository link.