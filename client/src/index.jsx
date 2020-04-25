import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import axios from 'axios';

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
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  componentDidMount() {
    this.get();
  }

  search (term) {
    // console.log(`${term} was searched`);
    $.ajax({
      contentType: 'application/json',
      method: 'POST',
      url: '/repos',
      data: JSON.stringify({term: term}),
      success: (data) => {
        console.log(`${data} sent to server`);
      }
    });
  }

  render () {
    const { repos } = this.state;
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={repos}/>
      <Search onSearch={this.search}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));