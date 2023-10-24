const express = require('express');
const router = express.Router();

// colocar las rutas aquí
router.get('/', (req, res) => {
    res.render("home");
});

router.get('/about', (req, res) => {
    res.send("Esta es nuestra empresa. Nuestra empresa es lo mejor");
});

router.get('/team', (req, res) => {
    res.render("team");
});

router.get('/team/:name', (req, res) => {
    const { name } = req.params;
    res.render('team-member', { name });
});

router.get('/about-me', (req, res) => {
    res.send('sobre mi empresa');
});

router.get('/projects', (req, res) => {
    res.render('projects');
});

router.get('/projects/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Mostrando el proyecto: ${id}`);
})


module.exports = router;
