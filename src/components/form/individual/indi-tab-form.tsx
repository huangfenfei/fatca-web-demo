import React from "react";
import { Button, Col, Form, Row, Space } from "antd";
import IndividualCustomerInfoForm from "./indi-customer-info-form";
import IndividualFatcaCheckListForm from "./indi-fatca-checklist-form";
import IndividualCRSCheckListForm from "./indi-crs-checklist-form";
import IRSDocumentW9Form from "../common/irs-document-w9-form";
import IRSDocumentW8Form from "../common/irs-document-w8-form";
import ForeignTINTableForm from "../common/foreign-tin-table2-form";


const IndividualTabForm = () => {
    return (
        <div>
            <Form
                name="wrap"
                labelCol={{ flex: '200px' }}
                labelAlign="left"
                labelWrap
            >
                <IndividualCustomerInfoForm />
                <IndividualFatcaCheckListForm />
                <IRSDocumentW8Form />
                <IRSDocumentW9Form />
                <IndividualCRSCheckListForm />
                <ForeignTINTableForm />

                <Space style={{ marginTop: 20, marginBottom: 30, width: "100%", justifyContent: "right" }}>
                    <Row gutter={24} style={{ gap: 15 }}>
                        <Col span={24}>
                            <Button type="primary" htmlType="submit" style={{ width: 100, justifyContent: "center", marginRight:15 }}>Save</Button>
                            <Button type="default" style={{ width: 100, justifyContent: "center" }}>Cancel</Button>
                        </Col>
                    </Row>
                </Space>
            </Form>

        </div>
    );

}

export default IndividualTabForm;