import AttendanceCard from "@/components/application/home/AttendenceCard";
import Layout from "./layout";

const Page = () => {
  return (
    <>
      <AttendanceCard />
    </>
  );
};
Page.getLayout = (page: any) => <Layout>{page}</Layout>;
export default Page;
