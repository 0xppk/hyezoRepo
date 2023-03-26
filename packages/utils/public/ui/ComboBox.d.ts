import * as cva_dist_types from 'cva/dist/types';
import { VariantProps } from 'cva';
import { ComponentProps } from 'react';

declare const comboStyles: (props?: ({
    color?: "orange" | "emerald" | "twitter" | "pink" | null | undefined;
    iconColor?: "orange" | "emerald" | "twitter" | "pink" | null | undefined;
    width?: "narrower" | "narrow" | "regular" | "wide" | "wider" | null | undefined;
} & cva_dist_types.ClassProp) | undefined) => string;
type ComboStyleProps = VariantProps<typeof comboStyles>;
interface List extends Record<string, any> {
    id: number;
    title: string;
}
interface Props extends Omit<ComboStyleProps, "iconColor">, Omit<ComponentProps<"li">, "color"> {
    list: List[];
}
declare function RemoveDuplicated(list: List[]): List[];
declare function ComboBox({ list, color, width, ...props }: Props): JSX.Element;

export { RemoveDuplicated, ComboBox as default };
