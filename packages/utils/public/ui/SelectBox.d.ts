import * as cva_dist_types from 'cva/dist/types';
import { VariantProps } from 'cva';
import { ComponentProps } from 'react';

declare const selectStyles: (props?: ({
    color?: "orange" | "emerald" | "twitter" | "pink" | null | undefined;
    iconColor?: "orange" | "emerald" | "twitter" | "pink" | null | undefined;
    width?: "narrower" | "narrow" | "regular" | "wide" | "wider" | null | undefined;
} & cva_dist_types.ClassProp) | undefined) => string;
type SelectStyleProps = VariantProps<typeof selectStyles>;
type List = {
    title: string;
} & Record<string, any>;
interface Props extends Omit<SelectStyleProps, "iconColor">, Omit<ComponentProps<"div">, "color"> {
    list: List[];
    searchBar?: boolean;
}
declare function SelectBox({ list, searchBar, color, width, }: Props): JSX.Element;

export { Props, SelectBox as default };
