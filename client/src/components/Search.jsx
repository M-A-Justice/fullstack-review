import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }

    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
  }

  onChange (e) {
    this.setState({
      term: e.target.value
    });
  }

  search() {
    this.props.onSearch(this.state.term);
    this.setState({
      term: ''
    });
  }

  render() {
    return (<div className="input">
      <h4>Add more repos!</h4>
      <input className="search-input"value={this.state.term} placeholder="Enter a github username" onChange={this.onChange}/>
      <button className="search" onClick={this.search}><i className="fab fa-github-alt"></i></button>
    </div>)
  }
}

export default Search;