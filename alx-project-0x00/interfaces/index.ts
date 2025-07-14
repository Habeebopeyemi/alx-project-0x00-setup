export interface PillProps {
  title: string;
}

export type Sizes = "small" | "medium" | "large";

export type Shapes = "rounded-sm" | "rounded-md" | "rounded-full";

export interface Styles {
  size?: Sizes;
  shape?: Shapes;
}
export interface ButtonProps {
  title: string;
  styles: Styles;
}
