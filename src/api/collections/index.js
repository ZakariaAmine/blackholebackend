const express = require('express');
const router = express.Router();
const collections = require("./controller");

router.put('/:id', collections.update);
router.post('/create', collections.create);
router.get('/findOne', collections.findOne);
router.get('/findAll', collections.findAll);
router.delete('/', collections.delete);

module.exports = router;