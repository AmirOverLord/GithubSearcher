import React from "react";
import UserCard from "./UserCard";
import RepositoryCard from "./RepositoryCard";

const ResultList = () => {
  return (
    <div className="result-list">
      <UserCard />
      <UserCard />
      <UserCard />
    </div>
  );
};

export default ResultList;
