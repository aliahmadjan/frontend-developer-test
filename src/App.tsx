import React from 'react';
import SideNavigation from './SideNavigation';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="flex">
    <SideNavigation/>
    <Dashboard/>
    </div>
    // <div className="text-5xl text-center mt-48">
    //   <p>Good Luck!</p>
    // </div>
  );
}

export default App;
