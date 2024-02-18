import React from "react";
import ResultList from "../../components/ResultList";
import SearchInput from "../../components/SearchInput";
import { GoMarkGithub } from "react-icons/go";
import "./App.css";

function App() {
  return (
    <div className="main">
      <div className="top">
        <GoMarkGithub className="github-icon" />
        <div className="header">
          <h1>GitHub Searcher</h1>
          <h3>Search users or repos below</h3>
        </div>
      </div>

      <SearchInput />

      <ResultList />
    </div>
  );
}

export default App;
