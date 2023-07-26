//dependencies
import { RequestHandler } from "express";
import createHttpError from "http-errors";
import mongoose from "mongoose";
//external files
import ContactModel from "../models/contact";

export const getContacts: RequestHandler = async (reg, res, next) => {
  try {
    const contacts = await ContactModel.find().exec();
    res.status(200).json(contacts);
  } catch (err) {
    next(err);
  }
};

interface ICreateContact {
  name?: string;
  email?: string;
  phone?: string;
  label?: string;
  instagram?: string;
  linkedIn?: string;
  twitter?: string;
}

export const createContact: RequestHandler<
  unknown,
  unknown,
  ICreateContact,
  unknown
> = async (req, res, next) => {
  const { name, email, phone, label, instagram, twitter, linkedIn } = req.body;

  try {
    if (!name) {
      throw createHttpError(400, "Contact's name is required");
    }
    const newContact = await ContactModel.create({
      name: name ? name : "",
      email: email ? email : "",
      phone: phone ? phone : "",
      label: label ? label : "",
      instagram: instagram ? instagram : "",
      twitter: twitter ? twitter : "",
      linkedIn: linkedIn ? linkedIn : "",
    });
    console.log(newContact);
    res.status(201).json(newContact);
  } catch (err) {
    next(err);
  }
};

interface IUpdateContactParams {
  contactId: string;
}
interface IUpdateContact {
  name?: string;
  email?: string;
  phone?: string;
  label?: string;
  instagram?: string;
  linkedIn?: string;
  twitter?: string;
}
export const updateContact: RequestHandler<
  IUpdateContactParams,
  unknown,
  IUpdateContact,
  unknown
> = async (req, res, next) => {
  const { contactId } = req.params;
  const { name, email, phone, label, instagram, twitter, linkedIn } = req.body;

  const updatedContact = new ContactModel({
    _id: contactId,
    name: name ? name : "",
    email: email ? email : "",
    phone: phone ? phone : "",
    label: label ? label : "",
    instagram: instagram ? instagram : "",
    twitter: twitter ? twitter : "",
    linkedIn: linkedIn ? linkedIn : "",
  });

  try {
    if (!mongoose.isValidObjectId(contactId)) {
      throw createHttpError(400, "Invalid contact id");
    }

    if (!name) {
      throw createHttpError(400, "Can't update a contact without a name");
    }

    const contact = await ContactModel.updateOne(
      { _id: contactId },
      updatedContact
    );
    res.status(204).json({ msg: "Contact updated successfully" });
  } catch (err) {
    next(err);
  }
};

export const deleteContact: RequestHandler = async (req, res, next) => {
  const { contactId } = req.params;

  try {
    if (!mongoose.isValidObjectId(contactId)) {
      throw createHttpError(400, "Invalid contact id");
    }
    await ContactModel.deleteOne({ _id: contactId });
    res.status(204).json({ msg: "Contact deleted successfully" });
  } catch (err) {
    next(err);
  }
};
