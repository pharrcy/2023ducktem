import React from "react";
import styles from "./PostThumbnail.module.css";

type PostThumbnailProps = {
  id: number;
  title: string;
  image: string;
};

const PostThumbnail: React.FC<PostThumbnailProps> = ({ id, title, image }) => {
  return (
    <div className={styles.thumbnail}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles["title-container"]}>
        <h2 className={styles.title}>{title}</h2>
      </div>
    </div>
  );
};

export default PostThumbnail;
