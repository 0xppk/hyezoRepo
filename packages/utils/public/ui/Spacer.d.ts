import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    wrapperClassName?: string;
    textClassName?: string;
    borderClassName?: string;
};
declare function Spacer({ wrapperClassName, textClassName, borderClassName, children, }: Props): JSX.Element;

export { Spacer as default };
