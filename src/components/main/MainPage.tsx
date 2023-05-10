import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import AdBanner from "./AdBanner";
import PostThumbnail from "./PostThumbnail";
import styles from "./MainPage.module.css"

const MainPage: React.FC = () => {
  const postThumbnails = [
    { id: 1, title: "Post 1", image: "https://via.placeholder.com/150" },
    { id: 2, title: "Post 2", image: "https://via.placeholder.com/150" },
    { id: 3, title: "Post 3", image: "https://via.placeholder.com/150" },
    { id: 4, title: "Post 4", image: "https://via.placeholder.com/150" },
  ];

  return (
    <div className={styles.container}>
      <AdBanner/>
      <div className={styles["post-thumbnail-container"]}>
        {postThumbnails.map((post) => (
          <div key={post.id} className={styles["post-thumbnail"]}>
            <PostThumbnail {...post}/>
          </div>
        ))}
      </div>
      <div className={styles["post-thumbnail-container"]}>
        {postThumbnails.map((post) => (
          <div key={post.id} className={styles["post-thumbnail"]}>
            <PostThumbnail {...post}/>
          </div>
        ))}
      </div>
      <div className={styles["post-thumbnail-container"]}>
        {postThumbnails.map((post) => (
          <div key={post.id} className={styles["post-thumbnail"]}>
            <PostThumbnail {...post}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
