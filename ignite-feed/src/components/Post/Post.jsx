import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/camila-becker.png"
          />
          <div className={styles.authorInfo}>
            <strong>Camila Becker</strong>
            <span>Desenvolvedora FullStack</span>
          </div>
        </div>

        <time title="21 de Janeiro às 11:03" dateTime="2023-01-21 11:03:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href="#">camila.design/doctorcare</a>
        </p>
        <p>
          <a className={styles.hashtag} href="#">
            #novoprojeto
          </a>
          <a className={styles.hashtag} href="#">
            #nlw
          </a>
          <a className={styles.hashtag} href="#">
            #rocketseat
          </a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <div>
          <button type="submit">Publicar</button>
        </div>
      </form>
    </article>
  );
}
