import styles from "../app/page.module.css";
import Image from "next/image";

export default function Content({ data }) {
  const renderImage = () => {
   
    if (data.base64ImageData) {
      return (
        <img
          src={data.base64ImageData}
          alt={data.title}
          style={{ width: "100%", height: "auto" }}
        />
      );
    }
  }
  return (
    <div>
      <div className={styles.title}>{data.title}</div>
      <Image
        width={1000}
        height={500}
        style={{ width: "auto", height: 500 }}
        src={data.image || data.url}
        alt={data.title}
        priority={true}
      />
      <div className={styles.description}>{data.explanation}</div>
    </div>
  );
}
