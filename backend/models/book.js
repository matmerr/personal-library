
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  id: String,
  // rating: Number,
  // comment: String,
}, { timestamps: true });

export default mongoose.model('Book', BookSchema);