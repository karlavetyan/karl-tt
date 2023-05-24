import classNames from "classnames";

const Button = ({ children, isLoading, onClick }) => {
  return (
    <button className={classNames({ loading: isLoading })} onClick={onClick}>
      {isLoading ? <i className="icon-loader" /> : children}
    </button>
  );
};

export default Button;
