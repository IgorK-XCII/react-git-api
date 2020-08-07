import React from "react";

const Repos = ({ repos }) => (
  <>
    {repos.map(repo => {
      return (
        <div className="card mb-3" key={repo.id}>
          <div className="card-body row">
            <h5 className="col-sm-3">
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
            </h5>
            <p className="col-sm-9">{repo.description}</p>
          </div>
        </div>
      );
    })}
  </>
);

export default Repos;
