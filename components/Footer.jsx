import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
   return (
      <div className={styles.container}>
         <div className={styles.item}>
            <Image src="/img/footerPizza.jpg" alt="" objectFit="cover" layout="fill" />
         </div>
         <div className={styles.item}>
            <div className={styles.card}>
               <h2 className={styles.motto}>
                  OH TES, WE DID. THE JMG PIZZA, WELL BAKED SLICE OF PIZZA
               </h2>
            </div>
            <div className={styles.card}>
               <h2 className={styles.title}> FIND OUR RESTAURANTS</h2>
               <p className={styles.text}>
                  1654 R. Don Road #304.
                  <br /> NewYork, 88022
                  <br /> (602) 867-1010
               </p>
               <p className={styles.text}>
                  1654 R. Don Road #304.
                  <br /> NewYork, 88022
                  <br /> (602) 867-1010
               </p>
               <p className={styles.text}>
                  1654 R. Don Road #304.
                  <br /> NewYork, 88022
                  <br /> (602) 867-1010
               </p>
               <p className={styles.text}>
                  1654 R. Don Road #304.
                  <br /> NewYork, 88022
                  <br /> (602) 867-1010
               </p>
            </div>
            <div className={styles.card}>
               <h2 className={styles.title}>WORKING HOURS</h2>
               <p className={styles.text}>
                  MONTAY UNTIL - FRIDAY
                  <br /> 9:00 - 22:00
               </p>
               <p className={styles.text}>
                  SATURDAY - SUNDAY
                  <br /> 12:00 - 24:00
               </p>
            </div>
         </div>
      </div>
   );
};

export default Footer;
