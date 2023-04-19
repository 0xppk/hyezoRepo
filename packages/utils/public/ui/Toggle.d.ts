import { Dispatch, SetStateAction, ReactNode } from 'react';

type ToggleProps = {
    enabled: boolean;
    setEnabled: Dispatch<SetStateAction<boolean>>;
    children?: ReactNode;
    passive?: boolean;
};
declare function Toggle({ enabled, setEnabled, passive, children, }: ToggleProps): JSX.Element;

export { Toggle as default };
