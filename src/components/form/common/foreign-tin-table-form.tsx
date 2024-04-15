import React, { useContext, useEffect, useRef, useState } from 'react';
import type { GetRef, InputRef } from 'antd';
import { Button, Form, Input, Popconfirm, Select, Table } from 'antd';
import { DeleteFilled } from '@ant-design/icons';

type FormInstance<T> = GetRef<typeof Form<T>>;

const EditableContext = React.createContext<FormInstance<any> | null>(null);

interface Item {
    key: string;
    no: string;
    country: string;
    foreignTIN: string;
    reason: string;
    reasonDetail: string;
}

interface EditableRowProps {
    index: number;
}

const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
        <Form form={form} component={false}>
            <EditableContext.Provider value={form}>
                <tr {...props} />
            </EditableContext.Provider>
        </Form>
    );
};

interface EditableCellProps {
    title: React.ReactNode;
    editable: string;
    children: React.ReactNode;
    dataIndex: keyof Item;
    record: Item;
    handleSave: (record: Item) => void;
}

const EditableCell: React.FC<EditableCellProps> = ({
    title,
    editable,
    children,
    dataIndex,
    record,
    handleSave,
    ...restProps
}) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef<InputRef>(null);
    const form = useContext(EditableContext)!;

    useEffect(() => {
        if (editing) {
            inputRef.current?.focus();
        }
    }, [editing]);

    const toggleEdit = () => {
        setEditing(!editing);
        form.setFieldsValue({ [dataIndex]: record[dataIndex] });
    };

    const save = async () => {
        try {
            const values = await form.validateFields();

            toggleEdit();
            handleSave({ ...record, ...values });
        } catch (errInfo) {
            console.log('Save failed:', errInfo);
        }
    };

    let childNode = children;

    if (editable == "input") {
        childNode = editing ? (
            <Form.Item
                style={{ margin: 0 }}
                name={dataIndex}
                rules={[
                    {
                        required: true,
                        message: `${title} is required.`,
                    },
                ]}
            >
                <Input ref={inputRef} onPressEnter={save} onBlur={save} />
            </Form.Item>
        ) : (
            <div className="editable-cell-value-wrap" style={{ paddingRight: 24 }} onClick={toggleEdit}>
                {children}
            </div>
        );
    } else if (editable == "select") {
        childNode = editing ? (
            <Form.Item
                style={{ margin: 0 }}
                name={dataIndex}
                rules={[
                    {
                        required: true,
                        message: `${title} is required.`,
                    },
                ]}
            >
                <Select onBlur={save} >
                    <Select.Option key={1} value={1}>Level 1</Select.Option>
                    <Select.Option key={2} value={2}>Level 2</Select.Option>
                    <Select.Option key={3} value={3}>Level 3</Select.Option>
                </Select>
            </Form.Item>
        ) : (
            <div className="editable-cell-value-wrap" style={{ paddingRight: 24 }} onClick={toggleEdit}>
                {children}
            </div>
        );
    }
    
    return <td {...restProps}>{childNode}</td>;
};

type EditableTableProps = Parameters<typeof Table>[0];

interface DataType {
    key: string;
    no: string;
    country: string;
    foreignTIN: string;
    reason: string;
    reasonDetail: string;
}

type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;

const ForeignTINTableForm = () => {
    const [count, setCount] = useState(2);

    const [dataSource, setDataSource] = useState<DataType[]>([
        {
            key: '0',
            no: '1',
            country: 'US',
            foreignTIN: '1111111111111',
            reason: 'A',
            reasonDetail: 'test test 1'
        },
        {
            key: '0',
            no: '2',
            country: 'TH',
            foreignTIN: '1111111111111',
            reason: 'A',
            reasonDetail: 'test test 2'
        },
    ]);

    const handleDelete = (key: React.Key) => {
        const newData = dataSource.filter((item) => item.key !== key);
        setDataSource(newData);
    };

    const defaultColumns: (ColumnTypes[number] & { editable?: string; dataIndex: string })[] = [
        {
            title: 'No',
            dataIndex: 'no',
            width: '5%',
            align: 'center'
        },
        {
            title: 'Country/Jurisdiction of Tax Residence',
            dataIndex: 'country',
            width: '20%',
            editable: 'select',
            align: 'center'
        },
        {
            title: 'Foreign TIN',
            dataIndex: 'foreignTIN',
            width: '20%',
            editable: 'input',
            align: 'center'
        },
        {
            title: 'If no TIN available enter reason (A), (B) or (C)-2',
            dataIndex: 'reason',
            width: '20%',
            editable: 'select',
            align: 'center'
        },
        {
            title: 'If you selected Reason(B)',
            dataIndex: 'reasonDetail',
            width: '25%',
            editable: 'input',
            align: 'center'
        },
        {
            title: 'Action',
            dataIndex: 'operation',
            width: '10%',
            align: 'center',
            render: (_, record) => dataSource.length >= 1 ? (
                <Popconfirm title="Are you delete?" onConfirm={() => handleDelete(record.key)}>
                    <DeleteFilled />
                </Popconfirm>
            ) : null,
        },
    ];

    const handleAdd = () => {
        const newData: DataType = {
            key: '0',
            no: '1',
            country: 'US',
            foreignTIN: '1111111111111',
            reason: 'A',
            reasonDetail: 'test test 1'
        };
        setDataSource([...dataSource, newData]);
        setCount(count + 1);
    };

    const handleSave = (row: DataType) => {
        const newData = [...dataSource];
        const index = newData.findIndex((item) => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, {
            ...item,
            ...row,
        });
        setDataSource(newData);
    };

    const columns = defaultColumns.map((col) => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record: DataType) => ({
                record,
                editable: col.editable,
                dataIndex: col.dataIndex,
                title: col.title,
                handleSave,
            }),
        };
    });

    const components = {
        body: {
            row: EditableRow,
            cell: EditableCell,
        },
    };

    return (
        <div>
            <br />
            <span><b>Part 2 - CRS Individual Self-Certification</b></span>
            <Table
                components={components}
                rowClassName={() => 'editable-row'}
                bordered
                dataSource={dataSource}
                columns={columns as ColumnTypes}

            />
        </div>
    );
}

export default ForeignTINTableForm;