import Layout from "./layout";
import Home from "@/components/application/home/Home";

const Page = () => {
  return (
    <>
      <Home />
    </>
  );
};
Page.getLayout = (page: any) => <Layout>{page}</Layout>;
export default Page;
