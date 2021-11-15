import styles from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
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
    </div>
  );
};

export default Navbar;
