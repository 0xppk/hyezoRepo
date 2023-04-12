import * as cva_dist_types from 'cva/dist/types';
import { VariantProps } from 'cva';
import { ComponentProps, Dispatch, SetStateAction, RefObject, ReactNode } from 'react';

declare const modalStyles: (props?: ({
    width?: "narrower" | "narrow" | "regular" | "wide" | "wider" | null | undefined;
    center?: boolean | null | undefined;
} & cva_dist_types.ClassProp) | undefined) => string;
type ModalStyleProps = VariantProps<typeof modalStyles>;
interface ModalProps extends ModalStyleProps, ComponentProps<"div"> {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    center?: boolean;
    focusRef?: RefObject<HTMLInputElement>;
}
declare function Modal({ isOpen, setIsOpen, title, center, width, children, className, focusRef, ...props }: ModalProps): JSX.Element;
declare namespace Modal {
    var Content: ({ children, className }: ModalContentProps) => JSX.Element;
    var Title: ({ children, center, className }: ModalContentProps) => JSX.Element;
}

type ModalContentProps = {
    children: ReactNode;
    className?: string;
    center?: boolean;
};

export { ModalProps, Modal as default };