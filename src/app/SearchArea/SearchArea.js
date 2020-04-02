import React from "react";
import { Row, Col } from "antd";
import SearchByCoordinate from "./SearhByCoordinate";
import SearchByLocation from "./SearchByLocation";

import "./SearchArea.css";

export default () => {
  return (
    <div className="search-area">
      <h1>Search Area</h1>
      <Row>
        <Col span={12}>
          <SearchByCoordinate />
        </Col>
        <Col span={12}>
          <SearchByLocation />
        </Col>
      </Row>
    </div>
  );
};
