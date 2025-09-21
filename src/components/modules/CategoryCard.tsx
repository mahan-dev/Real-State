import React from "react";
import Image from "next/image";
import styles from "@/modules/styles/categoryCard/route.module.css";
import Link from "next/link";
import { categories } from "@/constants/const";

interface CategoryCardProps {
  data: { [key: string]: string };
}

const CategoryCard = ({ data }: CategoryCardProps) => {
  return (
    <ul className={styles.categoryList}>
      {Object.keys(data).map((item) => (
        <li key={item}>
          <Link href={`/buy-residential?category=${item}`}>
            <Image
              className={styles.categoryList__image}
              alt={item}
              src={`/images/${item}.png`}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              priority
            />
            <p className="text-center my-3">{categories[item]}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoryCard;
