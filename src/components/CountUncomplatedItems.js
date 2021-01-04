import { useState, useEffect } from "react";
import styles from "../App.module.css";

function CountUncomplatedItems({ items }) {
  const [countValue, setCountValue] = useState(items.length);

  useEffect(() => {
    console.log(items);
    const count = items.filter((item) => item.complated === false).length;
    setCountValue(count);
  }, [items]);

  return (
    <span className={styles.todoCount}>
      <strong>{countValue} </strong>
      items left
    </span>
  );
}

export default CountUncomplatedItems;
