const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public')); // Serve static files from the 'public' directory

app.get('/', (req, res) => {
  res.send(`
    <div class="col-xl-4 col-md-4">
      <div class="single_service text-center wow fadeInLeft" data-wow-duration="1.2s" data-wow-delay=".4s">
        <div class="icon">
          <img src="img/svg_icon/1.svg" alt>
        </div>
        <h3>Deejaying</h3>
        <p>Work with professionals</p>
        <a href="https://example.com" class="link">Learn More</a>
      </div>
    </div>
  `);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});