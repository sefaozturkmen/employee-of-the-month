import { IEmployee, IEmployeeList } from "./../interface/employee";
import { createSlice } from "@reduxjs/toolkit";
import { getEmployeeDetailAction, getEmployeesAction } from "./employeeAction";

export interface EmployeeState {
  employeeList: IEmployeeList[];
  employee: IEmployee | null;
}

const initialState: EmployeeState = {
  employeeList: [],
  employee: null,
};

export const { actions, reducer } = createSlice({
  name: "employee",
  initialState,
  reducers: {
    increaseCount: (state, id) => {
      state.employeeList = [
        ...state.employeeList.map((item) => {
          if (item.id === id.payload) item.count++;
          return item;
        }),
      ].sort((a, b) => b.count - a.count);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getEmployeesAction.fulfilled, (state, action) => {
      state.employeeList = [...action.payload].sort(
        (a, b) => b.count - a.count
      );
    });
    builder.addCase(getEmployeeDetailAction.fulfilled, (state, action) => {
      state.employee = action.payload;
    });
  },
});

export const { increaseCount } = actions;
export const employeeList = ({ employee }: any) => employee.employeeList;
