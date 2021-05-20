import React, { useEffect, useRef, useState } from "react";
import { MenuAlt3Icon } from "@heroicons/react/outline";
import { UserCircleIcon } from "@heroicons/react/solid";

import style from "./headerStyle";

function Header() {
  const ref = useRef()
  const [status, setStatus] = useState(false);
  

  return (
    <header className={style.header}>
      <img src="/logo.png" alt="logo" className={`${style.logoImage} `} />

      <nav
        ref={ref}
        className={`${style.navLinks} ${status ? "" : "hidden lg:flex"} `}
      >
        <p className={style.navLinkType1}>Services</p>
        <p className={style.navLinkType2}>Doctors</p>
        <p className={style.navLinkType1}>Specialists</p>
        <p className={style.navLinkType2}>Pharmacy</p>
        <p className={style.navLinkType1}>About</p>
      </nav>
      <UserCircleIcon
        className={`${style.userIcon} ${
          status ? " -translate-x-0" : " -translate-x-10"
        }`}
      />

      <MenuAlt3Icon
        onClick={() => setStatus((prev) => !prev)}
        className={`${style.menuIcon} ${
          status ? "text-white" : "text-primary"
        }`}
      />
    </header>
  );
}

export default Header;
