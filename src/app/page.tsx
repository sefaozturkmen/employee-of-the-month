import EmployeeList from "@/components/EmployeeList";
import Link from "next/link";

export default async function Home() {
  return (
    <main>
      <div className="container">
        <div className="home-page-header">
          <h2>Employee Of The Month</h2>
          <Link href="logs">Logs</Link>
        </div>
        <div className="employee-list-wrapper">
          <EmployeeList />
        </div>
      </div>
    </main>
  );
}
