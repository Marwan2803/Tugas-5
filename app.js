const express = require('express');
const app = express();

// Function to calculate area
function calculateArea(shape, side, length, height) {
    switch (shape) {
        case 'segitiga':
            return (length * height) / 2;
        case 'persegi':
            return side * side;
        case 'persegi_panjang':
            return length * height;
        default:
            return null;
    }
}

// Function to calculate perimeter
function calculatePerimeter(shape, side, length, height) {
    switch (shape) {
        case 'segitiga':
            return 3 * side;
        case 'persegi':
            return 4 * side;
        case 'persegi_panjang':
            return 2 * (length + height);
        default:
            return null;
    }
}

// Route to handle requests
app.get('/bangun-ruang', (req, res) => {
    const shape = req.query.shape; // Get the shape (segitiga, persegi, persegi_panjang)
    const action = req.query.action; // Get the action (luas or keliling)
    const side = parseFloat(req.query.sisi); // Side of square or triangle
    const length = parseFloat(req.query.panjang); // Length (for rectangle or triangle)
    const height = parseFloat(req.query.tinggi); // Height (for rectangle or triangle)

    let result;

    if (action === 'luas') {
        result = calculateArea(shape, side, length, height);
    } else if (action === 'keliling') {
        result = calculatePerimeter(shape, side, length, height);
    } else {
        return res.send('Action tidak valid. Gunakan "luas" atau "keliling".');
    }

    if (result !== null) {
        res.send(`Hasil ${action} untuk ${shape} adalah: ${result}`);
    } else {
        res.send('Bentuk bangun ruang tidak valid.');
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});     
