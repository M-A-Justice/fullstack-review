const express = require('express');
const github = require('../helpers/github.js');
const db = require('../database/index.js');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  github.getReposByUsername(req.body.term, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      db.save(results, (err, results) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.send(results);
        }
      });
    }
  });
  res.send('repos');
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  db.Repo.sort({ $forks: -1 }).limit(25).find((err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.send(results);
    }
  })
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

