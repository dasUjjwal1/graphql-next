import Layout from "./layout";
import AdminDashboard from "@/components/admin/dashboard/dashboard";

const Page = () => {
  return (
    <>
      <AdminDashboard />
    </>
  );
};
Page.getLayout = (page: any) => <Layout>{page}</Layout>;
export default Page;
