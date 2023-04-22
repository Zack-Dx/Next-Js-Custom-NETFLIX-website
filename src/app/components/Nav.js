import React from "react";
import Link from "next/link";
import styles from "@/app/styles/navbar.module.css";
const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <div className={""}>
        <ul className={styles.navbarList}>
          <li className={styles.navbarItem}>
            <Link className={styles.navbarLink} href={"/"}>
              Home
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link className={styles.navbarLink} href={"/about"}>
              About
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link className={styles.navbarLink} href={"/movie"}>
              Movie
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link className={styles.navbarLink} href={"/contact"}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
