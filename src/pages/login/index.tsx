import { Row, Image, Button, Form, Input } from "antd";
import React from "react";

const GenerateXMLPage = () => {

    const onFinish = (values: any) => {
        console.log('Received values:', values);
    };
    return (
        <div className="login-area" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Row justify="center">
                    <Image src="assets/images/fatca-logo.png" width={700} alt="Logo" preview={false} />
                </Row>
                <Row justify="center">
                    <h2>Foreign Account Tax Compliance Act</h2>
                </Row>
                <Row justify="center">
                    <Button type="primary" style={{ width: 120, height: 40, fontWeight: "bold" }}>Login</Button>
                </Row>
            </Form>
        </div>
    );
}

export default GenerateXMLPage;