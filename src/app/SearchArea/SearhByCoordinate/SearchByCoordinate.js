import React from "react";
import { Form, Input, Button } from "antd";
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

export default () => {
  const onFinish = values => {
    console.log("Success:", values);
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
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
            message: "Please input number!"
          }
        ]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        label="Longtitude"
        name="Lon"
        rules={[
          {
            required: true,
            message: "Please input number!"
          }
        ]}
      >
        <Input/>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
