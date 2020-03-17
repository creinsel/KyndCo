import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Kynd Co
      </a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a class="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/signIn"><div className= "btn btn-primary"> Sign In</div></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/signUp"><div className= "btn btn-primary"> Sign Up</div></a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>


    </nav>
  );
}

export default Nav;