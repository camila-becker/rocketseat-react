import { PlusCircle } from "phosphor-react";
import { Task } from "../Task/Task";
import styles from "./Todo.module.css";

export function Todo() {
  return (
    <>
      <form className={styles.createTodo}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button type="submit">
          Criar
          <PlusCircle size={18} />
        </button>
      </form>
      <div className={styles.todoContainer}>
        <div className={styles.info}>
          <strong className={styles.infoCreated}>
            Tarefas criadas
            <span>0</span>
          </strong>
          <strong className={styles.infoDone}>
            Concluídas
            <span>0</span>
          </strong>
        </div>
        <div className={styles.todo}>
          <Task />
        </div>
      </div>
    </>
  );
}
