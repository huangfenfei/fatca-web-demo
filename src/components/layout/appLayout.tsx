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
      <Header style={{ background: '#4F3793', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Image src="assets/images/scb-facta-logo.png" width={480} alt="Logo" preview={false} />
          {/* <span style={{ fontSize: 30, color: "#fff", fontWeight: "bold" }}>FATCA & CRS SYSTEM</span> */}
        </div>
        <div style={{ marginRight: '8px' }}>
          <Row justify="end" style={{ textAlign: 'right', height: 28 }}>
            <Col span={24}>
              <span style={{ color: "#fff", fontWeight: "bold" }}> <UserAddOutlined /> {user.name}</span>
            </Col>
          </Row>
          <Row justify="end" style={{ textAlign: 'right', height: 28 }}>
            <Col span={24}>
              <span style={{ color: "#fff", fontWeight: "inherit" }}>20-03-2024 16:30:00</span>
            </Col>
          </Row>
          <Row justify="end" style={{ textAlign: 'right' }}>
            <Col span={24}>
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                <span style={{ color: "#fff", fontWeight: "bold" }}><LogoutOutlined /> Logout</span>
              </a>
            </Col>
          </Row>
        </div>
      </Header>
      <Layout>
        <Sider width={300}>
          <Row justify="center" className="bg-white" style={{  height: 110 }}>
            <Image src="assets/images/fatca-logo.png" width={200} alt="Logo" preview={false} />
          </Row>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "88%", borderRight: 0 }}
            items={items}
          />
        </Sider>
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
