import React, { useState } from "react";
import { Form, Input, DatePicker, Button, Table, Avatar,message } from "antd";
import { useQuery, useMutation } from "@tanstack/react-query";
import AppLayout from "../../components/layout/appLayout";
// import { getData, uploadData } from "../../services/api.service";
function SeniorAom() {
  function submit(data: any) {
    upload.mutate(data);
  }

  const { data, isFetching ,refetch} = useQuery({
    queryKey: ["getData"],
    queryFn: () => getData(),
  });

  const upload = useMutation({
    mutationFn: (data: any) => uploadData(data),
    onSuccess(data, variables, context) {
        message.success("อัปโหลดเสร็จแล้วนะจ๊ะ")
        refetch()
    },
  });
  return (
    <div>
      <p className="text-4xl">Senior Aom Co,LTD. Super Creater</p>
      <Form onFinish={submit} wrapperCol={{ span: 8 }} layout={"vertical"}>
        <Form.Item name={"name"} label="ชื่อ">
          <Input />
        </Form.Item>
        <Form.Item name={"createdAt"} label="ตำแหน่ง">
          <DatePicker />
        </Form.Item>
        <Form.Item>
          <Button loading={upload.isPending} htmlType="submit" type="primary">
            ส่งฟอร์ม
          </Button>
        </Form.Item>
      </Form>
      <Table
        rowKey={"id"}
        loading={isFetching}
        columns={[
          { title: "ลำดับ", dataIndex: "id" },
          {
            title: "รูป",
            dataIndex: "avatar",
            render: (avatar: string) => <Avatar size={50} src={avatar} />,
          },
          { title: "ชื่อ", dataIndex: "name" },
        ]}
        dataSource={data ? data : []}
      />
    </div>
  );
}

export default SeniorAom;
SeniorAom.getLayout = function getLayout(page: React.ReactElement<any, string | React.JSXElementConstructor<any>>) {
  return <AppLayout>{page}</AppLayout>;
};
function getData(): any {
  throw new Error("Function not implemented.");
}

function uploadData(data: any): Promise<unknown> {
  throw new Error("Function not implemented.");
}

