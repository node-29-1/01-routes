const express = require('express');
const router = express.Router();

const projects = [
    {
        "id": 1,
        "name": "Pokedex",
        "image": "https://res.cloudinary.com/ddflkwfsr/image/upload/v1682968805/102695607-39642200-4207-11eb-951b-390a856f9be4_u1qluv.png"
    },
    {
        "id": 2,
        "name": "Rick and morty project",
        "image": "https://res.cloudinary.com/ddflkwfsr/image/upload/v1682968950/cufjzu9x8i7iuxmttzyf_jrnqna.png"
    },
    {
        "id": 3,
        "name": "Ecommerce",
        "image": "https://res.cloudinary.com/ddflkwfsr/image/upload/v1682969085/1640011361-react-ecommerce-tutorial_aumyp3.png"
    },
    {
        "id": 4,
        "name": "Users crud",
        "image": "https://res.cloudinary.com/ddflkwfsr/image/upload/v1682969207/fx2fni0aqudeaubuach9_bjgtbg.png"
    }
]

// colocar las rutas aquí
router.get('/', (req, res) => {
    res.render("home");
});

router.get('/about', (req, res) => {
    res.send("Esta es nuestra empresa. Nuestra empresa es lo mejor");
});

router.get('/team', (req, res) => {

    const teamMembers = [
        {
            id: 1,
            name: "Alexander"
        },
        {
            id: 2,
            name: "Bruno"
        },
        {
            id: 3,
            name: "Samuel",
        },
        {
            id: 4,
            name: "Victor",
        }
    ]

    res.render("team", { teamMembers });
});

router.get('/team/:name', (req, res) => {
    const { name } = req.params;
    res.render('team-member', { name });
});

router.get('/about-me', (req, res) => {
    res.render('about-me');
});

router.get('/projects', (req, res) => {
    res.render('projects', { projects });
});

router.get('/projects/:id', (req, res) => {
    const { id } = req.params;
    const project = projects.find(project => project.id === +id);
    res.render('project-detail', { id, project });
})


module.exports = router;
