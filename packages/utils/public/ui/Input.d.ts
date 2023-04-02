import * as cva_dist_types from 'cva/dist/types';
import { VariantProps } from 'cva';
import { ComponentProps } from 'react';
import { InputProps } from './Form.js';
import 'react-hook-form';
import 'zod';

declare const inputStyles: (props?: ({
    color?: "orange" | "twitter" | "pink" | null | undefined;
    peer?: boolean | null | undefined;
} & cva_dist_types.ClassProp) | undefined) => string;
type InputStyleProps = VariantProps<typeof inputStyles>;
type InputType = keyof InputProps;
interface Props extends InputStyleProps, Omit<ComponentProps<"input">, "color"> {
    type: InputType;
    label?: string;
    placeholder?: string;
    fullWidth?: boolean;
}
declare function Input({ label, type, placeholder, color, fullWidth, className, ...props }: Props): JSX.Element;

export { Input as default };
