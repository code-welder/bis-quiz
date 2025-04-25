import styles from "./Button.module.css";

type ButtonProps<T extends React.ElementType> = {
  variant?: "primary";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  as?: T;
} & React.ComponentPropsWithoutRef<T>;

export const Button = <T extends React.ElementType = "button">({
  as,
  children,
  className,
  variant = "primary",
  size = "sm",
  fullWidth,
  ...props
}: ButtonProps<T>) => {
  const Component = as || "button";
  return (
    <Component
      className={[styles.root, className].filter(Boolean).join(" ")}
      data-variant={variant}
      data-size={size}
      data-full-width={fullWidth}
      {...props}
    >
      {children}
    </Component>
  );
};
