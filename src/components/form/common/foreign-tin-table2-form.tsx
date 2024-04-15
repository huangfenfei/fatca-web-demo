import React, { useContext, useEffect, useRef, useState } from 'react';
import { Button, Form, Input, Popconfirm, Select, Table } from 'antd';
import { DeleteFilled } from '@ant-design/icons';
import { ValueType } from 'rc-input/lib/interface';

const ForeignTINTableForm = () => {

    const [dataSource, setDataSource] = useState([
        {
            key: '0',
            no: '1',
            country: 'US',
            foreignTIN: '1111111111111',
            reason: 'A',
            reasonDetail: 'test test 1'
        },
        {
            key: '1',
            no: '2',
            country: 'TH',
            foreignTIN: '1111111111111',
            reason: 'A',
            reasonDetail: 'test test 2'
        },
    ]);

    const countryDataList = [
        {
            value: "US",
            text: "United State of America"
        },
        {
            value: "TH",
            text: "Thailand"
        },
        {
            value: "CH",
            text: "China"
        }
    ]

    const reasonDataList = [
        {
            value: "A",
            text: "Jurisdiction does not issue TIN"
        },
        {
            value: "B",
            text: "Account holder is unable to obtion TIN"
        },
        {
            value: "C",
            text: "TIN not required to be disclosed"
        }
    ]

    const handleCountryDropdownChange = (key: string, newOption: string) => {
        const newData = [...dataSource];
        const index = newData.findIndex((item) => key === item.key);
        if (index > -1) {
            newData[index].country = newOption;
            setDataSource(newData);
        }
    };

    const handleForeignTINChange = (key: string, newText: string) => {
        const newData = [...dataSource];
        const index = newData.findIndex((item) => key === item.key);
        if (index > -1) {
            newData[index].foreignTIN = newText;
            setDataSource(newData);
        }
    };

    const handleReasonDropdownChange = (key: string, newOption: string) => {
        const newData = [...dataSource];
        const index = newData.findIndex((item) => key === item.key);
        if (index > -1) {
            newData[index].reason = newOption;
            setDataSource(newData);
        }
    };

    const handleReasonDetailChange = (key: string, newText: string) => {
        const newData = [...dataSource];
        const index = newData.findIndex((item) => key === item.key);
        if (index > -1) {
            newData[index].reasonDetail = newText;
            setDataSource(newData);
        }
    };

    const handleDelete = (key: React.Key) => {
        const newData = dataSource.filter((item) => item.key !== key);
        setDataSource(newData);
    };

    const defaultColumns = [
        {
            title: 'No',
            dataIndex: 'no',
            width: '5%',
            align: 'center',
        },
        {
            title: 'Country/Jurisdiction of Tax Residence',
            dataIndex: 'country',
            width: '20%',
            align: 'center',
            render: (option: any, record: { key: string; }) => (
                <Select
                    defaultValue={option}
                    onChange={(value) => handleCountryDropdownChange(record.key, value)}
                    style={{ width: "100%", textAlign: "left" }}
                >
                    {countryDataList.map((m) => (
                        <Select.Option key={m.text} value={m.value}>{m.value + ": " + m.text}</Select.Option>
                    ))}
                </Select>
            ),
        },
        {
            title: 'Foreign TIN',
            dataIndex: 'foreignTIN',
            width: '20%',
            align: 'center',
            render: (text: ValueType, record: { key: string; }) => (
                <Input
                    value={text}
                    onChange={(e) => handleForeignTINChange(record.key, e.target.value)}
                />
            ),
        },
        {
            title: 'If no TIN available enter reason (A), (B) or (C)-2',
            dataIndex: 'reason',
            width: '20%',
            align: 'center',
            render: (option: any, record: { key: string; }) => (
                <Select
                    defaultValue={option}
                    onChange={(value) => handleReasonDropdownChange(record.key, value)}
                    style={{ width: "100%", textAlign: "left" }}
                >
                    {reasonDataList.map((m) => (
                        <Select.Option key={m.text} value={m.value}>{m.value + ": " + m.text}</Select.Option>
                    ))}
                </Select>
            ),
        },
        {
            title: 'If you selected Reason(B)',
            dataIndex: 'reasonDetail',
            width: '25%',
            align: 'center',
            render: (text: ValueType, record: { key: string; }) => (
                <Input
                    value={text}
                    onChange={(e) => handleReasonDetailChange(record.key, e.target.value)}
                />
            ),
        },
        {
            title: 'Action',
            dataIndex: 'operation',
            width: '10%',
            align: 'center',
            render: (text: ValueType, record: { key: string; }) => (
                <Popconfirm title="Are you delete?" onConfirm={() => handleDelete(record.key)}>
                    <DeleteFilled />
                </Popconfirm>
            ),
        },
    ];

    return (
        <div>
            <br />
            <span><b>Part 2 - CRS Individual Self-Certification</b></span>
            <Table style={{ textAlign: "center" }} dataSource={dataSource} columns={defaultColumns} pagination={false} />
        </div>
    );
}

export default ForeignTINTableForm;