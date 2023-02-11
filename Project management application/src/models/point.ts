import mongoose from 'mongoose';

const { Schema } = mongoose;
const pointScheme = new Schema({
  title: {
    type: String,
    required: true,
  },
  taskId: {
    type: String,
    required: true,
  },
  boardId: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
}, { versionKey: false });

export default mongoose.model('Point', pointScheme);