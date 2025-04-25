import Image from "next/image";

import { Button, Container, Text } from "@/shared/ui";
import { FeaturesBlockOne } from "@/app/sections";

import MainImg from "@/app/assets/hero-main.png";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Container as="section" className={styles.hero}>
        <div className={styles.content}>
          <Text className={styles.title} as="h1" size="h1" weight={700}>
            Объединяйте команды через увлекательные квизы
          </Text>

          <Text as="p" size="subtitle" className={styles.subtitle}>
            Платформа для геймифицированного тимбилдинга и корпоративных квизов
          </Text>

          <Button size="lg">
            <Text>Начать бесплатно</Text>
          </Button>
        </div>

        <div className={styles.img} style={{ aspectRatio: `${MainImg.width}/${MainImg.height}` }}>
          <Image src={MainImg} fill alt="" priority />
        </div>
      </Container>

      <FeaturesBlockOne />
    </main>
  );
}
