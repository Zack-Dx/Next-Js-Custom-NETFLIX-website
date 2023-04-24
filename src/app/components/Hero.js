import React from "react";
import Image from "next/image";
import styles from "@/app/styles/common.module.css";
import heroStyles from "@/app/styles/hero.module.css";

import Link from "next/link";
const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <main className={heroStyles.main_section}>
        <div className={styles.container}>
          <div className={styles.grid_two_section}>
            <div className={heroStyles.hero_content}>
              <h1>{title} </h1>
              <p>
                From award-winning dramas to blockbuster hits, we&apos;re the
                best in the business. Discover your next favorite film with us.
              </p>
              <Link href={"/movies"}>
                <button>Explore Movies</button>
              </Link>
            </div>
            <div className={heroStyles.hero_image}>
              <Image
                src={imageUrl}
                alt="Watching Netflix"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
