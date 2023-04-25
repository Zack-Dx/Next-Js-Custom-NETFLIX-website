import React from "react";
import Image from "next/image";
import styles from "@/app/styles/common.module.css";
import Link from "next/link";
const MovieCard = (movie) => {
  const { id, type, title, synopsis } = movie.jawSummary;
  return (
    <>
      <div key={id} className={styles.card}>
        <div className={styles.card_image}>
          <Image
            src={movie.jawSummary.backgroundImage.url}
            alt={title}
            height={200}
            width={250}
          />
        </div>
        <div className={styles.card_data}>
          <h2>{title.substring(0, 20)}</h2>
          <p>{`${synopsis.substring(0, 100)}...`}</p>
          <Link href={`/movies/${id}`}>
            <button>Read More</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
