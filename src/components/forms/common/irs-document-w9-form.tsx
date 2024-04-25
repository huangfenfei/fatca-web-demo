import { Card, Checkbox, Col, Form, Input, Row, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";

const IRSDocumentW9Form = () => {
    const { Option } = Select;

    return (
        <div>
            <br />
            <span><b>IRS Document</b></span>
            <Row gutter={24}>
                <Col span={24}>
                    <Card>
                        <Row gutter={24}>
                            <Col span={24}>
                                <span><b>W-9</b></span>
                            </Col>
                        </Row>
                        <Row gutter={24}>
                            <Col span={12}>
                                <Form.Item label={"Name"} rules={[{ required: true }]}>
                                    <Input maxLength={100}></Input>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label={"Business Name"} rules={[{ required: true }]}>
                                    <Input maxLength={100}></Input>
                                </Form.Item>
                            </Col>

                        </Row>
                        <Row gutter={24}>
                            <Col span={12}>
                                <Form.Item label={"Tax Classification"} rules={[{ required: true }]}>
                                    <Select>
                                        <Option key={1} value={1}>Level 1</Option>
                                        <Option key={2} value={2}>Level 2</Option>
                                        <Option key={3} value={3}>Level 3</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={24}>
                            <Col span={24}>
                                <span><b>Exemptions (If Any)</b></span>
                            </Col>
                        </Row>
                        <Row gutter={24}>
                            <Col span={12}>
                                <Form.Item label={"Exempt Payee Code"} rules={[{ required: true }]}>
                                    <Select>
                                        <Option key={1} value={1}>Level 1</Option>
                                        <Option key={2} value={2}>Level 2</Option>
                                        <Option key={3} value={3}>Level 3</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label={"Exemption from FATCA Reporting Code"} rules={[{ required: true }]}>
                                    <Select>
                                        <Option key={1} value={1}>Level 1</Option>
                                        <Option key={2} value={2}>Level 2</Option>
                                        <Option key={3} value={3}>Level 3</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={24}>
                            <Col span={16}>
                                <Form.Item label={"Address"} rules={[{ required: true }]}>
                                    {/* <Input maxLength={100}></Input> */}
                                    <TextArea
                                        autoSize={{ minRows: 2, maxRows: 2 }}
                                    ></TextArea>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={24}>
                            <Col span={12}>
                                <Form.Item label={"City"} rules={[{ required: true }]}>
                                    <Input maxLength={100}></Input>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label={"State"} rules={[{ required: true }]}>
                                    <Input maxLength={100}></Input>
                                </Form.Item>
                            </Col>

                        </Row>
                        <Row gutter={24}>
                            <Col span={12}>
                                <Form.Item label={"Zip Code"} rules={[{ required: true }]}>
                                    <Input maxLength={100}></Input>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={24}>
                            <Col span={24}>
                                <span><b>Taxpayer Identification Number (TIN)</b></span>
                            </Col>
                        </Row>
                        <Row gutter={24}>
                            <Col span={6}>
                                <Checkbox>Social Security Number</Checkbox>
                            </Col>
                            <Col span={2}>
                                <Form.Item rules={[{ required: true }]}>
                                    <Input maxLength={100}></Input>
                                </Form.Item>
                            </Col>
                            <Col span={2}>
                                <Form.Item rules={[{ required: true }]}>
                                    <Input maxLength={100}></Input>
                                </Form.Item>
                            </Col>
                            <Col span={2}>
                                <Form.Item rules={[{ required: true }]}>
                                    <Input maxLength={100}></Input>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={24}>
                            <Col span={6}>
                                <Checkbox>Employer Identification Number</Checkbox>
                            </Col>
                            <Col span={2}>
                                <Form.Item rules={[{ required: true }]}>
                                    <Input maxLength={100}></Input>
                                </Form.Item>
                            </Col>
                            <Col span={4}>
                                <Form.Item rules={[{ required: true }]}>
                                    <Input maxLength={100}></Input>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default IRSDocumentW9Form;