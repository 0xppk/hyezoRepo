import { ReactNode } from 'react';

interface Props {
    seo: {
        title?: string;
        imagePath?: string;
        url?: string;
        description?: string;
    };
    action?: ReactNode;
    children: ReactNode;
}
/**
 * @example
 * <Container
 *   title="혜조로그"
 *   imagePath="/images/2023/default/logo.png"
 *   url="https://www.hyezoprk.com"
 *   description="혜조의 블로그"
 * >
 *   {children}
 * </Container>
 */
declare function Container({ seo, action, children }: Props): JSX.Element;

export { Container as default };
