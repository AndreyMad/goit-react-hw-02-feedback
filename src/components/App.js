import React from "react";
import UserProfile from "./UserProfile/UserProfile";
import user from "../db/user.json";
import UserFriends from "./UserFriends/UserFriends";
import friends from "../db/friends.json";
import Stats from "./Stats/Stats";
import statisticalData from "../db/statistical-data.json";

function App() {
  return (
    <>
      <UserProfile user={user} />
      <UserFriends friends={friends} />
      <Stats title stats={statisticalData} />
    </>
  );
}

export default App;
