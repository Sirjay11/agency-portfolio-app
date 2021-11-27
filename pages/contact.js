import styles from '../styles/Contact.module.css';
import Circle from "../components/Circle";


const contact = () => {
 return (
   <div className={styles.container}>
     <Circle backgroundColor="green" left="-40vh" top="-40vh"/>
     <Circle backgroundColor="yellow" right="-30vh" bottom="-65vh"/>
     <h1 className={styles.title}>GET IN TOUCH</h1>
     <form className={styles.form}>
       <input className={styles.inputS} placeholder="Username" />
       <input className={styles.inputS} placeholder="Phone  Number" />
       <input className={styles.inputL} placeholder="Email" />
       <input className={styles.inputL} placeholder="Subject" />
       <textarea className={styles.textArea} placeholder="Message" rows={6}/>
       <button className={styles.button}>SUBMIT</button>
     </form>
   </div>
 );
}

export default contact