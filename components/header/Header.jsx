import React, { useEffect, useRef, useState } from "react";
import { MenuAlt3Icon } from "@heroicons/react/outline";
import { UserCircleIcon } from "@heroicons/react/solid";
import { useMediaQuery } from "react-responsive";

import style from "./headerStyle";

function Header() {
  const isTabletOrMobile = useMediaQuery({ query: "(min-width: 1224px)" });
  const menuRef = useRef();
  const menuIconRef = useRef();
  const ref = useRef();

  useEffect(() => {
    if (isTabletOrMobile) {
      menuRef.current.classList.remove("hidden");
      ref.current.classList.remove("hidden");
      menuIconRef.current.classList.add("hidden");

    }
  },[]);

  const menuToggleHandler = () => {
    menuRef.current.classList.toggle("hidden");
    ref.current.classList.toggle("hidden");
  };

  return (
    <header className={style.header}>
      <img
        src={`${isTabletOrMobile ? "/logo.png" : "/logo_light.png"}`}
        alt="logo"
        className={`${style.logoImage} `}
      />
      <nav ref={menuRef} className={style.navLinks}>
        <p className={style.navLinkType1}>Services</p>
        <p className={style.navLinkType2}>Doctors</p>
        <p className={style.navLinkType1}>Specialists</p>
        <p className={style.navLinkType2}>Pharmacy</p>
        <p className={style.navLinkType1}>About</p>
      </nav>
      <div ref={ref} className="hidden">
        <UserCircleIcon className={style.userIcon} />
      </div>

      <div ref={menuIconRef} className="block">
        <MenuAlt3Icon className={style.menuIcon} onClick={menuToggleHandler} />
      </div>
    </header>
  );
}

export default Header;
