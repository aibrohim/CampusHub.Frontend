import { Table, Typography } from "antd";

import { IStudent } from "@/entities/Student";

const students: IStudent[] = [
  {
    id: 1,
    firstName: "Ibrohimjon",
    lastName: "Alimuhammedov",
    email: "ialimukhamedov@students.wiut.uz",
  },
  {
    id: 2,
    firstName: "Ahmadjon",
    lastName: "Hasanjonov",
    email: "ahasanjonov@students.wiut.uz",
  },
  {
    id: 3,
    firstName: "Ilhomjon",
    lastName: "Shamidinov",
    email: "iShamidinov@students.wiut.uz",
  },
  {
    id: 4,
    firstName: "Abdulla",
    lastName: "Ermatov",
    email: "aermatov@students.wiut.uz",
  },
  {
    id: 5,
    firstName: "Ismoiljon",
    lastName: "Falonchiyev",
    email: "ifalonchiyev@students.wiut.uz",
  },
];

export const Students = () => {
  return (
    <>
      <Typography.Title>Students</Typography.Title>

      <Table
        columns={[
          { title: "ID", dataIndex: "id" },
          { title: "First Name", dataIndex: "firstName" },
          { title: "Last Name", dataIndex: "lastName" },
          { title: "Email", dataIndex: "email" },
        ]}
        dataSource={students}
      />
    </>
  );
};
