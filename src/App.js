import React from 'react';

import './App.scss';
import Navbar from './component/Navbar/Navbar';
import TourList from './component/TourList/TourList';

function App() {
  return (
    <div className="App">
       <Navbar />
       <TourList />
      
    </div>
  );
}

export default App;
