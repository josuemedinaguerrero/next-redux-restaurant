import PizzaCard from "./PizzaCard";
import styles from "../styles/PizzaListModule.module.css";

const PizzaList = ({ pizzaList = [] }) => {
   return (
      <div className={styles.container}>
         <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
         <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dignissimos cumque
            accusamus, exercitationem soluta incidunt quae dolorum iusto fugiat? Harum, quae
            doloribus? Quasi inventore perferendis
         </p>
         <div className={styles.wrapper}>
            {pizzaList.map((pizza) => (
               <PizzaCard key={pizza._id} pizza={pizza} />
            ))}
         </div>
      </div>
   );
};

export default PizzaList;
