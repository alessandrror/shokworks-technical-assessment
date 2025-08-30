"use client";

import Image from "next/image";
import styles from "./carousel.module.css";
import { useState, Children, ReactNode } from "react";

type CarouselProps = {
  children: ReactNode;
};

export default function Carousel({ children }: CarouselProps) {
  const items = Children.toArray(children);
  const totalItems = items.length;

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex(prevIndex => (prevIndex + 1) % totalItems);
  };

  const handlePrev = () => {
    setActiveIndex(prevIndex => (prevIndex - 1 + totalItems) % totalItems);
  };

  const getPositionClassName = (index: number): string => {
    const diff = (index - activeIndex + totalItems) % totalItems;

    switch (diff) {
      case 0:
        return styles.active;
      case 1:
        return styles.right1;
      case totalItems - 1:
        return styles.left1;
      case 2:
        return styles.right2;
      case totalItems - 2:
        return styles.left2;
      case 3:
        return styles.right3;
      case totalItems - 3:
        return styles.left3;
      default:
        return styles.hidden;
    }
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel}>
        {items.map((child, index) => (
          <div
            key={index}
            className={`${styles.cardWrapper} ${getPositionClassName(index)}`}
          >
            {child}
          </div>
        ))}
      </div>

      <div className={styles.navigation}>
        <button title="Previous" type='button' onClick={handlePrev}>
          <Image priority width={16} height={16} src='/arrow-left.svg' alt='Previous' />
        </button>
        <button title="Next" type='button' onClick={handleNext}>
          <Image priority width={16} height={16} src='/arrow-right.svg' alt='Next' />
        </button>
      </div>
    </div>
  );
}
