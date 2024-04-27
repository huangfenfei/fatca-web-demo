import React, { useEffect, useState } from "react";
import { Col, Layout, Row, Image } from "antd";
import { LogoutOutlined, UserAddOutlined } from "@ant-design/icons";
import { useMsal } from "@azure/msal-react";
const { Header, Content, Sider } = Layout;

const HeaderLayout = ({ name }: { name: string }) => {
    const [accountName, setAccountName] = useState("Unknown");
    const { instance, accounts } = useMsal();
    const isAuthenticated = accounts.length > 0;
    
    useEffect(() => {
        if (isAuthenticated) {
            const accInfo = accounts[0];
            setAccountName(accInfo.name ?? 'Unknown');
        }
    }, []);

    return (
        <Header style={{ background: '#4F3793', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 100 }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Image src="assets/images/scb-facta-logo.png" width={480} alt="Logo" preview={false} />
                {/* <span style={{ fontSize: 30, color: "#fff", fontWeight: "bold" }}>FATCA & CRS SYSTEM</span> */}
            </div>
            <div style={{ marginRight: '8px' }}>
                <Row justify="end" style={{ textAlign: 'right', height: 28 }}>
                    <Col span={24}>
                        <span style={{ color: "#fff", fontWeight: "bold" }}> <UserAddOutlined /> {accountName}</span>
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
    );
}

export default HeaderLayout;