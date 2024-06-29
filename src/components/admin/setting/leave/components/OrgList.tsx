import { useAdminAuthStore } from "@/components/admin/AuthContext";
import { GetAllOrganizationDocument } from "@/graphql/graphql";
import { useQuery } from "@apollo/client";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
const OrgList = ({
  onSelectSubmit,
}: {
  onSelectSubmit: (data: string[]) => void;
}) => {
  const token = useAdminAuthStore((state) => state.token);
  const context = {
    headers: {
      authorization: token,
    },
  };

  const { data, loading, refetch } = useQuery(GetAllOrganizationDocument, {
    context,
    onError(error) {
      toast.error(error.message);
    },
  });
  const form = useForm<any>({
    defaultValues: [],
  });
  const onSubmit = (val: { [key: string]: boolean }) => {
    const orgList = [];
    for (const key in val) {
      if (val[key]) {
        orgList.push(key);
      }
    }
    onSelectSubmit(orgList);
  };
  return (
    <form
      className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      onSubmit={form.handleSubmit(onSubmit)}
      onKeyDown={(e) => {
        if (e.key === "Enter") e.preventDefault();
      }}
    >
      {data?.getAllOrganization ? (
        data?.getAllOrganization.map((item) => (
          <div className="bg-gray-100 rounded-xl py-2 px-5" key={item.id}>
            <div className="flex w-full items-center justify-between">
              <h4 className="m-0 font-semibold text-gray-600">{item.name}</h4>
              <div className="flex items-center justify-end flex-1 gap-2">
                <Button
                  type="button"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#5f6368"
                    >
                      <path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z" />
                    </svg>
                  }
                  text
                />
                <Controller
                  name={item.id}
                  control={form.control}
                  render={({ field }) => (
                    <Checkbox checked={field.value} {...field} />
                  )}
                />
              </div>
            </div>
          </div>
        ))
      ) : (
        <></>
      )}
      <div className="flex col-span-3 gap-3 justify-end">
        <Button label="Apply" rounded />
      </div>
    </form>
  );
};

export default OrgList;
