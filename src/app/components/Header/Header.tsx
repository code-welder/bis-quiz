"use client";
import { useState } from "react";
import Link from "next/link";

import { Button, Container, Text } from "@/shared/ui";
import { Logo, NavList } from "@/app/components";
import { NAV_LIST, useBodyOverflow } from "@/app/helpers";
import LoginSvg from "@/shared/assets/icons/login.svg";
import MenuSvg from "@/shared/assets/icons/menu.svg";
import CrossSvg from "@/shared/assets/icons/cross.svg";

import styles from "./Header.module.css";
import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toggleOverflow } = useBodyOverflow();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    toggleOverflow();
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    toggleOverflow();
  };

  return (
    <>
      <header className={styles.root} data-menu-open={isMenuOpen}>
        <Container className={styles.container}>
          <button
            className={styles.menuToggle}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            id="toggle-menu"
          >
            {isMenuOpen ? <CrossSvg /> : <MenuSvg />}
          </button>

          <Logo />

          <NavList className={styles.nav}>
            <Text as="ul" className={styles.navList}>
              {NAV_LIST?.map(({ title, link }, idx) => (
                <li key={idx}>
                  <Link href={link}>{title}</Link>
                </li>
              ))}
            </Text>
          </NavList>

          <div className={styles.login} data-visible={!isMenuOpen}>
            <Text className={styles.text}>Попробовать бесплатно</Text>
            <Button className={styles.button}>
              <Text className={styles.buttonText}>Войти</Text>
              <LoginSvg />
            </Button>
          </div>
        </Container>

        <div
          className={styles.mobileMenu}
          id="mobile-menu"
          role="region"
          aria-labelledby="toggle-menu"
          data-open={isMenuOpen}
        >
          <MobileMenu onLinkClick={closeMenu} onLoginClick={closeMenu} />
        </div>
      </header>
    </>
  );
};
