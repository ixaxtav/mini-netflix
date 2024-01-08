import Link from "next/link";
import styles from "./thumbnail.module.scss";
import Image from "next/image";

interface Movie {
  imdbID: string;
  Poster: string;
  Title: string;
}

interface ThumbnailProps {
  movie: Movie;
}

export default function Thumbnail({ movie }: ThumbnailProps) {
  return (
    <article className={styles.card}>
      <Link href={`/movie/details/${movie.imdbID}`}>
        <div className={styles.cardLink}>
          <Image src={movie.Poster} alt={`Poster of the movie ${movie.Title}`} width={300} height={450} />
        </div>
      </Link>
    </article>
  );
}
