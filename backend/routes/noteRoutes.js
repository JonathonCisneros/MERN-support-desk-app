const express = require('express');
const router = express.Router({ mergeParams: true });
const { addNote, getNotes } = require('../controllers/noteController');

const { protect } = require('../middleware/authMiddleware');

router.route('/').post(protect, addNote).get(protect, getNotes);

module.exports = router;
