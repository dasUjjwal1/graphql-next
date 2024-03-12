import Layout from "./layout";
import AdminDashboard from "@/components/organization/dashboard/dashboard";

const Page = () => {
  return (
    <>
      <AdminDashboard />
    </>
  );
};
Page.getLayout = (page: any) => <Layout>{page}</Layout>;
export default Page;
