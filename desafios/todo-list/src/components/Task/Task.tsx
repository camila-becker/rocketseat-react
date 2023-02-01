import { Trash } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./Task.module.css";

interface Task {
  id: string;
  title: string;
  isComplete: boolean;
}

interface TaskProps {
  task: Task;
  onCompletedTask: (completed: boolean) => void;
  onDeleteTask: (task: string) => void;
}

export function Task({ task, onCompletedTask, onDeleteTask }: TaskProps) {
  const [completedTask, setCompletedTask] = useState(false);

  function handleCompletedTask(event: ChangeEvent<HTMLInputElement>) {
    task.isComplete = event.target.checked;
    setCompletedTask(task.isComplete);
    return onCompletedTask(task.isComplete);
  }

  function handleDeleteTask(event: FormEvent) {
    event.preventDefault();
    return onDeleteTask(task.id);
  }

  return (
    <>
      <form className={styles.task}>
        <input type="checkbox" onChange={handleCompletedTask} />
        <label className={completedTask ? styles.taskCompleted : ""}>
          {task.title}
        </label>
        <button onClick={handleDeleteTask}>
          <Trash size={20} />
        </button>
      </form>
    </>
  );
}
