"use client";
import { sp } from "@/utils/replaceNumber";
import { ProfileTypes } from "@/models/interface/ProfileTypes";
import styles from "@/modules/styles/adminCard/route.module.css";
import { useRouter } from "next/navigation";
import { AdminDelete } from "@/helper/adminCard/deleteHandler";

interface AdminProps {
  data: ProfileTypes;
}

const AdminCard = ({ data }: AdminProps) => {
  const { title, location, description, price, _id } = data;

  const router = useRouter();
  const deleteHandler = async (_id: string) => {
    await AdminDelete({_id, router});
  };

  return (
    <div className={styles.container}>
      <h4 className={styles.container__title}>{title}</h4>
      <p>{description}</p>
      <div className={styles.container__info}>
        <span>{location}</span>
        <span>{sp(price)}</span>
      </div>

      <div className="flex  gap-3 mb-4 mt-6">
        <button className={styles.container__publish}>انتشار</button>
        <button
          className={styles.container__delete}
          onClick={() => deleteHandler(_id)}
        >
          حذف
        </button>
        <button
          className={styles.container__details}
          onClick={() => router.push(`/buy-residential/${_id}`)}
        >
          جزییات
        </button>
      </div>
    </div>
  );
};

export default AdminCard;
