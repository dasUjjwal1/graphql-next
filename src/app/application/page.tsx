import ApplicationIndex from "@/components/application/ApplicationIndex";
import Layout from "./layout";

const Page = () => {
  return <ApplicationIndex />;
};
Page.getLayout = (page: any) => <Layout>{page}</Layout>;
export default Page;
