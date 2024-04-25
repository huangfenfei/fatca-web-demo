import { Button, Col, Form, Input, Row, Select, Space } from "antd";
import React from "react";
import SearchTableForm from "./search-table-form";

const SearchCustomerForm = () => {
    return (
        <div>
            <Form
                name="wrap"
                labelCol={{ flex: '200px' }}
                labelAlign="left"
            >
                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item label={"ID Type"} rules={[{ required: true }]}>
                            <Select>
                                <Select.Option key={1} value={1}>ID Card/บัตรประจำตัวประชาชน</Select.Option>
                                <Select.Option key={2} value={2}>Passport/หนังสือเดินทาง</Select.Option>
                                <Select.Option key={3} value={3}>Driving Licence/ใบอนุญาติขับรถ</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label={"ID Number"} rules={[{ required: true }]}>
                            <Input maxLength={100}></Input>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={24}>
                    
                    <Col span={12}>
                        <Form.Item label={"Customer Name"} rules={[{ required: true }]}>
                            <Input maxLength={100}></Input>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={24}>
                   
                    <Col span={12}>
                        <Form.Item label={"TIN Number"} rules={[{ required: true }]}>
                            <Input maxLength={100}></Input>
                        </Form.Item>
                    </Col>
                </Row>
                <Space style={{ width: "100%", justifyContent: "right" }}>
                    <Row gutter={24}>
                        <Col span={24}>
                            <Button type="primary" htmlType="submit" style={{ width: 100, justifyContent: "center" }}>Search</Button>
                        </Col>
                    </Row>
                </Space>
                <SearchTableForm />
            </Form>
        </div>
    );
}

export default SearchCustomerForm;