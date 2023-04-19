import * as cva_dist_types from 'cva/dist/types';
import { VariantProps } from 'cva';
import { ComponentProps } from 'react';
import { InputNameProps } from './Form.js';
import 'react-hook-form';
import 'zod';

declare const comboStyles: (props?: ({
    color?: "twitter" | "orange" | "pink" | "emerald" | "darkNavy" | null | undefined;
    iconColor?: "twitter" | "orange" | "pink" | "emerald" | "darkNavy" | null | undefined;
    width?: "narrower" | "narrow" | "regular" | "wide" | "wider" | null | undefined;
} & cva_dist_types.ClassProp) | undefined) => string;
type ComboStyleProps = VariantProps<typeof comboStyles>;
interface Props<T> extends Omit<ComboStyleProps, "iconColor">, Omit<ComponentProps<"li">, "color"> {
    list: T[];
    name: keyof InputNameProps;
    labelKey: keyof T;
    imageKey?: keyof T;
    removeDuplicates?: boolean;
}
declare function ComboBox<T>({ list, name, color, width, labelKey, imageKey, removeDuplicates, ...props }: Props<T>): JSX.Element;

export { ComboBox as default };
