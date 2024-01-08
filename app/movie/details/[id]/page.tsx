import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";

async function getMovieById(id: string) {
  const res = await fetch(`https://www.omdbapi.com/?apikey=b85c49dd&i=${id}&plot=full`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page({ params: { id } }: { params: { id: string } }) {
  const movie = await getMovieById(id);

  const ratings = movie.Ratings || [];

  if (movie.Response === "False") {
    return (
      <div className={styles.container}>
        <h2>Movie Not Found!</h2>
        <Link href="/" className="returnLink">
          Return to Home Page
        </Link>
      </div>
    );
  }

  return (
    <main className={styles.container} role="main">
      <h1 className={styles.movieTitle}>{movie.Title}</h1>
      <div className={styles.flexContainer}>
        <figure>
          <Image src={movie.Poster} alt={movie.Title} layout="responsive" width={300} height={450} />
        </figure>
        <div className={styles.detailsContainer}>
          <p>
            <strong>Genre:</strong> {movie.Genre}
          </p>
          <p>
            <strong>Year:</strong> {movie.Year}
          </p>
          <p>
            <strong>Description:</strong> {movie.Plot}
          </p>
          <section aria-labelledby="ratings">
            <ul>
              {ratings.map((rating: { Source: string; Value: string }) => (
                <li key={rating.Source}>
                  <p>
                    {rating.Source}: <span aria-label={`Rating by ${rating.Source}`}>{rating.Value}</span>
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
