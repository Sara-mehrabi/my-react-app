

import React from 'react';
import Welcome from './components/Welcome';
import UserList from './components/UserList'; // 👈 اینو اضافه کن

function App() {
  return (
    <div className="App">
      <h1>برنامه React من</h1>
      <Welcome />
      <UserList /> {/* 👈 نمایش لیست کاربران */}
    </div>
  );
}

export default App;
