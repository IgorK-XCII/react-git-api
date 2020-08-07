import React, { useContext, useState, useEffect } from "react";
import { AlertContext } from "../context/alert/AlertContext";
import { GitHubContext } from "../context/gitHub/gitHubContext";

const Search = () => {
  const [value, setValue] = useState("");
  const { show, hide } = useContext(AlertContext);
  const gitHub = useContext(GitHubContext);

  useEffect(() => {
    if (gitHub.numberUsers === 0) {
      show("User not found...", "secondary");
    }
    // eslint-disable-next-line
  }, [gitHub.numberUsers]);

  const onSubmit = event => {
    if (event.key !== "Enter") {
      return;
    }
    gitHub.clearUsers();
    if (value.trim()) {
      gitHub.search(value.trim());
    } else {
      show("Incorrect data...", "danger");
    }
  };

  const alert = value => {
    setValue(value);
    hide();
  };
  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Input user nickname..."
        value={value}
        onChange={event => alert(event.target.value)}
        onKeyPress={onSubmit}
      />
    </div>
  );
};

export default Search;
