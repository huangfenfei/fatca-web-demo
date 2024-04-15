import { DeleteFilled, DeleteOutlined, FormOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Popconfirm, Space, Table } from "antd";
import React, { useState } from "react";
import { ValueType } from "tailwindcss/types/config";

const SearchTableResultForm = () => {

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

    const defaultColumns = [
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
                    <Space style={{ gap: 5 }}>
                        <Button type="primary"><SearchOutlined /></Button>
                        <Button type="primary" style={{ backgroundColor: "#FEAC00" }}><FormOutlined /></Button>
                        <Popconfirm title="Are you delete?" onConfirm={() => handleDelete(record.key)}>
                            {/* <DeleteFilled /> */}
                            <Button type="primary" danger><DeleteOutlined /></Button>
                        </Popconfirm>

                    </Space>


                </div>

            ),
        },
    ];

    const handleDelete = (key: React.Key) => {

    };

    return (
        <div>
            <Table style={{ marginTop: 30 }} dataSource={dataSource} columns={defaultColumns} pagination={false} />
        </div>
    );
}

export default SearchTableResultForm;