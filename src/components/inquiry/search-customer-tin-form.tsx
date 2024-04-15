import { Button, Col, Form, Input, Row, Select, Space } from "antd";
import React from "react";
import SearchTableResultForm from "./search-table-result-form";

const SearchCustomerTinForm = () => {
    return (
        <div>
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
            <SearchTableResultForm />
        </div>
    );
}

export default SearchCustomerTinForm;