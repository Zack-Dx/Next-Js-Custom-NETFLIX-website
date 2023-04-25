import React from "react";
import styles from "@/app/styles/common.module.css";
import Image from "next/image";

const page = async ({ params }) => {
  const id = params.id;
  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
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
  const movie = data[0].details;

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.movie_title}>
          Netflix \ <span> {movie.type} </span>{" "}
        </h2>
        <div className={styles.card_section}>
          <div>
            <Image
              src={movie.backgroundImage.url}
              alt={movie.title}
              width={600}
              height={300}
            />
          </div>
          <div>
            <h1>{movie.title}</h1>
            <p>{movie.synopsis}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
