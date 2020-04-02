import React from "react";
import { Card, Button } from "antd";
import { Link } from "react-router-dom";
import "./Gallery.css";

export default () => {
  const { Meta } = Card;
  return (
    <div className="gallery">
      {/* <Link to="/favourites-list">favourites-list</Link> */}
      <div className="pictures">
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src="https://farm66.staticflickr.com/65535/49719786923_ff2df2bdaa.jpg"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </div>
    </div>
  );
};
