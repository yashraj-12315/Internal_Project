// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './loginPage/LoginPage';
import CreateSessionPage from './createSession/CreateSessionPage';
import DisplayCSVPage from './DisplayCSVPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/create-session" element={<CreateSessionPage />} />
        <Route
          path="/display-csv"
          render={({ location }) => <DisplayCSVPage location={location} />}
        />

      </Routes>
    </Router>
  );
};

export default App;

