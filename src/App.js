import { useState, useEffect } from "react";
import ToDoList from "./components/ToDoList";
import Footer from "./components/Footer";
import styles from "./App.module.css";
//id=0
let id = 0;

function App() {
  const [items, setItems] = useState([
    { id: id, value: "Learn React!", complated: false },
  ]);
  const [toDoItem, setToDoItem] = useState("");

  const handleGetItem = (e) => setToDoItem(e.target.value);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (toDoItem) {
        id++;
        setItems((prev) => [
          ...prev,
          { id: id, value: toDoItem, complated: false },
        ]);
      }
    }
  };

  useEffect(() => {
    setToDoItem("");
  }, [items]);

  return (
    <>
      <section className={styles.todoapp}>
        <header className={styles.header}>
          <h1>todos</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              className={styles.newTodo}
              placeholder="What needs to be done?"
              value={toDoItem}
              onChange={handleGetItem}
              onKeyPress={handleKeyPress}
            />
          </form>
        </header>

        {/*This section should be hidden by default and shown when there are todos*/}
        <section className={styles.main}>
          <input className={styles.toggleAll} type={styles.checkbox} />
          <label>Mark all as complete</label>

          <>
            <ToDoList items={items} setItems={setItems} />
          </>
        </section>

        {/*This footer should hidden by default and shown when there are todos*/}
        <>
          <Footer items={items} />
        </>
      </section>

      <footer className={styles.info}>
        <h2>
          Re-Coded with React by{" "}
          <a href="https://github.com/ozanorkun">Ozan ORKUN</a>
        </h2>
        <h2>We &#128153; React</h2>
      </footer>
    </>
  );
}

export default App;
