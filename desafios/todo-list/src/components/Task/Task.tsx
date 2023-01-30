import { Trash } from "phosphor-react";
import styles from "./Task.module.css";

export function Task() {
  return (
    <>
      <form className={styles.task}>
        <input type="checkbox" />
        <label>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </label>
        <button>
          <Trash size={20} />
        </button>
      </form>
    </>
  );
}
