const db = require('../db');
const User = require('../models/user');

class UserDAO {
    async save(user) {
        const sql = 'INSERT INTO users (name, email, phone, age) VALUES (?, ?, ?, ?)';
        const [result] = await db.execute(sql, [user.name, user.email, user.phone, user.age]);
        return result.insertId;
    }

    async getAll() {
        const [rows] = await db.execute('SELECT * FROM users');
        return rows;
    }
}

module.exports = new UserDAO();
