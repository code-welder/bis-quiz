import Link from "next/link";

import { Container, Text } from "@/shared/ui";
import { Logo, NavList } from "@/app/components";
import styles from "./Footer.module.css";
import { NAV_LIST, SOCIALS_LIST } from "@/app/helpers";

export const Footer = () => {
  return (
    <footer className={styles.root}>
      <Container className={styles.grid}>
        <div className={styles.logo}>
          <Logo />
        </div>

        <Text size="body-sm" style={{ opacity: 0.5 }} className={styles.rights}>
          © 2025 BisQuiz. Все права защищены.
        </Text>

        <Link href="#" className={styles.policy}>
          <Text size="body-sm" style={{ opacity: 0.5 }}>
            Политика конфиденциальности
          </Text>
        </Link>

        <div className={styles.navBlock}>
          <NavList title="Сайт" className={styles.nav}>
            <Text as="ul" className={styles.navList}>
              {NAV_LIST?.map(({ title, link }, idx) => (
                <li key={idx}>
                  <Link href={link}>{title}</Link>
                </li>
              ))}
            </Text>
          </NavList>

          <NavList title="Сайт" className={styles.nav}>
            <Text as="ul" className={styles.navList}>
              {SOCIALS_LIST?.map(({ title, link }, idx) => (
                <li key={idx}>
                  <Link href={link} target="_blank">
                    {title}
                  </Link>
                </li>
              ))}
            </Text>
          </NavList>
        </div>
      </Container>
    </footer>
  );
};
