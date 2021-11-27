import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open,setOpen] = useState(false)
  return (
    <div className={styles.container}>
      <Link href="/">James Alexander</Link>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/products/projects">PROJECTS</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/linkedin">LINKEDIN</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/contact">CONTACT</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/resume">RESUME</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/github">GITHUB</Link>
        </li>
      </ul>
      <div className={styles.hamburger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      <ul onClick={()=>setOpen(false)}className={styles.menu} style={{right: open ? "0px" : "-50vw"}}>
        <li className={styles.menuItem}>
          <Link href="/products/projects">PROJECTS</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/products/linkedin">LINKEDIN</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/products/contact">CONTACT</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/products/resume">RESUME</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/products/github">GITHUB</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
