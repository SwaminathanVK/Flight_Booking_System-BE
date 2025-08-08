import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  uid: {
    type: String,
    required: true,
  },
  tickets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Flight",
    }, 
  ],
},{ timestamps: true });

export default mongoose.model("Ticket", ticketSchema);
