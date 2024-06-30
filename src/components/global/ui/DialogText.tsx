const DialogText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return <h4 className={"font-medium col-span-4 " + className}>{text}</h4>;
};

export default DialogText;
