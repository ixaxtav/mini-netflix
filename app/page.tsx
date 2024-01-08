import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.scss";
import Thumbnail from "./components/thumbnail";

interface Movie {
  Title: string;
  Year: string;
  Poster: string;
  Genre: string;
  imdbID: string;
}

async function getWarMovies(): Promise<Movie[]> {
  const res = await fetch(`https://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=war&type=movie`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const { Search } = await res.json();
  return Search.slice(0, 5);
}

export default async function Home() {
  const data = await getWarMovies();

  return (
    <main className={styles.container} role="main">
      <h1>Only On Mini Netflix</h1>
      <section className={styles.cardRow}>
        {data.map((movie) => (
          <Thumbnail movie={movie} />
        ))}
      </section>
    </main>
  );
}
