import { ImageProps } from 'next/image';
import { ReactNode } from 'react';

type SliderProps = {
    children: ReactNode;
};
declare function Slider({ children }: SliderProps): JSX.Element;
declare namespace Slider {
    var image: ({ src, ...props }: ImageProps) => JSX.Element;
}

export { Slider as default };
