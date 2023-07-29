/* eslint-disable @next/next/no-img-element */
import { store } from "@/app/redux/store";
import { getEmployeeDetailAction } from "@/app/redux/employeeAction";

export default async function EmployeeDetail({ params }: any) {
  const { id } = params;

  await store.dispatch(getEmployeeDetailAction(id));

  const data = store.getState().employee.employee;

  return (
    <div>
      <div>{data?.firstName}</div>
      <div>{data?.lastName}</div>
      <img
        src={data?.photo}
        width={200}
        height={200}
        alt={`${data?.firstName} ${data?.lastName}`}
      />
    </div>
  );
}
