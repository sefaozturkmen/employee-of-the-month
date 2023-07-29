import EmployeeList from "@/components/EmployeeList";

export default async function Home() {
  return (
    <main>
      <div className="container">
        <div className="employee-list-wrapper">
          <EmployeeList />
        </div>
      </div>
    </main>
  );
}
