import React from "react";
import styles from "@/modules/styles/itemList/route.module.css";

interface ItemProps {
  data: string[];
}
const ItemList = ({ data }: ItemProps) => {
  console.log(data);
  return (
    <>
      {data.length ? (
        <ul className={styles.list}>
          {data.map((item, index) => (
            <li className={styles.list__item} key={index}>
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <span>موردی ذکر نشده است</span>
      )}
    </>
  );
};

export default ItemList;
