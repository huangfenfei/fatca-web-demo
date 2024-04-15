import { Card, Col, Form, Input, Row, Select } from "antd";
import React from "react";

const IRSDocumentW8Form = () => {
    return (
        <div>
            <br />
            <span><b>IRS Document</b></span>
            <Row gutter={24}>
                <Col span={24}>
                    <Card>
                        <Row gutter={24}>
                            <Col span={24}>
                                <span><b>W-8-BEN</b></span>
                            </Col>
                        </Row>
                        <Row gutter={24}>
                            <Col span={12}>
                                <Form.Item label={"Document Support"} rules={[{ required: true }]}>
                                    <Select>
                                        <Select.Option key={1} value={1}>Level 1</Select.Option>
                                        <Select.Option key={2} value={2}>Level 2</Select.Option>
                                        <Select.Option key={3} value={3}>Level 3</Select.Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default IRSDocumentW8Form;