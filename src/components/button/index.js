import { Button } from "./Button.styled";

const ButtonComponent = ({
  onClick,
  icon,
  children,
  link,
  isSmall,
  largeRadius,
  withShadow,
  target = "_self",
  ...rest
}) => {
  return (
    <Button
      onClick={onClick}
      isSmall={isSmall}
      largeRadius={largeRadius}
      withShadow={withShadow}
      {...rest}
    >
      {link && (
        <a href={link} target={target} className="invisibleLink">
          {children}
        </a>
      )}
      {children}
      {icon && <i className={`icon-${icon}`} />}
    </Button>
  );
};

export default ButtonComponent;
