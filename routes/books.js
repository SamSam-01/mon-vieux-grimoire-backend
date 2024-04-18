const express = require('express');
const router = express.Router();

const booksCtrl = require('../controllers/books');

router.post('/', booksCtrl.createBook);
router.delete('/:id', booksCtrl.deleteBook);
router.put('/:id', booksCtrl.updateBook);
router.get('/:id', booksCtrl.getOneBook);
router.use('/', booksCtrl.getAllBooks);

module.exports = router;