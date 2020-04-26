import React from 'react';

const RepoList = (props) => (
  <div className="repo-counter">
    <h4> Repo Counter </h4>
    There are {props.repos.length} repos.
  </div>
)

export default RepoList;