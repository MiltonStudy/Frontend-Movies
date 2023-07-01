const express = require('express');
const SeriesService = require('./../services/series.service.js');
const router = express.Router();

const seriesService = new SeriesService();

router.get('/', (req, res) => {
    seriesService.seriesJSON().then((seriesResult) => {
        res.render('series.list.ejs', { series: seriesResult });
    });
});

router.get('/create', (req, res) => {
    res.render("series.create.ejs");
});

router.get('/update/:id', (req, res) => {
    const { id } = req.params;
    seriesService.serieJSON(id).then((serieResult) => {
        res.render("series.update.ejs", { serie: serieResult[0] });
    });
});

router.get('/delete/:id', async (req, res) => {
    const { id } = req.params;
    seriesService.deleteSerieJSON(id);
    res.redirect('/series');
});

router.post('/', async (req, res) => {
    const dataForm = req.body;

    const serie = {
        "id": req.body.id,
        "serie": req.body.serie,
        "description": req.body.description,
        "fechaEstreno": req.body.fechaEstreno,
        "numeroCapitulos": parseInt(req.body.numeroCapitulos),
        "numeroTemporadas": parseInt(req.body.numeroTemporadas),
        "urlImagen": req.body.urlImagen
    }

    switch (dataForm._method) {
        case 'POST':
            await seriesService.createSerieJSON(serie);
            break;
        case 'PUT':
            await seriesService.updateSerieJSON(serie);
            break;
        default: res.json({ "message": "Método HTTP no identificado" });
    }

    res.redirect('/series');
});

module.exports = router;