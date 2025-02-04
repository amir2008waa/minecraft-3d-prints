const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the 'web' directory
app.use(express.static(path.join(__dirname, 'web')));

// Serve index.html as the default file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'web', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
