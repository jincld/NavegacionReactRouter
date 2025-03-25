import React from "react";

function Nav() {
    return (
      <>
      <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container-fluid">
    <a className="navbar-brand" href="/">React-Router</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/Elementos">20 Componentes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/cardPersonal">Card Personal</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/calculadora">Calculadora</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/todo">To-Do List</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/registroEstudiantes">Registro De Estudiantes</a>
        </li>
      </ul>
    </div>
  </div>
      </nav>
      </>
    );
  }
  
  export default Nav;