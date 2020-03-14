import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Kynd Co
      </a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto flex-end">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/signIn"><div className= "btn btn-primary"> Sign In</div></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/signUp"><div className= "btn btn-primary"> Sign Up</div></a>
      </li>
    </ul>
  
  </div>


    </nav>
  );
}

export default Nav;