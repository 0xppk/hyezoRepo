import { ButtonProps } from './Button.js';
import 'cva/dist/types';
import 'cva';
import './ButtonOrLink.js';
import 'react';

declare function SubmitButton({ children, ...props }: ButtonProps): JSX.Element;

export { SubmitButton as default };
