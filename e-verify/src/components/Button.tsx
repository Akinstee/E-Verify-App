const Button = (props: { children: any; className: string; onClick?: any }) => {
  const { children, className, onClick } = props;

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
