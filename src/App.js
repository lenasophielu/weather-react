import React from 'react'
import Weather from "./Weather";
import Search from "./Search";
import DateCity from "./DateCity";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="AppHeader">
<Search />
<DateCity />
<Weather />


      </header>
    </div>
  );
}

export default App;
