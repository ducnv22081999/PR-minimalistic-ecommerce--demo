import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  PieChartOutlined,
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
            <SubMenu key="sub1" icon={<PieChartOutlined />} title="Product">
              <Menu.Item key="1" icon={<BarsOutlined />}>
                <NavLink to="/admin/product">List Product</NavLink>
              </Menu.Item>
              <Menu.Item key="2" icon={<PlusOutlined />}>
                <NavLink to="/admin/product/add">Add Product</NavLink>
              </Menu.Item>
            </SubMenu>
            {/*  */}
            <SubMenu key="sub2" icon={<PieChartOutlined />} title="Category">
              <Menu.Item key="3" icon={<BarsOutlined />}>
                <NavLink to="/admin/category">List Category</NavLink>
              </Menu.Item>
              <Menu.Item key="4" icon={<PlusOutlined />}>
                <NavLink to="/admin/category/add">Add Category</NavLink>
              </Menu.Item>
            </SubMenu>
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
