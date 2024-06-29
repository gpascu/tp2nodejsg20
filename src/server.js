// src/server.js
/* Punto principal de acceso al servidor */

// Importa express
const express = require('express');
const app = express();

// Importa módulos de rutas
const categoriesRoutes = require('../routes/categoriesRouter');
const articlesRoutes = require('../routes/articlesRouter');

// Declara el puerto
const PORT = 3000;

// Middleware para procesar JSON y datos de formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configura CORS
const cors = require('cors');
app.use(cors());

// Delega las rutas a los enrutadores específicos
app.use('/categories', categoriesRoutes); // Prefijo '/api/categories' para rutas de categorías
app.use('/articles', articlesRoutes); // Prefijo '/api/articles' para rutas de artículos

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
});
