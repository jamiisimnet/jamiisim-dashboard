// App.js
import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { DEMO_USERS } from './utils/api';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserRole, setCurrentUserRole] = useState(null);
  const [currentPage, setCurrentPage] = useState('Home');

  const handleLogin = (username, password) => {
    const user = DEMO_USERS[username];
    if (user && user.password === password) {
      setCurrentUser(username);
      setCurrentUserRole(user.role);
      setCurrentPage('Home');
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentUserRole(null);
    setCurrentPage('Home');
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  if (!currentUser) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <Dashboard 
      currentUser={currentUser}
      currentUserRole={currentUserRole}
      currentPage={currentPage}
      onNavigate={navigateTo}
      onLogout={handleLogout}
    />
  );
}

export default App;