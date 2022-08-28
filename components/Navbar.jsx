import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
   const quantity = useSelector((state) => state.cart.quantity);

   return (
      <div className={styles.container}>
         <div className={styles.item}>
            <Link href="https://wa.me/5930991528005">
               <a>
                  <div className={styles.callButton}>
                     <Image src="/img/telephone.png" alt="" width="32" height="32" />
                  </div>
               </a>
            </Link>
            <div className={styles.texts}>
               <div className={styles.text}>ORDER NOW!</div>
               <div className={styles.text}>+593 991 528 005</div>
            </div>
         </div>
         <div className={styles.item}>
            <ul className={styles.list}>
               <Link href="/">
                  <a>
                     <li className={styles.listItem}>Homepage</li>
                  </a>
               </Link>
               <li className={styles.listItem}>Products</li>
               <li className={styles.listItem}>Menu</li>
               <Image src="/img/pizza-logo.png" alt="" width="80px" height="70px" />
               <li className={styles.listItem}>Events</li>
               <li className={styles.listItem}>Blog</li>
               <li className={styles.listItem}>Contact</li>
            </ul>
         </div>
         <Link href="/cart">
            <div className={styles.item}>
               <div className={styles.cart} style={{ cursor: "pointer" }}>
                  <Image src="/img/shopping-cart.png" alt="" width="30px" height="30px" />
                  <div className={styles.counter}>{quantity}</div>
               </div>
            </div>
         </Link>
      </div>
   );
};

export default Navbar;
