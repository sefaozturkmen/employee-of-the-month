/* eslint-disable @next/next/no-img-element */
import { store } from "@/app/redux/store";
import { getEmployeeDetailAction } from "@/app/redux/employeeAction";
import { IEmployee } from "@/app/interface/employee";
import Link from "next/link";

export default async function EmployeeDetail({ params }: any) {
  const { id } = params;

  await store.dispatch(getEmployeeDetailAction(id));

  const data: IEmployee | null = store.getState().employee.employee;

  return (
    <div className="container">
      <Link href="/">Home</Link>
      <div className="employee-detail">
        <div className="employee-detail--header">
          <img
            src={data?.photo}
            width={300}
            height={300}
            alt={`${data?.firstName} ${data?.lastName}`}
          />
        </div>
        <div className="employee-detail--body">
          <div className="employee-detail--body--left">
            <div className="employee-detail--body--left--name">{`${data?.firstName} ${data?.lastName}`}</div>
            <div className="employee-detail--body--left--title">
              {data?.jobTitle}
            </div>
            <div className="employee-detail--body--left--department">
              {data?.department}
            </div>
          </div>
          <div className="employee-detail--body--right">
            <div>{data?.email}</div>
            <div>Verilen Oy {data?.count}</div>
            <div>Yaş {data?.age}</div>
            <div>Cinsiyet {data?.gender}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
