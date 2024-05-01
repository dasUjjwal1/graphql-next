"use client";

function AdminRegister() {
  // const { setDetails } = useAdminAuthStore((state) => state);

  // const { toast } = useToast();
  // const validationSchema = Yup.object().shape({
  //   email: Yup.string()
  //     .email("Invalid Email")
  //     .required("This field is required"),
  //   password: Yup.string().required("This field is required"),
  //   name: Yup.string().required("This field is required"),
  //   location: Yup.string().required("This field is required"),
  // });
  // const [mutation, { loading }] = useMutation(CreateUserDocument, {
  //   onCompleted: (data) => {
  //     sessionStorage.setItem(
  //       AppConfig.CREDENTIAL,
  //       JSON.stringify(data?.createUser?.token)
  //     );
  //     setDetails(data?.createUser);
  //   },
  //   onError(error) {
  //     toast({
  //       title: "Error",
  //       description: error.message,
  //       variant: "destructive",
  //     });
  //   },
  // });
  // const form = useForm<RegisterProps>({
  //   defaultValues: {
  //     email: "",
  //     password: "",
  //     name: "",
  //     location: "",
  //   },
  //   resolver: yupResolver(validationSchema),
  // });

  // const onSubmit = (value: RegisterProps) => {
  //   const body = {
  //     ...value,
  //     location: Number(value.location),
  //   };
  //   mutation({ variables: { body: body } });
  // };
  return <></>;
}

export default AdminRegister;
