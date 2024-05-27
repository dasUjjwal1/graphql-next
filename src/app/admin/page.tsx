import Dashboard from "@/components/admin/dashboard/Dashboard";
import Layout from "./layout";

const Page = () => {
  return (
    <>
      <Dashboard />
    </>
  );
};
Page.getLayout = (page: any) => <Layout>{page}</Layout>;
export default Page;
