const express = require('express');
const router = express.Router();
router.get('/data', (req, res) => {
  // Return some data
  res.json({ message: 'Hello from Node.js!' });
});
module.exports = router;