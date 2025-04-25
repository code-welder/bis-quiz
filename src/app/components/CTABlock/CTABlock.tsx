import { Button, Container, Text } from "@/shared/ui";
import styles from "./CTABlock.module.css";

type CTABLockProps = {
  title: string;
  buttonText: string;
  sectionId?: string;
  children?: React.ReactNode;
  onButtonClick?: () => void;
};

export const CTABlock: React.FC<CTABLockProps> = ({ title, buttonText, sectionId, children, onButtonClick }) => {
  return (
    <Container className={styles.root} as="section" id={sectionId}>
      <Text className={styles.title} as="h2" size="h2" weight={700}>
        {title}
      </Text>
      {children}
      <Button size="md" onClick={onButtonClick}>
        <Text>{buttonText}</Text>
      </Button>
    </Container>
  );
};
