import Layout from "./layout";

const Page = () => {
  return <div>Employee</div>;
};
Page.getLayout = (page: any) => <Layout>{page}</Layout>;
export default Page;
