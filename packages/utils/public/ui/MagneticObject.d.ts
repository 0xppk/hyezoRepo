import { ComponentProps, RefObject } from 'react';

interface Props extends ComponentProps<"div"> {
    ref: RefObject<HTMLDivElement>;
}
declare function Magnet({ ref }: Props): JSX.Element;

export { Magnet as default };
