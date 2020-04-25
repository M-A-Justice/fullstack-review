const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');


let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: Number,
  name: String,
  html_url: String,
  description: String,
  forks: Number,
  login: String,
  avatar_url: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repo) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

  let repositories = new Repo({
    id: repo.id,
    name: repo.name,
    html_url: repo.html_url,
    description: repo.description,
    forks: repo.forks,
    login: repo.owner.login,
    avatar_url: repo.owner.avatar_url
  })
  repositories.save((err, results) => {
    if (err) {
      console.log(err);
    }
  });
}

// Repo.find().sort({ forks: -1 }).limit(25)


module.exports = {
  save,
  Repo
};