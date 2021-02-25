const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

// const page = require("./dist/bundle.js");
app.use(express.json());
app.use(cors());



app.post('/test', (req,res)=> {
  
  if (req.body) {
    res.redirect('/');
  }
   

});

app.use(express.static('public'))
app.get('*', (req,res) => {
  console.log(`request: ${req.url}`);
  debugger;
  // res.sendFile(path.resolve(__dirname, 'public', index.html));
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})






// const { createServer } = require("http");

// createServer((req, res) => {
//   const { html } = page.render({ url: req.url });

//   res.write(`
//     <!DOCTYPE html>
//     <div id="app">${html}</div>
//     <script src="/dist/bundle.js"></script>
//   `);

//   res.end();
// }).listen(3000);