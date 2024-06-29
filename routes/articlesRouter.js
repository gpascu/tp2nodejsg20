// 1- Importa el módulo
const express = require("express");
// 2- Instancia Router de express
const router = express.Router();
// 3- Importamos el módulo propio categoryController
const articleController = require('../controllers/articleController');

// Ruta de listado en general
router.get('/', articleController.getAllArticles);
//Ruta para la consulta de peliculas por id
router.get('/:id', articleController.getArticleById);
//Ruta para crear una pelicula
router.post('/', articleController.createArticle);
//Ruta para actualizar una pelicula
router.put('/:id', articleController.updateArticle);
//Ruta para borrar una pelicula
router.delete('/:id', articleController.deleteArticle);
//5- Exportamos el módulo
module.exports = router;