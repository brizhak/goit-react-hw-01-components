import React from "react";
import user from './json/user.json';
import Profile from './Profile';

const App = () => {
    return (
        <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
  )};

export default App;
