import React from 'react';
import './App.css';
import routes from './routes.js'
import Header from './components/header/header.js';

function App(props) {
    console.log(props);
  return (
    <div className="App">
        <Header/>
        <div className="app-content">
            {routes}
        </div>
    </div>
  );
}

export default App;
