import EmployeeComponent from "@/components/admin/employee/Employee";
import Layout from "./layout";

const Page = () => {
  return (
    <>
      <EmployeeComponent />
    </>
  );
};
Page.getLayout = (page: any) => <Layout>{page}</Layout>;

export default Page;
