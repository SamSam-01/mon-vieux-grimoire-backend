const express = require('express');
const auth = require('../middleware/auth');
const mutler = require('../middleware/multer-config');
const router = express.Router();

const booksCtrl = require('../controllers/books');

router.get('/', booksCtrl.getAllBooks);
router.get('/bestrating', booksCtrl.getBestRating);
router.get('/:id', booksCtrl.getOneBook);
router.post('/', auth, mutler, booksCtrl.createBook);
router.post('/:id/rating', auth, mutler, booksCtrl.rateBook);
router.delete('/:id', auth, booksCtrl.deleteBook);
router.put('/:id', auth, mutler, booksCtrl.updateBook);

module.exports = router;