import { Button, Col, DatePicker, Form, Input, Row, Select, Space } from "antd";
import React from "react";
import TransectionTableForm from "./transection-table-form";

const SearchDateStatusForm = () => {
    return (
        <div>
            <Form
                name="wrap"
                labelCol={{ flex: '250px' }}
                labelAlign="left"
                labelWrap
            >
                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item label={"Transaction Information Type"} rules={[{ required: true }]}>
                            <Select>
                                <Select.Option key={1} value={1}>ID Card/บัตรประจำตัวประชาชน</Select.Option>
                                <Select.Option key={2} value={2}>Passport/หนังสือเดินทาง</Select.Option>
                                <Select.Option key={3} value={3}>Driving Licence/ใบอนุญาติขับรถ</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label={"Transaction Status"} rules={[{ required: true }]}>
                            <Select>
                                <Select.Option key={1} value={1}>ID Card/บัตรประจำตัวประชาชน</Select.Option>
                                <Select.Option key={2} value={2}>Passport/หนังสือเดินทาง</Select.Option>
                                <Select.Option key={3} value={3}>Driving Licence/ใบอนุญาติขับรถ</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item label={"Transaction Date"} rules={[{ required: true }]}>
                            <DatePicker format={"YYYY-MM-DD"} style={{ width: "100%" }} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label={"Branch No./Channel"} rules={[{ required: true }]}>
                            <Select>
                                <Select.Option key={"0000"} value={"0000"}>0000: สำนักงานใหญ่ (รัชโยธิน)</Select.Option>
                                <Select.Option key={"0001"} value={"0001"}>0001: สำนักงานสีลม</Select.Option>
                                <Select.Option key={"0002"} value={"0002"}>0002: สำนักงานธุรกิจลาดพร้าว</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item label={"User ID"} rules={[{ required: true }]}>
                            <Select>
                                <Select.Option key={1} value={1}>ID Card/บัตรประจำตัวประชาชน</Select.Option>
                                <Select.Option key={2} value={2}>Passport/หนังสือเดินทาง</Select.Option>
                                <Select.Option key={3} value={3}>Driving Licence/ใบอนุญาติขับรถ</Select.Option>
                            </Select>
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
            </Form>
            <TransectionTableForm />
        </div>
    );
}

export default SearchDateStatusForm;