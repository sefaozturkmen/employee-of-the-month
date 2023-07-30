"use client";
import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card";
import { employeeList } from "@/app/redux/employeeSlice";
import { IEmployeeList } from "@/app/interface/employee";

export default function EmployeeList() {
  const _employeeList = useSelector(employeeList);

  return (
    <>
      {_employeeList?.map((item: IEmployeeList) => (
        <Card key={item.id} {...item} />
      ))}
    </>
  );
}
