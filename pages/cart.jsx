import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../redux/cartSlice";
import { useState } from "react";
import OrderDetail from "../components/OrderDetail";
import styles from "../styles/Cart.module.css";

const Cart = () => {
   const router = useRouter();
   const [cash, setCash] = useState(false);
   const dispatch = useDispatch();
   const cart = useSelector((state) => state.cart);

   const createOrder = async (data) => {
      try {
         const res = await axios.post("http://localhost:3000/api/orders", data);
         res.status === 201 && router.push("/orders/" + res.data._id);
         dispatch(reset());
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <div className={styles.container}>
         <div className={styles.left}>
            <table className={styles.table}>
               <thead>
                  <tr className={styles.trTitle}>
                     <th>Product</th>
                     <th>Name</th>
                     <th>Extras</th>
                     <th>Price</th>
                     <th>Quantity</th>
                     <th>Total</th>
                  </tr>
               </thead>
               <tbody>
                  {cart.products.map((product) => (
                     <tr key={product._id} className={styles.tr}>
                        <td>
                           <div className={styles.imgContainer}>
                              <Image src={product.img} layout="fill" objectFit="cover" alt="" />
                           </div>
                        </td>
                        <td>
                           <span className={styles.name}>{product.title}</span>
                        </td>
                        <td>
                           <span className={styles.extras}>
                              {product.extras.map((extra, id) => (
                                 <span key={id}>{extra.text}, </span>
                              ))}
                           </span>
                        </td>
                        <td>
                           <span className={styles.price}>${product.price}</span>
                        </td>
                        <td>
                           <span className={styles.quantity}>{product.quantity}</span>
                        </td>
                        <td>
                           <span className={styles.total}>${product.price * product.quantity}</span>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
         <div className={styles.right}>
            <div className={styles.wrapper}>
               <h2 className={styles.title}>CART TOTAL</h2>
               <div className={styles.totalText}>
                  <b className={styles.totalTextTitle}>Subtotal:</b>${cart.total}
               </div>
               <div className={styles.totalText}>
                  <b className={styles.totalTextTitle}>Discount:</b>$0.00
               </div>
               <div className={styles.totalText}>
                  <b className={styles.totalTextTitle}>Total:</b>${cart.total}
               </div>
               <button onClick={() => setCash(true)} className={styles.button}>
                  BUY NOW!
               </button>
            </div>
         </div>
         {cash && <OrderDetail total={cart.total} createOrder={createOrder} />}
      </div>
   );
};

export default Cart;
