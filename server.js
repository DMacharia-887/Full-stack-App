const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userDao = require('./dao/userDao');
const productDao = require('./dao/productDao');
const path = require('path'); // Required to serve static files
const User = require('./models/user'); // Add this line at the top
const Product = require('./models/product'); // Add 

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Serve static files (index.html)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/api/users', async (req, res) => {
    try {
        const { name, email, phone, age } = req.body;
        const user = new User(name, email, phone, age);
        const id = await userDao.save(user);
        res.send(`User saved with ID: ${id}`);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error saving user data to the database');
    }
});

app.get('/api/users', async (req, res) => {
    try {
        const users = await userDao.getAll();
        res.json(users); // Send back all users as JSON
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching users');
    }
});

app.post('/api/products', async (req, res) => {
    try {
        const { name, description, price } = req.body;
        const product = new Product(name, description, price);
        const id = await productDao.save(product);
        res.send(`Product saved with ID: ${id}`);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error saving product');
    }
});

app.get('/api/products', async (req, res) => {
    try {
        const products = await productDao.getAll();
        res.json(products); // Send back all products as JSON
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching products');
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
