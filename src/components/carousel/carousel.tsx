"use client";

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
    if (index === activeIndex) {
      return styles.active;
    }

    const nextIndex = (activeIndex + 1) % totalItems;
    const prevIndex = (activeIndex - 1 + totalItems) % totalItems;
    const next2Index = (activeIndex + 2) % totalItems;
    const prev2Index = (activeIndex - 2 + totalItems) % totalItems;

    switch (index) {
      case nextIndex:
        return styles.right1;
      case prevIndex:
        return styles.left1;
      case next2Index:
        return styles.right2;
      case prev2Index:
        return styles.left2;
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
        <button type='button' onClick={handlePrev}>
          ←
        </button>
        <button type='button' onClick={handleNext}>
          →
        </button>
      </div>
    </div>
  );
}
