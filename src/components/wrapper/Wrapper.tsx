import { cva } from "class-variance-authority";
import './style.css';

type WrapperProps = {
    titel?: string;
    children?: React.ReactNode;
    variant?: 'wrapper' | 'wrapper1'; 
}

export default function Wrapper({ titel, children, variant = 'wrapper' }: WrapperProps) {
    return (
        <div className={wrapperStyles({ variant })}>
            {titel && <h2>{titel}</h2>} 
            {children}
        </div>
    );
}

const wrapperStyles = cva('wrapper', {
    variants: {
        variant: {
            wrapper: 'wrapper',
            wrapper1: 'wrapper1',
        }
    },
    defaultVariants: {
        variant: 'wrapper'
    }
});
