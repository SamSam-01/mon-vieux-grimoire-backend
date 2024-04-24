const express = require('express');
const auth = require('../middleware/auth');
const mutler = require('../middleware/multer-config');
const router = express.Router();

const booksCtrl = require('../controllers/books');

router.get('/', booksCtrl.getAllBooks);
router.post('/', auth, mutler, booksCtrl.createBook);
router.delete('/:id', auth, booksCtrl.deleteBook);
router.put('/:id', auth, mutler, booksCtrl.updateBook);
router.get('/:id', booksCtrl.getOneBook);

module.exports = router;