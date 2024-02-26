const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001; // Use a different port than React's default 3000

// Serve images from the specified directory
app.use('/images', express.static('/mnt/aiart/images'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
