import { loginRequest } from "@/configs/AuthConfig";
import { useMsal } from "@azure/msal-react";
import { Row, Image, Button, Form, Input } from "antd";
import React from "react";

const LoginPage = () => {

    const { instance } = useMsal();

    const onFinish = (values: any) => {
        console.log('Received values:', values);
    };

    const handleLogin = () => {
        instance.loginRedirect(loginRequest).catch(e => {
            console.log(e);
        });
    }
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
                    <Button type="primary" onClick={handleLogin} style={{ width: 120, height: 40, fontWeight: "bold", fontSize: 18 }}>Login</Button>
                </Row>
            </Form>
        </div>
    );
}

export default LoginPage;