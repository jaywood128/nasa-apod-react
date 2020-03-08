import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const getToday = "todays day"

 export const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link className="navbar-brand" to="/astronomy_pictures/today">Today's Picture</Link>
    <Link className="navbar-brand" to="/last_thirty_days"> Astro Slide Show</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/search_astronomy_pictures">Search</Link>
      </li>
    </ul>
  <a className="btn btn-success" href="/users_signout"> Sign out </a>
  </div>
</nav>
)
