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
      for (let repo of results) {
        db.save(repo)
      }
      res.status(201).send(req.body.term);
    }
  });

});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  db.Repo.find().sort({ forks: -1 }).limit(25)
    .then((repos) => {
      res.send(repos);
    })
    .catch(err => res.status(500).send(err));
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

