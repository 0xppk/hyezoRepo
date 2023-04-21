import "@total-typescript/ts-reset";
import { ReactNode as ReactNodeType } from "react";

declare global {
  type ReactNode = ReactNodeType;

  type LayoutProps = {
    children: ReactNode;
  };

  type PageProps<T> = {
    params: T;
  };
}

type TSiteConfig = {
  title: string;
  name: string;
  description: string;
  url: string;
  links: {
    twitter: string;
    github: string;
  };
};
