import { ComponentProps } from 'react';

interface Props extends ComponentProps<"textarea"> {
    label: string;
    type?: "textarea";
}
declare function TextArea({ label, type, ...props }: Props): JSX.Element;

export { TextArea as default };
