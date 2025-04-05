import React from "react";
import Image from "next/image";

import MenuItems from "./components/menuItems";

import "./styles.scss";

const Header = () => {
  return (
    <header className="dashboard-header">
      <section>
        <div className="logo">
          <Image
            alt=""
            src="/img/logo-thues-barbearia.png"
            width={120}
            height={120}
          />

          <h1>Thues Barbearia</h1>
        </div>

        <nav>
          <ul>
            <MenuItems />
          </ul>
        </nav>
      </section>

      <button className="logout">
        <span>Sair</span>

        <Image alt="" src="/logout.svg" width={20} height={20} />
      </button>
    </header>
  );
};

export default Header;
