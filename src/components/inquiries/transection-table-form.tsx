import { DeleteOutlined, FormOutlined, PrinterOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Col, Popconfirm, Row, Space, Table } from "antd";
import React, { useState } from "react";
import { ValueType } from "tailwindcss/types/config";

const TransectionTableForm = () => {

    const [dataSource, setDataSource] = useState([
        {
            key: '0',
            customerName: 'Test Test01',
            id: '111111111111',
            type: 'บัตรประชาชน',
            rmNo: 'RM00140000000000111',
            lastUpdate: '2024-04-16 10:45:00'
        },
        {
            key: '1',
            customerName: 'Test Test02',
            id: '111111111112',
            type: 'บัตรประชาชน',
            rmNo: 'RM00140000000000112',
            lastUpdate: '2024-04-16 17:30:00'
        },

    ]);

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const onSelectChange = (selectedRowKeys: React.SetStateAction<never[]>) => {
        setSelectedRowKeys(selectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    const columns = [
        {
            title: 'Customer Name',
            dataIndex: 'customerName',
            width: '20%',
            align: 'center',
        },
        {
            title: 'ID Number',
            dataIndex: 'id',
            width: '15%',
            align: 'center',

        },
        {
            title: 'ID Type',
            dataIndex: 'type',
            width: '15%',
            align: 'center',

        },
        {
            title: 'Customer RM No.',
            dataIndex: 'rmNo',
            width: '20%',
            align: 'center',

        },
        {
            title: 'Last Update',
            dataIndex: 'lastUpdate',
            width: '15%',
            align: 'center',

        },
        {
            title: 'Action',
            dataIndex: 'operation',
            width: '15%',
            align: 'center',
            render: (text: ValueType, record: { key: string; }) => (
                <div>
                    <Space style={{ gap: 10 }}>
                        {/* <Button type="primary"><SearchOutlined /></Button>
                        <Button type="primary" style={{ backgroundColor: "#FEAC00" }}><FormOutlined /></Button>
                        <Popconfirm title="Are you delete?" onConfirm={() => handleDelete(record.key)}>
                            <Button type="primary" danger><DeleteOutlined /></Button>
                        </Popconfirm>
                        <Button type="default"><PrinterOutlined /></Button> */}

                        <SearchOutlined />
                        <FormOutlined />
                        <Popconfirm title="Are you delete?" onConfirm={() => handleDelete(record.key)}>
                            <DeleteOutlined />
                        </Popconfirm>
                        <PrinterOutlined />
                    </Space>
                </div>
            ),
        },
    ];

    const handleDelete = (key: React.Key) => {

    };

    return (
        <div>
            <Table style={{ marginTop: 30 }} rowSelection={rowSelection} columns={columns} dataSource={dataSource} />
            <Space style={{ width: "100%", justifyContent: "right" }}>
                <Row gutter={24}>
                    <Col span={24}>
                        <Button type="primary" htmlType="submit" style={{ width: 100, justifyContent: "center" }}>Print</Button>
                    </Col>
                </Row>
            </Space>
        </div>
    );
}

export default TransectionTableForm;