import { Input } from "./Input.styled";

const InputComponent = ({ icon, type = "text", placeholder, value }) => {
  return (
    <Input withIcon={icon}>
      <input type={type} value={value} placeholder={placeholder} />{" "}
      {icon && <i className={`icon-${icon}`} />}
    </Input>
  );
};

export default InputComponent;
