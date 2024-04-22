import { Card, Checkbox, Col, Radio, Row, Space } from "antd";
import React from "react";

const IndividualFatcaCheckListForm = () => {
    return (
        <div>
            <span><b>FATCA Checklist</b></span> <span style={{ color: "#4F3793" }}>Natural Person</span>
            <Row gutter={24}>
                <Col span={24}>
                    <Card>
                        <Radio.Group style={{ width: "100%" }}>
                            <Row gutter={24} >
                                <Col span={12}>
                                    <Radio value={1}>Indicia (ลูกค้าตอบใช่ / Yes ข้อใดข้อหนึ่ง)</Radio>
                                </Col>
                                <Col span={12}>
                                    <Radio value={2}>No Indicia (ลูกค้าตอบไม่ใช่ / No ทุกข้อ)</Radio>
                                </Col>
                            </Row>
                        </Radio.Group>
                    </Card>
                </Col>
            </Row>

            <br />
            <span><b>Part 1 - Status of Customer</b></span>
            <br />
            <span style={{ fontSize: 12 }}>Please Check only the question that answer "Yes"/ โปรดเลือกหัวข้อที่ลูกค้าตอบ "ใช่"</span>
            <Row gutter={24}>
                <Col span={24}>
                    <Card>
                        <Radio.Group style={{ width: "100%" }}>
                            <Row gutter={24} >
                                <Col span={12}>
                                    <Space direction="vertical">
                                        <Radio value={1}>US Person</Radio>
                                        <Checkbox style={{ marginLeft: 30 }}>1) US Citizen / US Birth</Checkbox>
                                        <Checkbox style={{ marginLeft: 30 }}>2) US Green Card</Checkbox>
                                        <Checkbox style={{ marginLeft: 30 }}>3) US Resident</Checkbox>
                                    </Space>

                                </Col>
                                <Col span={12}>
                                    <Space direction="vertical">
                                        <Radio value={2}>Additional Questions</Radio>
                                        <Checkbox style={{ marginLeft: 30 }}>1) Born US but legally surrendered</Checkbox>
                                        <Checkbox style={{ marginLeft: 30 }}>2) Fund Transfer to US</Checkbox>
                                        <Checkbox style={{ marginLeft: 30 }}>3) POA</Checkbox>
                                        <Checkbox style={{ marginLeft: 30 }}>4) Hold mail</Checkbox>
                                        <Checkbox style={{ marginLeft: 30 }}>5) US Address</Checkbox>
                                        <Checkbox style={{ marginLeft: 30 }}>6) US Phone Number</Checkbox>

                                    </Space>
                                </Col>
                            </Row>
                        </Radio.Group>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default IndividualFatcaCheckListForm;