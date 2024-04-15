import { Col, Form, Row, Select, FormInstance, Input, Card, Radio, Checkbox, Space } from "antd";
import Meta from "antd/es/card/Meta";
import React, { useState } from "react";


const IndividualCustomerInfoForm = () => {
    const { Option } = Select;

    return (
        <div>

            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item label={"Identification Type"} rules={[{ required: true }]}>
                        <Select>
                            <Option key={1} value={1}>ID Card/บัตรประจำตัวประชาชน</Option>
                            <Option key={2} value={2}>Passport/หนังสือเดินทาง</Option>
                            <Option key={3} value={3}>Driving Licence/ใบอนุญาติขับรถ</Option>
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
                            <Option key={1} value={1}>MR/นาย</Option>
                            <Option key={2} value={2}>MRS/นาง</Option>
                            <Option key={3} value={3}>MS/นางสาว</Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item label={"First Name"} rules={[{ required: true }]}>
                        <Input maxLength={100}></Input>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item label={"Middle Name"} rules={[{ required: true }]}>
                        <Input maxLength={100}></Input>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item label={"Last Name"} rules={[{ required: true }]}>
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
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item label={"Country of Birth"} rules={[{ required: true }]}>
                        <Select>
                            <Option key={"US"} value={"US"}>US: United State of America</Option>
                            <Option key={"CH"} value={"CH"}>CH: China</Option>
                            <Option key={"TH"} value={"TH"}>TH: Thailand</Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item label={"City of Birth"} rules={[{ required: true }]}>
                        <Input maxLength={100}></Input>
                    </Form.Item>
                </Col>
            </Row>

            <br />
            

            <br />
            <span><b>CRS Checklist</b></span>
            <Row gutter={24}>
                <Col span={24}>
                    <Card>
                        <Radio.Group style={{ width: "100%" }}>
                            <Row gutter={24} >
                                <Col span={12}>
                                    <span>Tax residency other than the U.S. (มีถิ่นที่อยู่ทางภาษีนอกเหนือจากสหรัฐ)</span>
                                </Col>
                                <Col span={6}>
                                    <Radio value={1}>Yes</Radio>
                                </Col>
                                <Col span={6}>
                                    <Radio value={2}>No</Radio>
                                </Col>
                            </Row>
                        </Radio.Group>
                    </Card>
                </Col>
            </Row>
        </div >
    );
}
export default IndividualCustomerInfoForm;