import Image from "next/image";

import { Text } from "@/shared/ui";
import { CTABlock } from "@/app/components";

import FeaturePic1 from "./assets/feature-it-team.png";
import FeaturePic2 from "./assets/feature-hr-on-work.png";
import FeaturePic3 from "./assets/feature-people-at-start-up.png";

import styles from "./FeaturesBlockOne.module.css";
import { SECTION_IDS } from "@/app/helpers";

export const FeaturesSectionOne = [
  {
    img: FeaturePic1,
    title: "IT-команды",
    description: "удалённые и гибридные",
  },
  {
    img: FeaturePic2,
    title: "HR и PeopleOps отделы",
    description: "повышающие эффективность труда и удержание талантов",
  },
  {
    img: FeaturePic3,
    title: "Корпорации и стартапы",
    description: "стремящиеся прокачать soft skills, культуру и вовлеченность",
  },
];

export const FeaturesBlockOne = () => {
  return (
    <CTABlock title="Кому подойдёт" buttonText="Заказать консультацию" sectionId={SECTION_IDS.features}>
      <ul className={styles.cards}>
        {FeaturesSectionOne.map(({ img, title, description }, idx) => (
          <li key={idx} className={styles.card}>
            <div className={styles.img}>
              <Image src={img} fill loading="lazy" alt="" />
            </div>
            <Text className={styles.title} as="h3" size="h3" weight={600}>
              {title}
            </Text>
            <Text as="p" style={{ opacity: 0.5 }}>
              {description}
            </Text>
          </li>
        ))}
      </ul>
    </CTABlock>
  );
};
