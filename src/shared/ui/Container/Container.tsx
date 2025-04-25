import styles from "./Container.module.css";

type ContainerProps<T extends React.ElementType> = {
  as?: T;
} & React.ComponentPropsWithoutRef<T>;

export const Container = <T extends React.ElementType = "div">({ as, className, ...props }: ContainerProps<T>) => {
  const Component = as || "div";
  return <Component className={[styles.root, className].filter(Boolean).join(" ")} {...props} />;
};
