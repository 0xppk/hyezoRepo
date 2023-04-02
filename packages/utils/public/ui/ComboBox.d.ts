import * as cva_dist_types from 'cva/dist/types';
import { VariantProps } from 'cva';
import { ComponentProps } from 'react';

declare const comboStyles: (props?: ({
    color?: "orange" | "emerald" | "twitter" | "pink" | null | undefined;
    iconColor?: "orange" | "emerald" | "twitter" | "pink" | null | undefined;
    width?: "narrower" | "narrow" | "regular" | "wide" | "wider" | null | undefined;
} & cva_dist_types.ClassProp) | undefined) => string;
type ComboStyleProps = VariantProps<typeof comboStyles>;
interface Props<T, K extends keyof T> extends Omit<ComboStyleProps, "iconColor">, Omit<ComponentProps<"li">, "color"> {
    list: T[];
    labelKey?: K;
    imageKey?: K;
    removeDuplicates?: boolean;
}
declare function ComboBox<T, K extends keyof T>({ list, color, width, labelKey, imageKey, removeDuplicates, ...props }: Props<T, K>): JSX.Element;

export { ComboBox as default };
