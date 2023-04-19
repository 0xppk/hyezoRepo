import { Dispatch, SetStateAction } from 'react';

type Props<T> = {
    data: T[];
    setData: Dispatch<SetStateAction<T[] | undefined>>;
    labelKeys: string[];
    debounceTime?: number;
    placeholder?: string;
    className?: string;
};
declare function InputSimple<T>({ data, setData, labelKeys, debounceTime, placeholder, className, }: Props<T>): JSX.Element;

export { InputSimple as default };
