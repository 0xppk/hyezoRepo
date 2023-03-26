import { ButtonOrLinkProps } from './ButtonOrLink.js';
import { ReactNode } from 'react';

interface MenuProps {
    children: ReactNode;
}
declare function Menu({ children }: MenuProps): JSX.Element;
interface MenuItemProps extends ButtonOrLinkProps {
}
declare function MenuItem({ children, ...props }: MenuItemProps): JSX.Element;

export { Menu, MenuItem, MenuItemProps };
