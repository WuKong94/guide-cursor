import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiArrowDown, FiPlay, FiArrowRight } from 'react-icons/fi';
import { Button } from '@/components/common/Button/Button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { heroVariants, itemVariants, containerVariants } from '@/utils/animations';
import styles from './Hero.module.scss';

const heroImages = [
  {
    url: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
    key: 'beijing'
  },
  {
    url: 'https://images.unsplash.com/photo-1537519732345-d89d45b6e89a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
    key: 'shanghai'
  },
  {
    url: 'https://images.unsplash.com/photo-1582192730841-2a8657ff7d46?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
    key: 'hangzhou'
  }
];

export const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const parallaxY = scrollY * 0.5;
  const currentImage = heroImages[currentImageIndex];

  return (
    <section className={styles.hero} ref={ref}>
      {/* Background Images with Parallax */}
      <div className={styles.backgroundContainer}>
        {heroImages.map((image, index) => (
          <motion.div
            key={index}
            className={`${styles.backgroundImage} ${
              index === currentImageIndex ? styles.active : ''
            }`}
            style={{
              backgroundImage: `url(${image.url})`,
              transform: `translateY(${parallaxY}px)`
            }}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: index === currentImageIndex ? 1 : 0,
              scale: index === currentImageIndex ? 1 : 1.1
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        ))}
        <div className={styles.overlay} />
      </div>

      {/* Content */}
      <motion.div
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.h1 className={styles.title} variants={itemVariants}>
          <span className={styles.titleMain}>{t('hero.title.main')}</span>
          <span className={styles.titleAccent}>{t('hero.title.accent')}</span>
          <span className={styles.titleSub}>{t('hero.title.sub')}</span>
        </motion.h1>

        <motion.p className={styles.description} variants={itemVariants}>
          {t('hero.description')}
        </motion.p>

        <motion.div className={styles.stats} variants={itemVariants}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>5</span>
            <span className={styles.statLabel}>{t('hero.stats.cities')}</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>144</span>
            <span className={styles.statLabel}>{t('hero.stats.hours')}</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>53</span>
            <span className={styles.statLabel}>{t('hero.stats.countries')}</span>
          </div>
        </motion.div>

        <motion.div className={styles.actions} variants={itemVariants}>
          <Button variant="primary" size="lg" icon={<FiArrowRight />}>
            {t('hero.actions.start')}
          </Button>
          <Button variant="ghost" size="lg" icon={<FiPlay />}>
            {t('hero.actions.watch')}
          </Button>
        </motion.div>

        <motion.div 
          className={styles.imageInfo}
          variants={itemVariants}
        >
          <span className={styles.imageTitle}>
            {t(`hero.imageInfo.${currentImage.key}.title`)}
          </span>
          <span className={styles.imageDescription}>
            {t(`hero.imageInfo.${currentImage.key}.description`)}
          </span>
        </motion.div>
      </motion.div>

      {/* Image Indicators */}
      <div className={styles.indicators}>
        {heroImages.map((_, index) => (
          <motion.button
            key={index}
            className={`${styles.indicator} ${
              index === currentImageIndex ? styles.active : ''
            }`}
            onClick={() => setCurrentImageIndex(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FiArrowDown />
        </motion.div>
        <span>{t('hero.scroll')}</span>
      </motion.div>

      {/* Floating Elements */}
      <div className={styles.floatingElements}>
        <motion.div
          className={styles.floatingElement}
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className={styles.floatingElement}
          animate={{
            y: [20, -20, 20],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  );
}; 