import Intro from "../components/Intro";
import Head from "next/head";
import Image from "next/image";
import { data } from "../data";
import styles from "../styles/Home.module.css";
import Services from "../components/Services";

export default function Home({services}) {
  
  return (
    <div>
      <Head>
        <title>Agency App</title>
        <meta name="description" content="Agency/Portfolio" />
      </Head>
      <Intro />
      <Services services={services} />
    </div>
  );
}

export const getStaticProps = async () => {
  const services = data;
  return {
    props: {services}}
}
