const asyncHandler = require('express-async-handler');

const User = require('../models/userModel');
const Note = require('../models/noteModel');
const Ticket = require('../models/ticketModel');

// @desc        Create ticket note
// @route       POST /api/tickets/:ticketID/notes
// @access    Private
const addNote = asyncHandler(async (req, res) => {
  // Get user using the ID in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }

  const ticket = await Ticket.findById(req.params.ticketID);

  if (ticket.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized!');
  }

  const note = await Note.create({
    ticket: req.params.ticketID,
    text: req.body.text,
    isStaff: false,
    user: req.user.id,
  });
  res.status(200).json(note);
}); // end of addNote()

// @desc        Get notes for a ticket
// @route       GET /api/tickets/:ticketID/notes
// @access    Private
const getNotes = asyncHandler(async (req, res) => {
  // Get user using the ID in the JWT
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }

  const ticket = await Ticket.findById(req.params.ticketID);

  if (ticket.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized!');
  }

  const notes = await Note.find({ ticket: req.params.ticketID });
  res.status(200).json(notes);
}); // end of getNotes()

module.exports = {
  addNote,
  getNotes,
};
