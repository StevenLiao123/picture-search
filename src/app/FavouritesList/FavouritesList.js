import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Col, Row } from "antd";
import { connect } from "react-redux";
import "./FavouritesList.css";

class FavouritesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: []
    };
  }

  getCard = () => {
    return this.props.favouritesPhoto.photos.map(photo => (
      <Col md={12} xs={24} key={photo.id}>
        <Card
          hoverable
          title={photo.title}
          bordered={false}
          style={{ marginBottom: "10px" }}
          cover={
            <img
              alt={photo.title}
              src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`}
            />
          }
        />
      </Col>
    ));
  };

  render() {
    return (
      <div className="favourites-list">
        <h1>Favourites list</h1>
        <div className="back-to-gallery">
          <Link to="/gallery"> Back to Gallery</Link>
        </div>
        <Row gutter={16}>
          {/* {
            this.getCard()
          } */}
          {this.props.favouritesPhoto.photos.length !== 0 ? (
            this.getCard()
          ) : (
            <Col lg={8} md={12} xs={24} style={{ textAlign: "center" }}>
              <h1>Sorry, no images for this position.</h1>
            </Col>
          )}
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    favouritesPhoto: state.FavouritesPhotos
  };
}

export default connect(mapStateToProps)(FavouritesList);
