
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// create new instance of mongoose.schema
// schema takes an object that is the user

const UserSchema = new Schema({
  name: String,
}, { timestamps: true});

export default mongoose.model('User', UserSchema);