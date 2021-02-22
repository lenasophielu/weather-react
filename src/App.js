import React from 'react'
import logo from './logo.svg';
import './App.css';

import Weather from "./Weather";
import Search from "./Search";
import DateCity from "./DateCity";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
import Weather from "./Weather";
import Search from "./Search";
import DateCity from "./DateCity";

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="weather-app">
          <form class="search-form" id="search-form">
            <div class="form-row">
              <div class="col-5">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Where?"
                  id="city-input"
                />
              </div>
              <div class="col-1.5">
                <input
                  type="submit"
                  value="Search"
                  class="btn btn-info"
                  id="searchbutton"
                />
              </div>

              <button
                type="button"
                class="btn btn-secondary"
                id="current-location-button"
              >
                Current
              </button>
            </div>{" "}
          </form>
        </div>

        <div class="row row-cols-3">
          <div id="city" class="city"></div>
          <div class="today">
            <img src="" alt="Clear" id="icon" />
          </div>
          <div id="date" class="date"></div>
          <div class="row"></div>
        </div>
        <div class="row row-cols-9">
          <div id="temperature" class="temperature"></div>
          <div class="unit">°C </div>
        </div>
        <span class="weatherDefinition"></span>
        <ul class="conditions">
          <li>
            Humidity: <span id="humidity"></span>%
          </li>
          <li>
            Wind: <span id="wind"></span> km/h
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
