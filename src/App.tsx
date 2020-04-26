import React from 'react';
import './App.css';

import Auth from './containers/Auth/Auth';

function App(): JSX.Element {
  return (
    <div className="app-container d-flex container-fluid">
      <Auth />
    </div>
  );
}

export default App;
