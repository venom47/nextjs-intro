import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

async function getMovies() {
  const API_KEY = process.env.API_KEY;
  const { results } = await (
    await fetch("http://localhost:3000/api/movies")
  ).json();
  return results;
}

export default async function Home() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <Link key={movie.id} href={`/movies/${movie.title}/${movie.id}`}>
          <div className={styles.movie}>
            <Image
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt=""
              width={200}
              height={300}
              priority={true}
            />
            <h4>{movie.title}</h4>
          </div>
        </Link>
      ))}
    </div>
  );
}
