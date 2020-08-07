import React from "react";
import Search from "../components/Search";
import Card from "../components/Card";
import { useContext } from "react";
import { GitHubContext } from "../context/gitHub/gitHubContext";

const Home = () => {
  // const cards = new Array(15).fill(" ").map((_, i) => i);
  const { loading, users } = useContext(GitHubContext);
  return (
    <>
      <Search />
      <div className="row">
        {loading ? (
          <div className="container-fluid text-center">
            <div className="spinner-grow text-danger" role="status">
              <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-warning" role="status">
              <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow text-info" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          users.map(user => (
            <div className="col-sm-4 mb-4" key={user.id}>
              <Card user={user} />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Home;
