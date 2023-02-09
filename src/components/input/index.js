import { Input } from "./Input.styled";

const InputComponent = ({
  icon,
  type = "text",
  placeholder,
  value,
  darkMode,
  className,
  ...rest
}) => {
  return (
    <Input withIcon={icon} darkMode={darkMode} className={className}>
      <input type={type} value={value} placeholder={placeholder} {...rest} />
      {icon && <i className={`icon-${icon}`} />}
    </Input>
  );
};

export default InputComponent;
