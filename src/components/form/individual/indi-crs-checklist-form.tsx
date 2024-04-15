import { Card, Col, Radio, Row } from "antd";
import React from "react";

const IndividualCRSCheckListForm = () => {
    return (
        <div>
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

        </div>

    );
}

export default IndividualCRSCheckListForm;