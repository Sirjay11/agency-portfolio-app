import styles from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
        <h1 className={styles.title}>James CREATIVES</h1>
        <h1 className={styles.linkTitle}>
          <a href="/contact">
            <span className={styles.linkText}>WORK WITH ME</span>
            <Image src="/img/link1.jpeg/" width="40px" height="40px" objectFit="cover" alt="" />
          </a>
        </h1>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          12 ADAM WAY CA <br /> USA
        </div>
        <div className={styles.cardItem}>
          CONTACT@JAMES.DEV <br /> 213 425 3546
        </div>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          FOLOW ME: <br /> __FB __IN __BE __TW
        </div>
        <div className={styles.cardItem}>
          © 2021 James LLC,<br /> ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
};

export default Footer;
