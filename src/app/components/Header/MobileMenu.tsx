import Link from "next/link";

import { Text, Container, Button } from "@/shared/ui";
import { NavList } from "@/app/components";
import { NAV_LIST, SOCIALS_LIST } from "@/app/helpers/constants";

import styles from "./MobileMenu.module.css";

type MobileMenuProps = {
  onLinkClick?: () => void;
  onLoginClick?: () => void;
};

export const MobileMenu: React.FC<MobileMenuProps> = ({ onLinkClick, onLoginClick }) => {
  return (
    <Container className={styles.root}>
      <NavList className={styles.nav} title="Сайт">
        <Text as="ul" className={styles.navList} size="subheading">
          {NAV_LIST?.map(({ title, link }, idx) => (
            <li key={idx}>
              <Link href={link} onClick={onLinkClick}>
                {title}
              </Link>
            </li>
          ))}
        </Text>
      </NavList>

      <NavList className={styles.nav} title="Сайт">
        <Text as="ul" className={styles.navList} size="subheading">
          {SOCIALS_LIST?.map(({ title, link }, idx) => (
            <li key={idx}>
              <Link href={link} onClick={onLinkClick} target="_blank">
                {title}
              </Link>
            </li>
          ))}
        </Text>
      </NavList>

      <div className={styles.login}>
        <Text className={styles.text}>Попробовать бесплатно</Text>
        <Button fullWidth onClick={onLoginClick}>
          <Text>Войти</Text>
        </Button>
      </div>
    </Container>
  );
};
