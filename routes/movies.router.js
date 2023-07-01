const express = require('express');
const MoviesService = require('./../services/movies.service.js');
const router = express.Router();

const moviesService = new MoviesService();

router.get('/', (req, res) => {
    moviesService.moviesJSON().then((movieResult) => {
        res.render('movies.list.ejs', { movies: movieResult });
    });
});

router.get('/create', (req, res) => {
    res.render("movies.create.ejs");
});
 
router.get('/update/:id', async (req, res) => {
    const { id } = req.params;
    moviesService.movieJSON(id).then((movieResult) => {
        res.render("movies.update.ejs", { movie: movieResult[0] })
    });
});

router.get('/delete/:id', async (req, res) => {
    const { id } = req.params;
    moviesService.deleteMovieJSON(id);
    res.redirect('/movies');
});

router.post('/', async (req, res) => {
    const dataForm = req.body;

    const movie = {
        "id": req.body.id,
        "movie": req.body.movie,
        "description": req.body.description,
        "director": req.body.director,
        "urlImagen": req.body.url_imagen,
        "yearOfPublication": req.body.year_of_publication
    }

    switch (dataForm._method) {
        case 'POST':
            await moviesService.createMovieJSON(movie);
            break;
        case 'PUT':
            await moviesService.updateMovieJSON(movie);
            break;
        default: res.json({ "message": "Método HTTP no identificado" });
    }

    res.redirect('/movies');
});

module.exports = router;