const DialogText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <h4
      className={
        "text-gray-700 border-0 col-span-4 border-l-8 px-1 border-blue-500 border-solid " +
        className
      }
    >
      {text}
    </h4>
  );
};

export default DialogText;
