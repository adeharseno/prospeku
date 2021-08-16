  
import React from 'react';
import { Row, Spin } from 'antd';

const Loading = ({ size }) => {
  return (
    <Row type="flex" align="middle" justify="center" style={{ height: '100vh' }}>
      <Spin size={size || 'large'} />
    </Row>
  );
};

export default Loading;