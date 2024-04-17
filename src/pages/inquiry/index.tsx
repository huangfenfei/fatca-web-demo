import SearchCustomerIdForm from "@/components/inquiry/search-customer-id-form";
import SearchCustomerNameForm from "@/components/inquiry/search-customer-name-form";
import SearchCustomerTinForm from "@/components/inquiry/search-customer-tin-form";
import SearchDateStatusForm from "@/components/inquiry/search-date-status-form";
import AppLayout from "@/components/layout/app-layout";
import { Tabs, TabsProps } from "antd";
import React from "react";

const InquiryPage = () => {
    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Search by Customer ID ',
            children: <SearchCustomerIdForm />,
        },
        {
            key: '2',
            label: 'Search by Customer Name',
            children: <SearchCustomerNameForm />,
        },
        {
            key: '3',
            label: 'Search by TIN Number',
            children: <SearchCustomerTinForm />,
        },
        {
            key: '4',
            label: 'Search by Date/Status',
            children: <SearchDateStatusForm />,
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