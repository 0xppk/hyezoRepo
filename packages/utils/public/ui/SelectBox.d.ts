import * as cva_dist_types from 'cva/dist/types';
import { VariantProps } from 'cva';
import { ComponentProps } from 'react';
import { InputNameProps } from './Form.js';
import 'react-hook-form';
import 'zod';

declare const selectStyles: (props?: ({
    color?: "twitter" | "orange" | "pink" | "emerald" | "darkNavy" | null | undefined;
    iconColor?: "twitter" | "orange" | "pink" | "emerald" | "darkNavy" | null | undefined;
    width?: "narrower" | "narrow" | "regular" | "wide" | "wider" | null | undefined;
} & cva_dist_types.ClassProp) | undefined) => string;
type SelectStyleProps = VariantProps<typeof selectStyles>;
interface Props<T, K extends keyof T> extends Omit<SelectStyleProps, "iconColor">, Omit<ComponentProps<"div">, "color"> {
    list: T[];
    name: keyof InputNameProps;
    labelKey?: K;
    uniqueKey?: keyof T;
    searchBar?: boolean;
    removeDuplicates?: boolean;
}
declare function SelectBox<T, K extends keyof T>({ list, name, color, width, labelKey, uniqueKey, removeDuplicates, searchBar, }: Props<T, K>): JSX.Element;

export { Props, SelectBox as default };
