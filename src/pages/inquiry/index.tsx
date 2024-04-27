import SearchCustomerIdForm from "@/components/inquiries/search-customer-form";
import SearchCustomerNameForm from "@/components/inquiries/search-customer-name-form";
import SearchCustomerTinForm from "@/components/inquiries/search-customer-tin-form";
import SearchDateStatusForm from "@/components/inquiries/search-date-status-form";
import AppLayout from "@/components/layouts/app-layout";
import { useMsal } from "@azure/msal-react";
import { Tabs, TabsProps } from "antd";
import React from "react";

const InquiryPage = () => {

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Search by Customer',
            children: <SearchCustomerIdForm />,
        },
        {
            key: '2',
            label: 'Search by Transaction',
            children: <SearchCustomerNameForm />,
        },
        {
            key: '3',
            label: 'Search Historical',
            children: <SearchCustomerTinForm />,
        },
    ];

    const onChange = (key: string) => {
        console.log(key);
    };

    return (
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    );
}

export default InquiryPage;
InquiryPage.getLayout = function getLayout(page: React.ReactElement<any, string | React.JSXElementConstructor<any>>) {
    return <AppLayout>{page}</AppLayout>;
};