import React, { ReactNode } from "react";
import { cva } from "class-variance-authority";
import './style.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
    children?: ReactNode;
    variant: 'btn1' | 'btn2';
}


export default function Button({ text, children, variant, ...props }: ButtonProps) {
  


  return (
    <button className={buttonStyles({ variant })} {...props}>
      {text}
      {children}
    </button>
  );
}


const buttonStyles = cva('btn', {
    variants: {
        variant: {
            btn1: 'btn1',
            btn2: 'btn2',
        }
    },
    defaultVariants: {
        variant: 'btn1'
    }
})