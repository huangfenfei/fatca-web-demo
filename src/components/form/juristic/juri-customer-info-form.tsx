import { Col, Form, Row, Select, FormInstance, Input } from "antd";
import React, { useState } from "react";


const JuristicCustomerInfoForm = () => {
    const { Option } = Select;

    return (
        <div>
            <Form
                name="wrap"
                labelCol={{ flex: '200px' }}
                labelAlign="left"

            >
                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item label={"Identification Type"} rules={[{ required: true }]}>
                            <Select>
                                <Option key={1} value={1}>หนังสือรับรองการจดทะเบียน</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label={"Identification Number"} rules={[{ required: true }]}>
                            <Input maxLength={100}></Input>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item label={"Title"} rules={[{ required: true }]}>
                            <Select>
                                <Option key={1} value={1}>ห้างหุ้นส่วนสามัญนิติบุคคล</Option>
                                <Option key={2} value={2}>ห้างหุ้นส่วนจำกัด</Option>
                                <Option key={3} value={3}>บริษัท จำกัด</Option>
                                <Option key={4} value={4}>บริษัท จำกัด (มหาชน)</Option>
                                <Option key={5} value={5}>นิติบุคคลอาคารชุด</Option>
                                <Option key={6} value={6}>มูลนิติ</Option>
                                <Option key={7} value={7}>สมาคม</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label={"Customer Name"} rules={[{ required: true }]}>
                            <Input maxLength={100}></Input>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={12}>
                        <Form.Item label={"Nationality"} rules={[{ required: true }]}>
                            <Select>
                                <Option key={"US"} value={"US"}>US: American</Option>
                                <Option key={"CH"} value={"CH"}>CH: Chiness</Option>
                                <Option key={"TH"} value={"TH"}>TH: Thai</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label={"Branch No./OC Code"} rules={[{ required: true }]}>
                            <Select>
                                <Option key={"0000"} value={"0000"}>0000: สำนักงานใหญ่ (รัชโยธิน)</Option>
                                <Option key={"0001"} value={"0001"}>0001: สำนักงานสีลม</Option>
                                <Option key={"0002"} value={"0002"}>0002: สำนักงานธุรกิจลาดพร้าว</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>

            </Form>
        </div >
    );
}
export default JuristicCustomerInfoForm;