document.getElementById('userForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        document.getElementById('response').innerText = 'Invalid email format';
        return;
    }

    const data = {
        name: document.getElementById('name').value,
        email: email,
        phone: document.getElementById('phone').value,
        age: document.getElementById('age').value
    };

    try {
        const res = await fetch('/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        if (!res.ok) {
            const errorMsg = await res.text();
            document.getElementById('response').innerText = errorMsg;
        } else {
            document.getElementById('response').innerText = await res.text();
        }
    } catch (error) {
        document.getElementById('response').innerText = 'Error communicating with the server';
    }
});

document.getElementById('fetchUsers').addEventListener('click', async () => {
    const res = await fetch('/api/users');
    const users = await res.json();
    const usersList = document.getElementById('usersList');
    usersList.innerHTML = '<h2>Users:</h2>';
    users.forEach(user => {
        usersList.innerHTML += `<p>${user.name} - ${user.email} - ${user.phone} - Age: ${user.age}</p>`;
    });
});

document.getElementById('productForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = {
        name: document.getElementById('productName').value,
        description: document.getElementById('productDescription').value,
        price: document.getElementById('productPrice').value
    };

    try {
        const res = await fetch('/api/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        if (!res.ok) {
            const errorMsg = await res.text();
            document.getElementById('productResponse').innerText = errorMsg;
        } else {
            document.getElementById('productResponse').innerText = await res.text();
        }
    } catch (error) {
        document.getElementById('productResponse').innerText = 'Error communicating with the server';
    }
});

document.getElementById('fetchProducts').addEventListener('click', async () => {
    const res = await fetch('/api/products');
    const products = await res.json();
    const productsList = document.getElementById('productsList');
    productsList.innerHTML = '<h2>Products:</h2>';
    products.forEach(product => {
        productsList.innerHTML += `<p>${product.name} - ${product.description} - ${product.price}</p>`;
    });
});