import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Post } from "./components/Post/Post";

import "./global.css";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
        </main>
      </div>
    </div>
  );
}

export default App;
