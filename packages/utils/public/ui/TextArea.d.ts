import { ComponentProps } from 'react';
import { InputNameProps } from './Form.js';
import 'react-hook-form';
import 'zod';

interface Props extends ComponentProps<"textarea"> {
    name: keyof InputNameProps;
    label?: string;
}
declare function TextArea({ label, name, className, ...props }: Props): JSX.Element;

export { TextArea as default };
