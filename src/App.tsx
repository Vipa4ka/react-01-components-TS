import React from "react";

import Profile from "./components/Profile/Profile";
import user from "./components/Profile/user.json";

import Statistics from "./components/Statistics/Statistics";
import data from "./components/Statistics/data.json";

import FriendListItems from "./components/FriendList/FriendList";
import friends from "./components/FriendList/friends.json";

import TransactionHistory from "./components/TransactionHistory/Transactions";
import transactions from "./components/TransactionHistory/transactions.json";

const App = () => {
  return (
    <div>
      <Profile
        name={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
        avatar={user.avatar}
      />
      <Statistics title="Upload stats" stats={data} />;
      <FriendListItems friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
