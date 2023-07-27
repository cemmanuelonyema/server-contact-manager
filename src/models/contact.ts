import { InferSchemaType, model, Schema } from "mongoose";

const contactSchema = new Schema(
  {
    //create a relationship with a particular user
    userId: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },

    //schema
    name: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    email: {
      type: String,
    },
    label: {
      type: String,
    },
    twitter: {
      type: String,
    },
    instagram: {
      type: String,
    },
    linkedIn: {
      type: String,
    },
  },
  { timestamps: true }
);

type Note = InferSchemaType<typeof contactSchema>;

export default model<Note>("contact", contactSchema);
