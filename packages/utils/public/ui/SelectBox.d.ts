import * as cva_dist_types from 'cva/dist/types';
import { VariantProps } from 'cva';
import { ComponentProps } from 'react';

declare const selectStyles: (props?: ({
    color?: "orange" | "emerald" | "twitter" | "pink" | null | undefined;
    iconColor?: "orange" | "emerald" | "twitter" | "pink" | null | undefined;
    width?: "narrower" | "narrow" | "regular" | "wide" | "wider" | null | undefined;
} & cva_dist_types.ClassProp) | undefined) => string;
type SelectStyleProps = VariantProps<typeof selectStyles>;
interface Props<T, K extends keyof T> extends Omit<SelectStyleProps, "iconColor">, Omit<ComponentProps<"div">, "color"> {
    list: T[];
    searchBar?: boolean;
    labelKey?: K;
    uniqueKey?: keyof T;
}
declare function SelectBox<T, K extends keyof T>({ list, searchBar, color, width, labelKey, uniqueKey, }: Props<T, K>): JSX.Element;

export { Props, SelectBox as default };
