import { ClipboardText, PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Task } from "../Task/Task";
import styles from "./Todo.module.css";

interface Task {
  id: string;
  title: string;
  isComplete: boolean;
}

export function Todo() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");
  const [countCompleteTasks, setCountCompleteTasks] = useState(0);

  const hasTask = tasks.length > 0;

  function handleNewTask(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        title: newTask,
        isComplete: false,
      },
    ]);
    setNewTask("");
  }

  function completeTask(completed: boolean) {
    completed
      ? setCountCompleteTasks((state) => state + 1)
      : setCountCompleteTasks((state) => state - 1);
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return taskToDelete !== task.id;
    });
    setTasks(tasksWithoutDeletedOne);
  }

  return (
    <>
      <form className={styles.createTodo} onSubmit={handleCreateTask}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          onChange={handleNewTask}
          value={newTask}
          required
        />
        <button type="submit">
          Criar
          <PlusCircle size={18} />
        </button>
      </form>
      <div className={styles.todoContainer}>
        <div className={styles.info}>
          <strong className={styles.infoCreated}>
            Tarefas criadas
            <span>{tasks.length}</span>
          </strong>
          <strong className={styles.infoDone}>
            Concluídas
            <span>
              {hasTask
                ? `${countCompleteTasks} de ${tasks.length}`
                : tasks.length}
            </span>
          </strong>
        </div>
        <div className={!hasTask ? styles.todo : styles.todoWithoutBorder}>
          {hasTask ? (
            tasks.map((task) => {
              return (
                <Task
                  key={task.id}
                  task={task}
                  onCompletedTask={completeTask}
                  onDeleteTask={deleteTask}
                />
              );
            })
          ) : (
            <div className={styles.emptyTask}>
              <ClipboardText size={56} className={styles.clipboard} />
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
