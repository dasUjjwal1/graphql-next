import Organization from "@/components/Organization/Organization";
import Layout from "./layout";

const Page = () => {
  return (
    <>
      <Organization />
    </>
  );
};
Page.getLayout = (page: any) => <Layout>{page}</Layout>;
export default Page;
