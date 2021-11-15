import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Agency App</title>
        <meta name="description" content="Agency/Portfolio" />
      </Head>
      <h1 className={styles.title}>this is homepage</h1>
    </div>
  );
}
