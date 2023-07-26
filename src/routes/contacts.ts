//dependencies
import express from "express";
import {
  getContacts,
  createContact,
  updateContact,
  deleteContact,
} from "../controllers/contacts";

const router = express.Router();

/************************************************** */
// @http function:              Getting data from the server.
// @route                           Get /api/v1/contacts
// @desc                            Get all of a user's contacts
// @access                         Private

router.get("/", getContacts);

/*************************************************** */
// @http function:              Sending data to the server.
// @route                           post /api/v1/contacts
// @desc                            Add a contact
// @access                         Private

router.post("/", createContact);

/*************************************************** */
// @http function:              Updating data to the server.
// @route                           Put /api/v1/contacts
// @desc                            Update a user's contact
// @access                         Private

router.put("/:contactId", updateContact);

/*************************************************** */
// @http function:              Deleting data to the server.
// @route                           Delete /api/v1/contacts
// @desc                            Delete a user
// @access                         Private

router.delete("/:contactId", deleteContact);

export default router;
