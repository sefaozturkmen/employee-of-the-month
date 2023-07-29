import { gql } from "@apollo/client";
import { client } from "../ApolloClient";
import { IEmployeeQRequest, IEmplyeeListQRequest } from "@/app/interface/employee";

export const getEmployees = async () => {
  const { data } = await client.query<IEmplyeeListQRequest>({
    query: gql`
      query {
        employeeList {
          id
          firstName
          photo
          lastName
          jobTitle
          department
          count
        }
      }
    `,
  });

  return data;
};
export const getEmployeeDetail = async (id: string) => {
  const { data } = await client.query<IEmployeeQRequest>({
    query: gql`
      query employee($id: ID!) {
        employee(id: $id) {
          id
          firstName
          lastName
          photo
          jobTitle
          department
          email
          count
          age
          gender
        }
      }
    `,
    variables: { id },
  });

  return data;
};
