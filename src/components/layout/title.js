import { NavBar, Icon } from 'antd-mobile';
import { hashHistory } from 'react-router'
import React, { Component } from 'react';
import './title.less'
const Title = ({ name }) => (
  <div className="layout-title">
    <NavBar
      mode="dark"
      icon={<Icon type="left" />}
      rightContent={[
        <img
          onClick={() => hashHistory.push('/')}
          style={{ width: '100%', height: '100%' }}
          key="1"
          src="//o4j806krb.qnssl.com/public/images/cnodejs_light.svg"
        />
      ]}
    >
      {name}
    </NavBar>
  </div>
);
export default Title;
