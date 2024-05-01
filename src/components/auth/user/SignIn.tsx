"use client";

function SignIn() {
  // const { dispatch } = useContext(UserAuthDispatch);
  // const [mutation, { loading }] = useLazyQuery<
  //   LoginEmployeeQuery,
  //   LoginEmployeeQueryVariables
  // >(LOG_IN_EMPLOYEE, {
  //   onCompleted: (data) => {
  //     sessionStorage.setItem(
  //       AppConfig.CREDENTIAL,
  //       JSON.stringify(data?.loginEmployee?.token)
  //     );
  //     dispatch({
  //       type: ActionsTypes.USERAUTH,
  //       payload: data?.loginEmployee,
  //     });
  //   },
  //   onError(error) {
  //     toast({
  //       title: "Error",
  //       description: error.message,
  //       variant: "destructive",
  //     });
  //   },
  // });
  // const form = useForm<EmployeeLoginInput>({
  //   defaultValues: {
  //     employeeEmail: "",
  //     employeePassword: "",
  //   },
  // });

  // function onSubmit(value: EmployeeLoginInput) {
  //   mutation({ variables: { body: value } });
  // }
  return (
    <>
      {/* <Form {...form}>
        <form
          autoComplete={"off"}
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-3"
        >
          <FormField
            control={form.control}
            name="employeeEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="employeePassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={loading}>
            {loading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
            Submit
          </Button>
        </form>
      </Form> */}
    </>
  );
}

export default SignIn;
