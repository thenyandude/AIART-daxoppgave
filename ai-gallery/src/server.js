const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();

// Enable CORS for all routes
app.use(cors());

// Your NFS directory path
const nfsDirectory = '/mnt/aiart/images';

// Start the server
const PORT = 3001; // You can choose any port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


app.get('/images', (req, res) => {
    fs.readdir(nfsDirectory, (err, files) => {
        if (err) {
            console.error("Error reading NFS directory:", err);
            res.status(500).send('Error reading image directory');
            return;
        }

        console.log("Files found before filter:", files); // Log all found files

        // Include .webp in the filter
        const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif|webp)$/.test(file));

        console.log("Files found after filter:", imageFiles); // Log filtered files

        res.json(imageFiles);
    });
});



app.get('/image/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(nfsDirectory, filename);


    res.sendFile(filePath, (err) => {
        if (err) {
            console.error("Error sending file:", err);
            res.status(500).send('Error sending file');
        }
    });
});