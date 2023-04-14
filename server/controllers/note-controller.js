import { response } from 'express';
import Note from '../schema/note-schema.js'


export const addNote = async (request, response) => {
     const note = request.body;
     const newNote = new Note(note);

     try {
          await newNote.save();
          response.status(201).json(newNote);
          console.log("data saved successfully");
     } catch(error) {
          response.status(409).json({ message: error.message });
     }
}

export const getNotes = async (request, response) => {
     try {
          const notes = await Note.find({});
          response.status(200).json(notes);
     } catch(error) {
          response.status(404).json({ message: error.message });
     }
}

export const getNote = async (request, response) => {
     try {
          //const note = await Note.find({ _id: request.params.id}); or
          const note = await Note.findById(request.params.id);
          response.status(200).json(note);
     } catch(error) {
          response.status(404).json({ message: error.message });
     }
}

export const editNote = async (request, response) => {
     const note = request.body;
     const editedNote = new Note(note);

     try {
          await Note.updateOne({_id: request.params.id}, editedNote);
          response.status(201).json(editedNote);
     } catch(error) {
          response.status(409).json({ message: error.message });
     } 
}

export const deleteNote = async (request, response) => {
     try {
          await Note.deleteOne({ _id: request.params.id});
          response.status(200).json({ message: "note deleted successfully" });
     } catch(error) {
          response.status(409).json({ message: error.message });
     }
}