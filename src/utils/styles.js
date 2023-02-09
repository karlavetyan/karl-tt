import { rgba } from "polished";

export const rem = px => {
  const remSize = px / 10;

  return Math.abs(px) === 1 ? `${px}px` : `${remSize}rem`;
};

export const hover = values => {
  return `&:not(.active) {
      @media all and (hover: hover) {
        &:hover { ${values} }
      },
      @media not all and (hover: hover) {
        &:active { ${values} }
      }
    }`;
};

export const linkLine = color => {
  return `border-bottom: ${rem(1)} solid ${rgba(color, 0.3)};`;
};
