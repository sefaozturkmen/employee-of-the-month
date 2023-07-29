export interface IEmployeeList {
  id: string;
  firstName?: string;
  photo?: string;
  lastName: string;
  jobTitle: string;
  department: string;
  count: number;
}

export interface IEmployee {
  id: string;
  firstName: string;
  lastName: string;
  photo: string;
  jobTitle: string;
  department: string;
  email: string;
  count: number;
  age: number;
  gender: string;
}

export interface IEmplyeeListQRequest {
  employeeList: IEmployeeList[];
}

export interface IEmployeeQRequest {
  employee: IEmployee;
}
