import React from "react";
import { Form } from "antd";
import IndividualCustomerInfoForm from "./indi-customer-info-form";
import FatcaCheckListForm from "../fatca-checklist-form";


const IndividualTabForm = () => {
    return (
        <div>
            <Form
                name="wrap"
                labelCol={{ flex: '200px' }}
                labelAlign="left"
            >
                <IndividualCustomerInfoForm/>
                <FatcaCheckListForm/>
            </Form>
        </div>
    );

}

export default IndividualTabForm;