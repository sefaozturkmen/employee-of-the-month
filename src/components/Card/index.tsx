"use client";
import Link from "next/link";
import Button from "../Button";
import { useDispatch } from "react-redux";
import { increaseCount } from "@/app/redux/employeeSlice";
import { IEmployeeList } from "@/app/interface/employee";
import { logEvent } from "@/utils";

export default function Card({
  id,
  firstName,
  photo,
  lastName,
  jobTitle,
  department,
  count,
}: IEmployeeList) {
  const dispatch = useDispatch();

  const increaseCounts = () => {
    logEvent(
      "button_click",
      `The user voted for an employee with ID ${id} full name ${firstName} ${lastName}.`
    );
    dispatch(increaseCount(id));
  };

  return (
    <div className="card">
      <div className="card--header">
        <img src={photo} width={120} height={120} />
      </div>
      <div className="card--body">
        <div className="card--body--fullname">
          <span>{firstName}</span>
          <span>{lastName}</span>
        </div>
        <div className="card--body--title">{jobTitle}</div>
        <div className="card--body--department">{department}</div>
        <div className="card--body--count">
          <span>Verilen Oy {count}</span>
        </div>
        <div className="card--body--actions-wrapper">
          <Button text="Oy Ver" onClick={() => increaseCounts()} />

          <Link
            className="outlined-button"
            onClick={() =>
              logEvent(
                "button_click",
                `The user viewed the profile of the employee with the id ${id} full name ${firstName} ${lastName}.`
              )
            }
            href={`/detail/${id}`}
          >
            Kişiye Git
          </Link>
        </div>
      </div>
    </div>
  );
}
