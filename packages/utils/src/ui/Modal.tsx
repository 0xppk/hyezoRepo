"use client";

import { Dialog, Transition } from "@headlessui/react";
import { cva, VariantProps } from "cva";
import {
  ComponentProps,
  Dispatch,
  Fragment,
  ReactNode,
  RefObject,
  SetStateAction,
} from "react";
import { cn } from "../utils";

const modalStyles = cva(
  `w-full transform overflow-hidden rounded-xl text-left shadow-xl transition-all`,
  {
    variants: {
      width: {
        narrower: "max-w-xs",
        narrow: "max-w-sm",
        regular: "max-w-md",
        wide: "max-w-lg",
        wider: "max-w-2xl",
      },
      center: {
        true: "flex flex-col",
      },
    },
    defaultVariants: {
      width: "regular",
    },
  },
);

type ModalStyleProps = VariantProps<typeof modalStyles>;

export interface ModalProps extends ModalStyleProps, ComponentProps<"div"> {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  center?: boolean;
  focusRef?: RefObject<HTMLInputElement>;
}

export default function Modal({
  isOpen,
  setIsOpen,
  title,
  center,
  width,
  children,
  className,
  focusRef,
  ...props
}: ModalProps) {
  const closeModal = () => setIsOpen(false);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={closeModal}
        initialFocus={focusRef}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-70" aria-hidden="true" />
        </Transition.Child>
        <div className="fixed inset-0 flex min-h-full items-center justify-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-75 sm:scale-90"
            enterTo="opacity-100 scale-90 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-90 sm:scale-100"
            leaveTo="opacity-0 scale-75 sm:scale-95"
          >
            <div className="modal rounded-xl">
              <Dialog.Panel className={cn(modalStyles({ width, center, className }))}>
                {children}
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

type ModalContentProps = {
  children: ReactNode;
  className?: string;
  center?: boolean;
};
Modal.Content = ({ children, className }: ModalContentProps) => {
  return (
    <Dialog.Description as="div" className={className}>
      {children}
    </Dialog.Description>
  );
};
Modal.Title = ({ children, center, className }: ModalContentProps) => {
  return (
    <Dialog.Title
      as="h3"
      className={cn(
        `text-lg font-medium leading-6 text-gray-900 ${
          center && "place-self-center"
        } ${className}`,
      )}
    >
      {children}
    </Dialog.Title>
  );
};
