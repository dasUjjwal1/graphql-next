"use client";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { PlusCircledIcon } from "@radix-ui/react-icons";

const RoleComponent = () => {
  return (
    <>
      <Drawer>
        <div className="h-full py-10 flex items-center gap-5 flex-col">
          <h2 className="text-2xl">No Role Created</h2>
          <DrawerTrigger asChild>
            <Button className="flex gap-3 font-semibold">
              <PlusCircledIcon />
              Let&apos;s create
            </Button>
          </DrawerTrigger>
        </div>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Create Organization</DrawerTitle>
            <DrawerDescription>
              Data would not be lost untill you reset
            </DrawerDescription>
          </DrawerHeader>
          {/* <Form {...form}>
      <form
        autoComplete={"off"}
        onSubmit={form.handleSubmit(onSubmit)}
        className="p-4 border grid grid-cols-12 gap-2 items-center"
      >
        <CreateOrganization form={form} onSubmit={onSubmit} />
        
      </form>
    </Form> */}
          <DrawerFooter className="col-span-12">
            <Button type="submit">Submit</Button>
            <DrawerClose>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default RoleComponent;