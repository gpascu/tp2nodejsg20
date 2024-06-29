const db = require("../db/db.js");
// 1. Obtener todos los artículos
const getAllArticles = (req, res) => {
    const sql = 'SELECT * FROM articles';
    db.query(sql, (err, result) => {
        if (err) { throw err; }
        res.json(result);
    });
};

// 2. Obtener un artículo por ID
const getArticleById = (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM articles WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) { throw err; }
        res.json(result);
    });
};

// 3. Crear un nuevo artículo
const createArticle = (req, res) => {
    const { name, description, price, id_category } = req.body;
    const sql = 'INSERT INTO articles (name, description, price, id_category) VALUES ( ?, ?, ?, ?)';
    db.query(sql, [name, description, price, id_category], (err, result) => {
        if (err) { throw err; }
        res.json({ mensaje: "Artículo creado" });
    });
};

// 4. Actualizar un artículo
const updateArticle = (req, res) => {
    const { id } = req.params;
    const { name, description, price, id_category } = req.body;
    const sql = 'UPDATE articles SET name = ?, description = ?, price = ?, id_category = ? WHERE id = ?';
    db.query(sql, [name, description, price, id_category, id], (err, result) => {
        if (err) { throw err; }
        res.json({ mensaje: "Artículo actualizado" });
    });
};

// 5. Borrar un artículo
const deleteArticle = (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM articles WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) { throw err; }
        res.json({ mensaje: "Artículo borrado" });
    });
};

module.exports = {
    getAllArticles,
    getArticleById,
    createArticle,
    updateArticle,
    deleteArticle,
}