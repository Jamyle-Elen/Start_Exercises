import React from "react";
import imgLogo from "../../assets/img/Logo1.png";
import "../menuBar/style.css";

function MenuBar() {
  return (
    <header>
      <a href="#">
        <img src={imgLogo} alt="Imagem da logo" />
      </a>

      <nav>
        <ul className="menu">
          <li><a href="#">Início</a></li>
          <li><a href="#">Projetos</a></li>
          <li><a href="#">Contatos</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default MenuBar;
