interface Props {
  className?: any
}

const Button: React.FC<Props> = ({ className, children }) => {
  return (
    <button className={className}>
      {children}
    </button>
  );
};

export default Button;
