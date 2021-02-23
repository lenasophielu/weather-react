import React from 'react'
import Weather from "./Weather";
import Search from "./Search";
import DateCity from "./DateCity";
import './App.css';

function App() {
  return (
    <div className="App">
<Search />
<DateCity />
<Weather />

<footer> <a href="https://github.com/lenasophielu/weather-react"> Open source code </a> by Lena Lumplecker</footer>

    </div>
  );
}

export default App;
