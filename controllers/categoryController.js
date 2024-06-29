const db = require("../db/db.js");

// Funciones para manejar categorías

// 1. Obtener todas las categorías
const getAllCategoriesProducts = (req, res) => {
    const sql = 'SELECT * FROM categories';
    db.query(sql, (err, result) => {
        if (err) { throw err; }
        res.json(result);
    });
};

// 2. Obtener una categoría por ID
const getCategoryById = (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM categories WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) { throw err; }
        res.json(result);
    });
};

// 3. Crear una nueva categoría
const createCategory = (req, res) => {
    const { category, id_category, description } = req.body;
    const sql = 'INSERT INTO categories (category, id_category, description) VALUES ( ?, ?, ?)';
    db.query(sql, [category, id_category, description], (err, result) => {
        if (err) { throw err; }
        res.json({ mensaje: "Categoría creada" });
    });
};

// 4. Actualizar una categoría
const updateCategory = (req, res) => {
    const { id } = req.params;
    const { category, id_category, description } = req.body;
    const sql = 'UPDATE categories SET category = ?, id_category = ?, description = ? WHERE id = ?';
    db.query(sql, [category, id_category, description, id], (err, result) => {
        if (err) { throw err; }
        res.json({ mensaje: "Categoría actualizada" });
    });
};

// 5. Borrar una categoría
const deleteCategory = (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM categories WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) { throw err; }
        res.json({ mensaje: "Categoría borrada" });
    });
};



// Exportamos los módulos
module.exports = {
    getAllCategoriesProducts,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
    
};
