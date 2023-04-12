import { ComponentProps } from 'react';

interface Props extends ComponentProps<"textarea"> {
    name: string;
    label?: string;
}
declare function TextArea({ label, name, className, ...props }: Props): JSX.Element;

export { TextArea as default };
