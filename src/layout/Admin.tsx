import React, { useState } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  BarsOutlined,
  PlusOutlined,
} from "@ant-design/icons";

import { NavLink } from "react-router-dom";

const LayoutAdmin = (props: any) => {
  const [collapsed, setCollapsed] = useState(false);

  const { Header, Content, Footer, Sider } = Layout;
  const { SubMenu } = Menu;

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <SubMenu key="sub1" icon={<PieChartOutlined />} title="Products">
              <Menu.Item key="1" icon={<BarsOutlined />}>
                <NavLink to="/admin/products">List Product</NavLink>
              </Menu.Item>
              <Menu.Item key="1" icon={<PlusOutlined />}>
                <NavLink to="/admin/products/add">Add Product</NavLink>
              </Menu.Item>
            </SubMenu>

            <Menu.Item key="2" icon={<DesktopOutlined />}>
              <NavLink to="/admin/categories">Categoryes</NavLink>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>{props.children}</Content>
          <Footer style={{ textAlign: "center" }}>
            Created By Nguyen Van Duc | 2021 All rights reserved.
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default LayoutAdmin;
