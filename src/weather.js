import React from "react";
import axios from 'axios';

export default function Weather() {
  return (
    <div>
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
  );
}