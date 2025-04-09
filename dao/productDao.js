const db = require('../db');
const Product = require('../models/product');

class ProductDAO {
    async save(product) {
        const sql = 'INSERT INTO products (name, description, price) VALUES (?, ?, ?)';
        const [result] = await db.execute(sql, [product.name, product.description, product.price]);
        return result.insertId;
    }

    async getAll() {
        const [rows] = await db.execute('SELECT * FROM products');
        return rows;
    }
}

module.exports = new ProductDAO();
