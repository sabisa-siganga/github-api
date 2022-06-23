import * as React from "react";
import "./HomePage.scss";

import SearchBox from "../../components/SearchBox/SearchBox";
import UsersList from "../../components/UsersList/UsersList";

const HomePageView = () => {
  return (
    <div className="homeContainer">
      <SearchBox />
      <UsersList />
    </div>
  );
};

export default HomePageView;
