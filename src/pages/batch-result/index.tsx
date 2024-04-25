import AppLayout from "@/components/layouts/app-layout";
import React from "react";

const GenerateXMLPage = () => {
    return (
        <div>
            Batch Result
        </div>
    );
}

export default GenerateXMLPage;
GenerateXMLPage.getLayout = function getLayout(page: React.ReactElement<any, string | React.JSXElementConstructor<any>>) {
    return <AppLayout>{page}</AppLayout>;
};