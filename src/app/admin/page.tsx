import AdminDashboard from "@/components/admin/dashboard/dashboard";
import Layout from "./layout";

const Page = () => {
  return (
    <>
      <AdminDashboard />
    </>
  );
};
Page.getLayout = (page: any) => <Layout>{page}</Layout>;
export default Page;
