import Organization from "@/components/admin/Organization/organization";
import Layout from "./layout";

const Page = () => {
  return <Organization />;
};
Page.getLayout = (page: any) => <Layout>{page}</Layout>;
export default Page;
