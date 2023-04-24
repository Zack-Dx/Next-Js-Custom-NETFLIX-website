import React from "react";
import styles from "@/app/styles/common.module.css";
import Moviecard from "../components/Moviecard";

const Movie = async () => {
  const url = process.env.RAPID_URL;
  const options = {
    method: "GET",
    headers: {
      "content-type": "application/octet-stream",
      "X-RapidAPI-Key": process.env.RAPID_KEY,
      "X-RapidAPI-Host": process.env.RAPID_HOST,
    },
  };
  const response = await fetch(url, options);
  const data = await response.json();
  const movies = data.titles;

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series and Movie</h1>
          <div className={styles.card_section}>
            {movies.map((movie) => {
              return <Moviecard key={movie.id} {...movie} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Movie;
