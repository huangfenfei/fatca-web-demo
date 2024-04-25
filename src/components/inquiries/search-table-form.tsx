import { DeleteFilled, DeleteOutlined, FormOutlined, PrinterOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Popconfirm, Space, Table } from "antd";
import React, { useState } from "react";
import { ValueType } from "tailwindcss/types/config";

const SearchTableForm = () => {

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const onSelectChange = (selectedRowKeys: React.SetStateAction<never[]>) => {
        setSelectedRowKeys(selectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    const [dataSource, setDataSource] = useState([
        {
            key: '0',
            no: 1,
            idNumber: '111111111111',
            idType: 'เลขที่บัตรประชาชน',
            custName: 'นางสาวทดสอบ1 ทดสอบ1',
            transDate: '2024-04-22',
            fatcaStatus: 'Indicia',
            irsDoc: 'W8-BEN',
            docSupport: 'บัตรประชาชนไทย',
            transStatus: 'บัตรประชาชน',
            userEntry: 'OBJU',
            branchNo: '0111',
            sendDocDate: '2024-04-22',
            hoReceiveStatus: '-',
            hoReceiveDate: '-',
            hoRemark: '-',
        },
        {
            key: '1',
            no: 2,
            idNumber: '111111111112',
            idType: 'เลขที่บัตรประชาชน',
            custName: 'นางสาวทดสอบ2 ทดสอบ2',
            transDate: '2024-04-22',
            fatcaStatus: 'Indicia',
            irsDoc: 'W8-BEN',
            docSupport: 'บัตรประชาชนไทย',
            transStatus: 'บัตรประชาชน',
            userEntry: 'OBJU',
            branchNo: '0111',
            sendDocDate: '2024-04-22',
            hoReceiveStatus: '-',
            hoReceiveDate: '-',
            hoRemark: '-',
        },

    ]);

    const defaultColumns = [
        {
            title: 'No.',
            dataIndex: 'no',
            align: 'center',
            width: 80,
            fixed: 'left',
        },
        {
            title: 'ID Number',
            dataIndex: 'idNumber',
            align: 'center',
            width: 200,
        },
        {
            title: 'ID Type',
            dataIndex: 'idType',
            align: 'center',
            width: 200,
        },
        {
            title: 'Customer Name',
            dataIndex: 'custName',
            align: 'center',
            width: 200,
        },
        {
            title: 'Transaction Date',
            dataIndex: 'transDate',
            align: 'center',
            width: 200,
        },
        {
            title: 'Fatca Status',
            dataIndex: 'fatcaStatus',
            align: 'center',
            width: 200,
        },
        {
            title: 'IRS Document',
            dataIndex: 'irsDoc',
            align: 'center',
            width: 200,
        },
        {
            title: 'Document Support',
            dataIndex: 'docSupport',
            align: 'center',
            width: 200,
        },
        {
            title: 'Transaction Status',
            dataIndex: 'transStatus',
            align: 'center',
            width: 200,
        },
        {
            title: 'User Entry',
            dataIndex: 'userEntry',
            align: 'center',
            width: 200,
        },
        {
            title: 'Branch No./OC Code',
            dataIndex: 'branchNo',
            align: 'center',
            width: 200,
        },
        {
            title: 'Send Doc Date',
            dataIndex: 'sendDocDate',
            align: 'center',
            width: 200,
        },
        {
            title: 'HO Receive Status',
            dataIndex: 'hoReceiveStatus',
            align: 'center',
            width: 200,
        },
        {
            title: 'Ho Receive Date',
            dataIndex: 'hoReceiveDate',
            align: 'center',
            width: 200,
        },
        {
            title: 'Ho Remark',
            dataIndex: 'hoRemark',
            align: 'center',
            width: 300,
        },
        {
            title: 'Action',
            dataIndex: 'operation',
            align: 'center',
            width: 150,
            fixed: 'right',
            render: (text: ValueType, record: { key: string; }) => (
                <div>
                    <Space style={{ gap: 10 }}>
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
            <Table style={{ marginTop: 30 }} rowSelection={rowSelection} dataSource={dataSource} columns={defaultColumns} scroll={{ x: 3500, y: 300 }}/>
        </div>
    );
}

export default SearchTableForm;