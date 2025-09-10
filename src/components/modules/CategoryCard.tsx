import React from "react";
import Image from "next/image";
import styles from "@/modules/styles/categoryCard/route.module.css";

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
    <ul className={styles.list}>
      {data.map((item, index) => (
        <li key={index}>
          {item.name}
          <Image
            alt={item.name}
            src={`/images/${item.name}.png`}
            width={240}
            height={144}
          />
          <p>{item.title}</p>
        </li>
      ))}
    </ul>
  );
};

export default CategoryCard;
