import styles from "./Text.module.css";

type TextProps<T extends React.ElementType> = {
  children: React.ReactNode;
  as?: T;
  size?: "body" | "body-sm" | "h1" | "h2" | "h3" | "subtitle" | "subheading";
  weight?: 400 | 600 | 700;
} & React.ComponentPropsWithoutRef<T>;

export const Text = <T extends React.ElementType = "div">({
  children,
  as,
  size = "body",
  weight = 400,
  className,
  ...props
}: TextProps<T>) => {
  const Component = as || "div";
  return (
    <Component
      className={[styles.root, className].filter(Boolean).join(" ")}
      data-size={size}
      data-weight={weight}
      {...props}
    >
      {children}
    </Component>
  );
};
