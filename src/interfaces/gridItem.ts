import { JSX } from "react";

export interface IGridItem {
  title: string;
  subtext: string;
  icon: ({ ...restProps }: { [x: string]: any }) => JSX.Element;
  image?: {
    src: string;
    width: string;
    height: string;
    alt: string;
  };
}
