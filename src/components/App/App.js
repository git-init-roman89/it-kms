import React from 'react';
import ReactDom from 'react-dom';
import Header from "../Header/Header";
import UserNavigation from '../UserNavigation/UserNavigation';
import UserProfile from '../UserProfile/UserProfile';
import FriendsOnline from '../FriendsOnline/FriendsOnline';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <UserNavigation />
      <UserProfile />
      <FriendsOnline />
    </div>
  );
}

export default App;
