import express from 'express';
import { addNote, getNotes, getNote, editNote, deleteNote } from '../controllers/note-controller.js';

const Routes = express.Router();

Routes.post('/add', addNote);
Routes.get("/all", getNotes);
Routes.get("/:id", getNote);
Routes.put("/:id", editNote);
Routes.delete("/:id", deleteNote);

export default Routes;