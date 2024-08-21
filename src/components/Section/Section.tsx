import { cva } from "class-variance-authority";
import './style.css';

type SectionProps = {
    children?: React.ReactNode;
    variant: 'section' | 'section1' | 'section2'; 
};

export default function Section({ children, variant }: SectionProps) {
    return (
        <section className={sectionstyles({ variant })}>
            {children}
        </section>
    );
}

const sectionstyles = cva('section', {
    variants: {
        variant: {
            section: 'section',
            section1: 'section1',
            section2:'section2',
        }
    }
});
