"use client";

import Image from "next/image";
import styles from "./card.module.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "400",
});

interface CardProps {
  image: string;
  title: string;
  subtitle?: string;
  description: string;
}

export default function Card({
  image,
  title,
  subtitle,
  description,
}: CardProps) {
  return (
    <article className={`${poppins.className} ${styles.article}`}>
      <div className={styles.imageContainer}>
        <Image
          fill
          unoptimized
          src={image}
          alt={`${title} image`}
          className={styles.image}
        />
      </div>
      <h2 className={styles.title}>
        <span>{title}</span> <span>{subtitle}</span>
      </h2>
      <p className={styles.description}>{description}</p>
    </article>
  );
}
