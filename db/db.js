/**
 * Finalmente el archivo db.js será el que cree el objeto que conecta con la base de datos. 
 * Esa conexión utilizará el objeto mysql provisto en en el módulo mysql2
 */
// 1. Importamos el módulo mysql2
const mysql = require('mysql2');

// 2. Configuramos conexión a la base de datos
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    port: 3306,
});

// Conexión
connection.connect((err) => {
    // En caso de error
    if (err) {
        console.log("Error conexión con el servidor: " + err);
    } else {
        console.log('Conexión exitosa');
        
        // Creamos una consulta
        const sqlCreatedb = 'CREATE DATABASE IF NOT EXISTS categories_db';

        // Pasamos la consulta a la base de datos
        connection.query(sqlCreatedb, (err, result) => {
            // Si sucede algún error
            if (err) {
                console.log("Error conexión con servidor: " + err);
                return;
            }
            // Si todo sale bien
            console.log('Base de datos creada');
            
            // Cambiamos a la base de datos categories_db
            connection.changeUser({ database: 'categories_db' }, (err) => {
                if (err) {
                    console.log("Error al cambiar a la base de datos categories_db: " + err);
                    return;
                }

                // Generamos la consulta para crear la tabla de categorías
                const createCategoriesTableQuery = `
                    CREATE TABLE IF NOT EXISTS categories (
                        id INT AUTO_INCREMENT PRIMARY KEY,
                        category VARCHAR(255) NOT NULL,
                        id_category INT NOT NULL UNIQUE,
                        description VARCHAR(255) NOT NULL
                    );
                `;

                // Pasamos la consulta a la base de datos
                connection.query(createCategoriesTableQuery, (err, result) => {
                    if (err) {
                        console.log("Error al crear tabla categories: " + err);
                        return;
                    }
                    console.log('Tabla categories creada');

                    // Generamos la consulta para crear la tabla de artículos
                    const createArticlesTableQuery = `
                        CREATE TABLE IF NOT EXISTS articles (
                            id INT AUTO_INCREMENT PRIMARY KEY,
                            name VARCHAR(255) NOT NULL,
                            description VARCHAR(255) NOT NULL,
                            price DECIMAL(10, 2) NOT NULL,
                            id_category INT NOT NULL,
                            FOREIGN KEY (id_category) REFERENCES categories(id_category)
                        );
                    `;

                    // Pasamos la consulta a la base de datos
                    connection.query(createArticlesTableQuery, (err, result) => {
                        if (err) {
                            console.log("Error al crear tabla articles: " + err);
                            return;
                        }
                        console.log('Tabla articles creada');
                    });
                });
            });
        });
    }
});

// Exportamos el módulo
module.exports = connection;
