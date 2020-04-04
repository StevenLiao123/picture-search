import React, { Component } from "react";
import { Form, Input, Button, message } from "antd";

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

class AddForm extends Component {
  state = {
    location: {},
  };

  render() {
    const onFinish = values => {
      this.setState({
          location: values
      }, () => {
        this.props.getLocation(this.state.location);
      })
    };

    const onFinishFailed = errorInfo => {
      message.error("Please input the name, latitude and longtitude!");
    };

    return (
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true
        }}
        onFinishFailed={onFinishFailed}
        onFinish={onFinish}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input name!"
            }
          ]}
        >
          <Input type="string"/>
        </Form.Item>

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
            Confirm
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default AddForm;
