import React from 'react';

const RepoListEntry = (props) => {
  const {repo} = props;
  return (
    <div className="user-repo">
      <div className="user">
        <div className="username">{repo.login}</div>
        <img className="avatar" src={repo.avatar_url}></img>
      </div>
      <div className="text">
        <div className="repo">
          <a className="repo-name" href={repo.html_url}>{repo.name}</a>
          <span className="repo-description">{repo.description}</span>
        </div>
      </div>
      <div className="forks">Forks: {repo.forks}</div>
    </div>
  );
}

export default RepoListEntry;