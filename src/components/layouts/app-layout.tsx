import React, { ReactElement } from "react";
import Icon, {
  CalendarOutlined,
  FileExcelOutlined,
  LaptopOutlined,
  LogoutOutlined,
  MailOutlined,
  NotificationOutlined,
  SearchOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { GetProp, MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme, Avatar, Row, Col, Button, Dropdown, Image } from "antd";
import HeaderLayout from "./header-layout";
import MenuLayout from "./menu-layout";

const { Header, Content, Sider } = Layout;
type MenuItem = GetProp<MenuProps, 'items'>[number];

const items: MenuItem[] = [
  getItem('Add FATCA & CRS', '1', <UserAddOutlined />),
  getItem('Inquiry', '2', <SearchOutlined />),
  getItem('Gen XML', '3', <FileExcelOutlined />)
]

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const AppLayout = ({ children }: { children: ReactElement }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const user = {
    name: 'Somjai Tongdee',
  };

  const handleLogout = () => {
    console.log('Logged out');
  };

  return (
    <Layout className="h-screen">
      <HeaderLayout name="Somchai Marasri"/>
      <Layout>
        <MenuLayout/>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 100,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              overflow: "auto"
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default AppLayout;
