"use client";
import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card";
import { employeeList } from "@/app/redux/employeeSlice";
import { IEmployeeList } from "@/app/interface/employee";
import { getLogs, logEvent } from "@/utils/logger";

export default function EmployeeList() {
  const _employeeList = useSelector(employeeList);
  logEvent("button_click", "User clicked the button.");

  return (
    <>
      {_employeeList?.map((item: IEmployeeList) => (
        <Card key={item.id} {...item} />
      ))}
    </>
  );
}
