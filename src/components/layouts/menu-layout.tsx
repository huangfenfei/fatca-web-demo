import { FileExcelOutlined, SearchOutlined, UsbOutlined, UserAddOutlined } from "@ant-design/icons";
import { Layout, Menu, Row, Image, GetProp, MenuProps } from "antd";
import { useRouter } from 'next/router';
import React from "react";

const { Header, Content, Sider } = Layout;

type MenuItem = GetProp<MenuProps, 'items'>[number];

function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
    onClick?: Promise<boolean>
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        onClick
    } as MenuItem;
}

const MenuLayout = () => {
    const router = useRouter();

    // const items: MenuItem[] = [
    //     getItem('Add FATCA & CRS', '1', <UserAddOutlined />, router.push('/add-fatca-crs')),
    //     getItem('Inquiry', '2', <SearchOutlined />, router.push('/inquiry')),
    //     getItem('Gen XML', '3', <FileExcelOutlined />)
    // ]
    const items: MenuProps['items'] = [
        {
            label: 'Add FATCA & CRS',
            key: 'add',
            icon: <UserAddOutlined />,
            onClick: e => router.push('/add-fatca-crs')
        },
        {
            label: 'Inquiry',
            key: 'inquiry',
            icon: <SearchOutlined />,
            onClick: e => router.push('/inquiry')
        },
        {
            label: 'Generate XML',
            key: 'xml',
            icon: <FileExcelOutlined />,
            onClick: e => router.push('/generate-xml')
        },
        {
            label: 'Batch Result',
            key: 'batch',
            icon: <UsbOutlined />,
            onClick: e => router.push('/batch-result')
        },
    ];

    return (
        <Sider width={300}>
            <Row justify="center" className="bg-white" style={{ height: 110 }}>
                <Image src="assets/images/fatca-logo.png" width={200} alt="Logo" preview={false} />
            </Row>
            <Menu
                mode="inline"
                defaultSelectedKeys={["2"]}
                style={{ height: "88%", borderRight: 0 }}
                items={items}
            />
        </Sider>
    );
}

export default MenuLayout;