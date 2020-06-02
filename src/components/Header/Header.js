import React from 'react';
import { Col, Input, Layout, Row } from 'antd';

import './Header.css';

const { Search } = Input;

const AntHeader = Layout.Header;

function Header({ onChange, onSearch, searchName }) {
  return (
    <AntHeader>
      <Row align="middle">
        <Col span={12}>
          <span
            className="Header-title"
          >
            Search for a repo name:
          </span>
        </Col>
        <Col span={12}>
          <Search
            style={{
              verticalAlign: 'middle'
            }}
            placeholder="type here..."
            enterButton="Search"
            size="large"
            onChange={onChange}
            onSearch={onSearch}
            value={searchName}
          />
        </Col>
      </Row>
    </AntHeader>
  )
}

export default Header;
