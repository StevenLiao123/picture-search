import React, { Component } from "react";
import { Card, Col, Row, Button, message } from "antd";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  receivePhotosData,
  addPhotosToFavouritesList,
  resetPhotosData
} from "../redux/actions";
import { connect } from "react-redux";
import "./Gallery.css";

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 2
    };
  }

  addPhotoToList = (photo) => {
    this.props.addPhotosToFavouritesList(photo)
    message.success("Save to favourist list!");
  }

  getCard = () => {
    return this.props.photosData.photos.photo.map(photo => (
      <Col md={12} xs={24} key={photo.id}>
        <Card
          hoverable
          title={photo.title}
          bordered={false}
          style={{ marginBottom: "10px", textAlign: "center" }}
          cover={
            <img
              alt={photo.title}
              src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`}
            />
          }
        >
          <Button
            type="primary"
            onClick={() => this.addPhotoToList(photo)}
          >
            Add to list
          </Button>
        </Card>
      </Col>
    ));
  };

  isEmptyObject = obj => {
    for (var n in obj) {
      return false;
    }
    return true;
  };

  getNextPage = async () => {
    const { latitude, longtitude, photosData } = this.props;
    const { page } = this.state;
    let pageNumber = page;
    let photosDataPage = !this.isEmptyObject(photosData)
      ? photosData.photos.pages
      : null;
    if (pageNumber <= photosDataPage) {
      pageNumber = pageNumber + 1;
      this.setState(
        {
          page: pageNumber
        },
        () => this.props.receivePhotosData(latitude, longtitude, page)
      );
    } else {
      message.error("Sorry, no more images for this position.");
    }
  };

  resetPhotos = () => {
    this.props.resetPhotos();
  };

  render() {
    const { photosData } = this.props;
    const photo = photosData.stat === "ok" ? photosData.photos.photo : {};

    return (
      <div className="gallery">
        <h1>Gallery</h1>
        <div className="gallery-reset-list">
          {!this.isEmptyObject(photosData) ? (
            <Button type="link" onClick={this.resetPhotos}>
              Reset photo
            </Button>
          ) : null}
          <Link to="/favourites-list">Favourites-list -></Link>
        </div>
        <div className="gallery-next-page">
          {!this.isEmptyObject(photosData) ? (
            <Button type="link" onClick={this.getNextPage}>
              Next page
            </Button>
          ) : null}
        </div>
        <Row gutter={16}>
          {photo.length !== 0 && photosData.stat === "ok" ? (
            this.getCard()
          ) : (
            <Col lg={8} md={12} xs={24}>
              <h1>Sorry, no images for this position.</h1>
            </Col>
          )}
        </Row>
      </div>
    );
  }
}

Gallery.propTypes = {
  photosData: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    latitude: state.Latitude,
    longtitude: state.Longtitude,
    photosData: state.PhotosData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    receivePhotosData: (lat, lon, page) =>
      dispatch(receivePhotosData(lat, lon, page)),
    addPhotosToFavouritesList: photo =>
      dispatch(addPhotosToFavouritesList(photo)),
    resetPhotos: () => dispatch(resetPhotosData())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
