import { Button } from "./Button.styled";

const ButtonComponent = ({ onClick, children, link, target = "_self" }) => {
  return (
    <Button onClick={onClick}>
      {link && (
        <a href={link} target={target}>
          {children}
        </a>
      )}
      {children}
    </Button>
  );
};

export default ButtonComponent;
