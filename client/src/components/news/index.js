import React from "react";
import Card from "./card";
import "./news.scss";
import NoImage from 'assets/noImage.png'

function news() {
  const news = {
    imageUrl: NoImage,

  };
  const news_2 = {
    imageUrl: NoImage,
  };
  const news_3 = {
    imageUrl: NoImage,
  };

  return (
    <div className="news">
      <Card {...news} />
      <Card {...news_2} />
      <Card {...news_3} />
    </div>
  );
}

export default news;
