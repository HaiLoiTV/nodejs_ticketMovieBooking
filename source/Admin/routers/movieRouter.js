const express = require('express');
const router = express.Router();
const movieController = require('../../Admin/controllers/movieController');

router.get('/', movieController.getAllMovies);
router.post('/', movieController.addMovie);
router.get('/delete/:id', movieController.deleteMovie);
router.get('/edit/:id', movieController.getAllMoviesEdit);

// //đường dẫn  trang edit.ejs để cập nhật phim
// router.get('/edit/:id', (req, res) => {
//     res.render('edit', { movie: req.body });
// });

router.post('/edit', movieController.updateMovie);

module.exports = router;