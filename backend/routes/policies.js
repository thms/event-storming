const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const policiesController = require('../controllers/policies');

router.get('/', policiesController.list);
router.get('/:id', policiesController.show);
router.post('/', policiesController.create);
router.put('/:id', policiesController.update);
router.delete('/:id', policiesController.delete);

module.exports = router;
