import React, { Component } from "react";
import { Form, Input, Button, message } from "antd";
import { connect } from 'react-redux';
import { setLatitude, setLongtitude, receivePhotosData } from '../../redux/actions';
import "./SearchByCoordinate.css";

const layout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 12
  }
};
const tailLayout = {
  wrapperCol: {
    offset: 6,
    span: 12
  }
};

class SearchByCoordinate extends Component {
  render() {
    const onFinish = async values => {
      this.props.receivePhotosData(values.lat, values.lon, 1);
      this.props.setLatitudeValue(values.lat);
      this.props.setLongtitudeValue(values.lon);
    };

    const onFinishFailed = errorInfo => {
      message.error("Please input the right latitude and longtitude!");
    };

    return (
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="search-by-coordinate"
      >
        <Form.Item
          label="Latitude"
          name="lat"
          rules={[
            {
              required: true,
              message: "Please input latitude!"
            }
          ]}
        >
          <Input type="float"/>
        </Form.Item>

        <Form.Item
          label="Longtitude"
          name="lon"
          rules={[
            {
              required: true,
              message: "Please input longtitude!"
            }
          ]}
        >
          <Input type="float"/>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Search
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setLatitudeValue: (lat) => dispatch(setLatitude(lat)),
    setLongtitudeValue: (lon) => dispatch(setLongtitude(lon)),
    receivePhotosData: (lat, lon, page) => dispatch(receivePhotosData(lat, lon, page)),
  }
}

export default connect(
  null,
  mapDispatchToProps
)(SearchByCoordinate);
