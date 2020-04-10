
import React from 'react';
import { Layout, Menu } from 'antd';
// import {
//   AppstoreOutlined,
//   BarChartOutlined,
//   CloudOutlined,
//   ShopOutlined,
//   TeamOutlined,
//   UserOutlined,
//   UploadOutlined,
//   VideoCameraOutlined,
// } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const Basic = (props) => (
  <Layout>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1">
          <span className="nav-text">TFS Deploy</span>
        </Menu.Item>
        {/* <Menu.Item key="2">
          <UserOutlined />
          <span className="nav-text">nav 1</span>
        </Menu.Item>
        <Menu.Item key="3">
          <VideoCameraOutlined />
          <span className="nav-text">nav 2</span>
        </Menu.Item>
        <Menu.Item key="4">
          <UploadOutlined />
          <span className="nav-text">nav 3</span>
        </Menu.Item> */}
      </Menu>
    </Sider>
    <Layout className="site-layout" style={{ marginLeft: 200 }}>
      <Header className="site-layout-background" style={{ padding: 0 }} />
      <Content className="site-content">
        <div className="site-layout-background" style={{ padding: 24}}>
          {props.children}
        </div>
      </Content>
      <Footer>Ocelot Team - B2B {new Date().getFullYear()}</Footer>
    </Layout>
  </Layout>
)

export default Basic;