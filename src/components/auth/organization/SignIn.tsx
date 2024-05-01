"use client";
function AdminSignIn() {
  // const { setDetails } = useAdminAuthStore((state) => state);

  // const { toast } = useToast();
  // const validationSchema = Yup.object({
  //   email: Yup.string()
  //     .email("Invalid Email")
  //     .required("This field is required"),
  //   password: Yup.string().required("This field is required"),
  // }).required();
  // const [mutation, { loading }] = useLazyQuery(LoginUserDocument, {
  //   onCompleted: (data) => {
  //     setDetails(data?.loginUser);
  //   },
  //   onError(error) {
  //     toast({
  //       title: "Error",
  //       description: error.message,
  //       variant: "destructive",
  //     });
  //   },
  // });
  // const form = useForm<UserLogin>({
  //   defaultValues: {
  //     email: "",
  //     password: "",
  //   },
  //   resolver: yupResolver(validationSchema),
  // });

  // function onSubmit(value: UserLogin) {
  //   mutation({ variables: { body: value } });
  // }
  return <></>;
}

export default AdminSignIn;
