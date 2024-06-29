// src/routes/productosRoutes.js
/**
 * Enrutador 
 * Endpoints
 */
// 1- Importa el módulo
const express = require("express");
// 2- Instancia Router de express
const router = express.Router();
// 3- Importamos el módulo propio categoryController
const categoryController = require('../controllers/categoryController');
// 4- En categoryController programamos el módulo junto a métodos GET, POST, PUT, DELETE
// Dejaremos sólo la declaración de las rutas, con sus métodos 
// y el llamado al movieController con el método específico para cada opción 
// Ruta de listado en general
router.get('/', categoryController.getAllCategoriesProducts);
//Ruta para la consulta de peliculas por id
router.get('/:id', categoryController.getCategoryById);
//Ruta para crear una pelicula
router.post('/', categoryController.createCategory);
//Ruta para actualizar una pelicula
router.put('/:id', categoryController.updateCategory);
//Ruta para borrar una pelicula
router.delete('/:id', categoryController.deleteCategory);
//5- Exportamos el módulo
module.exports = router;
//6- Pasamos a configurar movieController.js

