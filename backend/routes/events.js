const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const eventsController = require('../controllers/events');

router.get('/', eventsController.list);
router.get('/:id', eventsController.show);
router.post('/', eventsController.create);
router.put('/:id', eventsController.update);
router.delete('/:id', eventsController.delete);

module.exports = router;
