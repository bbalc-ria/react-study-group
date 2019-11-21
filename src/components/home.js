import React from "react";
import UpdatesFeed from "./updatesFeed/updatesFeed";
import TopBar from "./topBar/topBar";

function Home(props) {
  return (
    <div>
      <TopBar/>
      <UpdatesFeed />
    </div>
  );
}

export default Home;
