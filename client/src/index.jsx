import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoCounter from './components/RepoCounter.jsx';
import axios from 'axios';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

    this.search = this.search.bind(this);
    this.get = this.get.bind(this);
  }

  get() {
    axios.get('/repos')
      .then((res) => {
        this.setState({
          repos: res.data
        });
      })
      .catch((err) => {
        console.log(err);
      })
  }

  componentDidMount() {
    this.get();
  }

  search (term) {
    // $.ajax({
    //   contentType: 'application/json',
    //   method: 'POST',
    //   url: '/repos',
    //   data: JSON.stringify({term: term}),
    //   success: (data) => {
    //     // console.log(data);
    //     this.get();
    //   }
    // });
    axios.post('/repos', {term: term})
      .then(() => this.get())
      .catch(err => console.log(err));
  }

  render () {
    const { repos } = this.state;
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoCounter repos={repos}/>
      <Search onSearch={this.search}/>
      <RepoList repos={repos}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));