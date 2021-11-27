import styles from "../styles/Intro.module.css";
import Image from "next/image";
import Circle from "../components/Circle";


const Intro = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="yellow" top="-50vh" left="-50vh" />
      <Circle backgroundColor="blue" right="-50vh"  />
      <div className={styles.card}>
        <h1 className={styles.title}>
          <span className={styles.brand}>James</span>
          DIGITAL PRODUCT AGENCY
        </h1>
        <p className={styles.desc}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <button className={styles.button}>DISCOVER</button>
      </div>
      <div className={styles.card}>
        <Image
          src="/img/canvas.png"
          priority="true"
          /*layout="fill"*/
          width="1200px"
          height="1200px"
          objectFit="cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default Intro
