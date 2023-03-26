import { ButtonOrLinkProps } from './ButtonOrLink.js';
import 'react';

interface Props extends ButtonOrLinkProps {
}
declare function Link({ href, ...props }: Props): JSX.Element;

export { Props, Link as default };
