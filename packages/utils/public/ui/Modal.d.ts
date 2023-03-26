import * as cva_dist_types from 'cva/dist/types';
import { VariantProps } from 'cva';
import { ComponentProps, Dispatch, SetStateAction, ReactNode } from 'react';

declare const modalStyles: (props?: ({
    width?: "narrower" | "narrow" | "regular" | "wide" | "wider" | null | undefined;
    center?: boolean | null | undefined;
    "bg-color"?: "white" | null | undefined;
} & cva_dist_types.ClassProp) | undefined) => string;
type ModalStyleProps = VariantProps<typeof modalStyles>;
interface ModalProps extends ModalStyleProps, ComponentProps<"div"> {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    center?: boolean;
}
declare function Modal({ isOpen, setIsOpen, title, center, width, children, className, ...props }: ModalProps): JSX.Element;
declare namespace Modal {
    var Content: ({ children }: {
        children: ReactNode;
    }) => JSX.Element;
}

export { ModalProps, Modal as default };
