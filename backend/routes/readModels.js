const express = require('express');
const router = express.Router();

const controller = require('../controllers/readModels');

router.get('/', controller.list);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;
