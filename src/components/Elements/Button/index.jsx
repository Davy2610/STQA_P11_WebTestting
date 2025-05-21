const Button = (props) => {
  const { children, classname = "bg-black", onClick = () => {}, type = "button" } = props;
  return (
    <button type={type} className={`text-white rounded-md h-10 px-6 ${classname}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
