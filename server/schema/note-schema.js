import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment';


const noteSchema = mongoose.Schema({
     title: String,
     eventname: String,
     description: String,
     image: String
})

autoIncrement.initialize(mongoose.connection);
noteSchema.plugin(autoIncrement.plugin, "user");

const note = mongoose.model("note", noteSchema);

export default note;