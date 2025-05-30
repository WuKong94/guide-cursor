import React from 'react';
import { useTranslation } from 'react-i18next';
import { Hero } from '@/components/sections/Hero/Hero';
import { CitiesPreview } from '@/components/sections/CitiesPreview/CitiesPreview';
import { PolicyIntro } from '@/components/sections/PolicyIntro/PolicyIntro';
import { Footer } from '@/components/common/Footer/Footer';
import styles from './Home.module.scss';

export const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.home}>
      <section className={styles.heroSection}>
        <Hero />
      </section>
      <section className={styles.citiesSection}>
        <CitiesPreview />
      </section>
      <section className={styles.policySection}>
        <PolicyIntro />
      </section>
      <footer className={styles.footerSection}>
        <Footer />
      </footer>
    </div>
  );
}; 