import React from 'react';
import RepoListEntry from './RepoListEntry.jsx';

class RepoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {repos} = this.props;
    return (
      <div>
        {repos.map((repo, i) =>
          <RepoListEntry key={repo.id + i} repo={repo}/>
        )}
      </div>
    )
  }
}

export default RepoList;