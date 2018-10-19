const express = require('express');
const router = express.Router();

const actorsController = require('../controllers/actors');

router.get('/', actorsController.list);
router.get('/:id', actorsController.show);
router.post('/', actorsController.create);
router.put('/:id', actorsController.update);
router.delete('/:id', actorsController.delete);

module.exports = router;
