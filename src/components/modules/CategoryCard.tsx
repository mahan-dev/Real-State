import React from "react";
import Image from "next/image";
import styles from "@/modules/styles/categoryCard/route.module.css";
import Link from "next/link";

interface CategoryCardProps {
  data: CategoryItem[];
}

interface CategoryItem {
  name: string;
  title: string;
}

const CategoryCard = ({ data }: CategoryCardProps) => {
  console.log(data);
  return (
    <ul className={styles.categoryList}>
      {data.map((item) => (
        <li key={item.name}>
          <Link
            href={`/buy-residential?category=${item.name}`}
          >
            <Image
              className={styles.categoryList__image}
              alt={item.name}
              src={`/images/${item.name}.png`}
              width={240}
              height={144}
            />
            <p className="text-center my-3">{item.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoryCard;
