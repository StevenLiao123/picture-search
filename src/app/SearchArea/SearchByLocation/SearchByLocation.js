import React, { Component } from "react";
import { Form, Select, Button, Modal, message } from "antd";
import locationList from "../../config/locationConfig";
import { connect } from 'react-redux';
import { setLatitude, setLongtitude, receivePhotosData } from '../../redux/actions';
import AddForm from "./add-form";
import "./SearchByLocation.css";

const { Option } = Select;

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

class SearchByLocation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: {},
      showModalStatus: 0 // the status of modal, 0: both are hidden, 1: show add modal
    };
  }

  getOptions = locationList => {
    return locationList.map(location => (
      <Option key={location.name || null} value={location.name}>
        {location.name}
      </Option>
    ));
  };

  showAddModal = () => {
    this.setState({
      showModalStatus: 1
    });
  };

  isEmptyObject = obj => {
    for (var n in obj) {
      return false;
    }
    return true;
  };

  addLocation = () => {
    if(!this.isEmptyObject(this.state.location)) {
      locationList.push(this.state.location);
      this.options = this.getOptions(locationList);
      this.setState({
        showModalStatus: 0
      });
    } else {
      message.error("Please press confirm button first!");
    }

  };

  // hide the modal
  handleCancel = () => {
    this.setState({
      showModalStatus: 0
    });
  };

  getLocation = location => {
    this.setState({
      location
    });
  };

  componentWillMount() {
    this.options = this.getOptions(locationList);
  }

  render() {
    const { showModalStatus } = this.state;

    const onFinish = async values => {
      const selectedLocation = locationList.find(location => location.name === values.location);
      this.props.receivePhotosData(selectedLocation.lat, selectedLocation.lon, 1);
      this.props.setLatitudeValue(selectedLocation.lat);
      this.props.setLongtitudeValue(selectedLocation.lon);
    };

    const onFinishFailed = errorInfo => {
      message.error("Please input the right location!");
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
        className="search-by-location"
      >
        <Form.Item
          label="Location"
          name="location"
          rules={[
            {
              required: true,
              message: "Please input location!"
            }
          ]}
        >
          <Select>{this.options}</Select>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button
            type="primary"
            htmlType="submit"
            style={{ marginRight: "15px", marginBottom: "15px" }}
          >
            Search
          </Button>
          <Button type="primary" onClick={this.showAddModal}>
            Add location
          </Button>
        </Form.Item>

        <Modal
          title="Add a location"
          visible={showModalStatus === 1}
          onOk={this.addLocation}
          onCancel={this.handleCancel}
        >
          <AddForm getLocation={this.getLocation}/>
        </Modal>
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
)(SearchByLocation);
