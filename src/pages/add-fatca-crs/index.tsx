import React, { useState } from "react";
import { Form, Input, DatePicker, Button, Table, Avatar, message, TabsProps, Tabs } from "antd";
import { useQuery, useMutation } from "@tanstack/react-query";
import AppLayout from "../../components/layout/app-layout";
import JuristicCustomerInfoForm from "@/components/form/juristic/juri-customer-info-form";
import IndividualTabForm from "@/components/form/individual/indi-tab-form";
// import { getData, uploadData } from "../../services/api.service";
const AddFatcaCrsPage = () => {

  const form = Form.useForm;

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Individual (บุคคลธรรมดา)',
      children: <IndividualTabForm />,
    },
    {
      key: '2',
      label: 'Juristic (นิติบุคคล)',
      children: <JuristicCustomerInfoForm />,
    },
  ];

  const onChange = (key: string) => {
    console.log(key);
  };

  return (
    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
  );
}

export default AddFatcaCrsPage;
AddFatcaCrsPage.getLayout = function getLayout(page: React.ReactElement<any, string | React.JSXElementConstructor<any>>) {
  return <AppLayout>{page}</AppLayout>;
};

