import React from "react";
import  './Button.less'

export interface ButtonProps {
  label: string;
  onClick: () => void,
  mode?: 'default' | 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const Button = (
  {
    mode = 'default',
    size = 'md',
    onClick,
    label,
    ...props
  }: ButtonProps) => {

  return (
    <button
      onClick={ onClick }
      className={
        [
          "ev-button",
          `ev-button-mode--${ mode }`,
          `ev-button-size--${ size }`
        ].join(' ')
      }
    >
      {label}
    </button>
  );
};

export default Button;
