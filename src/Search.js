import React from "react";

export default function Search() {
  return (
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
    </div>
  );
}
