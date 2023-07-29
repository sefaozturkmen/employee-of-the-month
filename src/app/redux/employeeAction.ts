import { createAsyncThunk } from "@reduxjs/toolkit";
import { getEmployeeDetail, getEmployees } from "../api/employee";

export const getEmployeesAction = createAsyncThunk("Employees", async () => {
  const response = await getEmployees();
  return response.employeeList;
});

export const getEmployeeDetailAction = createAsyncThunk(
  "EmployeeDetail",
  async (id: string) => {
    const response = await getEmployeeDetail(id);
    return response.employee;
  }
);
