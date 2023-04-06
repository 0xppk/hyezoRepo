import * as cva_dist_types from 'cva/dist/types';
import { VariantProps } from 'cva';
import { ComponentProps } from 'react';
import { InputNameProps } from './Form.js';
import 'react-hook-form';
import 'zod';

declare const inputStyles: (props?: ({
    color?: "twitter" | "orange" | "pink" | "darkNavy" | null | undefined;
    peer?: boolean | null | undefined;
} & cva_dist_types.ClassProp) | undefined) => string;
type InputStyleProps = VariantProps<typeof inputStyles>;
type InputType = keyof InputNameProps;
interface Props extends InputStyleProps, Omit<ComponentProps<"input">, "color"> {
    name: InputType;
    label?: string;
    fullWidth?: boolean;
}
declare function Input({ label, type, name, placeholder, color, fullWidth, className, ...props }: Props): JSX.Element;

export { Input as default };
