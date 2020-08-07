import React from "react";
import { useContext, useEffect } from "react";
import { GitHubContext } from "../context/gitHub/gitHubContext";
import { Link } from "react-router-dom";
import Repos from "../components/Repos";

const Profile = ({ match }) => {
  const { getUser, getRepos, loading, user, repos } = useContext(GitHubContext);

  const urlName = match.params.name;

  useEffect(() => {
    getUser(urlName);
    getRepos(urlName);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists
  } = user;

  return (
    <>
      {loading ? (
        <div className="text-center">
          <div
            className="spinner-grow"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <Link to="/" className="btn btn-link">
            To home page
          </Link>
          <div className="card mb-4">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-3 text-center">
                  <img src={avatar_url} alt={name} style={{ width: "150px" }} />
                  <h1>{name}</h1>
                  {location && <p>Location: {location}</p>}
                </div>
                <div className="col">
                  {bio && (
                    <>
                      <h3>BIO</h3>
                      <p>{bio}</p>
                    </>
                  )}
                  <a
                    href={html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark"
                  >
                    Open profile
                  </a>
                  <ul>
                    {login && (
                      <li>
                        <strong>Username:</strong>
                        {login}
                      </li>
                    )}
                    {company && (
                      <li>
                        <strong>Company:</strong>
                        {company}
                      </li>
                    )}
                    {blog && (
                      <li>
                        <strong>Website:</strong>
                        {blog}
                      </li>
                    )}
                  </ul>
                  <div className="badge badge-primary">
                    Followers: {followers}
                  </div>
                  <div className="badge badge-success">
                    Following: {following}
                  </div>
                  <div className="badge badge-info">
                    Repository: {public_repos}
                  </div>
                  <div className="badge badge-dark">Gists: {public_gists}</div>
                </div>
              </div>
            </div>
          </div>
          <Repos repos={repos} />
        </>
      )}
    </>
  );
};
export default Profile;
