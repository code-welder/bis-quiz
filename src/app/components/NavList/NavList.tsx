import { Text } from "@/shared/ui";
import { useId } from "react";

export type NavListItem = { title: string; link: string };

type NavListProps = {
  title?: string;
  ariaLabelledby?: string;
  className?: string;
  children?: React.ReactNode;
};

export const NavList: React.FC<NavListProps> = ({ title, ariaLabelledby, className, children }) => {
  const ariaId = useId();

  return (
    <nav
      aria-labelledby={title ? ariaLabelledby ?? ariaId : undefined}
      className={[className].filter(Boolean).join(" ")}
    >
      {title && (
        <Text as="h2" weight={600} size="body-sm" id={ariaLabelledby ?? ariaId} style={{ opacity: 0.5 }}>
          {title}
        </Text>
      )}
      {children}
    </nav>
  );
};
