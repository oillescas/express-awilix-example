const mongoose = require("mongoose");
const { Schema } = mongoose;

const NoteSchema = new Schema(
  {
    title: { type: String, require: true },
    description: { type: String, require: true },
    id_read: { type: Boolean, default: false }
  },
  {
    timestamps: true
  }
);

NoteSchema.pre("save", async (next) => {
  if (this.isModified("title") || this.isModified("description")) {
    this.is_read = false;
  }
  next();
});

module.exports = mongoose.model("Note", NoteSchema);
