import styles from "../styles/Testimonials.module.css";
import Circle from "./Circle";
import {users} from "../data";
import Image from "next/image";

const Testimonials = () => {
 return (
  <div className={styles.container}>
   <Circle backgroundColor="darkblue" top="-70vh" left="0" right="0"/>
   <h1 className={styles.title}>Testimonials</h1>
   <div className={styles.wrapper}>
    {users.map(user=>(
     <div key={user.id} className={styles.card}>
      <Image src={`/img/${user.logo}`} alt=""/>
     </div>
    ))}
   </div>
  </div>
 )
}

export default Testimonials
