import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiClock, FiMapPin, FiGlobe, FiCheck, FiArrowRight } from 'react-icons/fi';
import { Button } from '@/components/common/Button/Button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { containerVariants, itemVariants } from '@/utils/animations';
import styles from './PolicyIntro.module.scss';

const features = [
  {
    icon: <FiClock />,
    key: 'duration'
  },
  {
    icon: <FiMapPin />,
    key: 'cities'
  },
  {
    icon: <FiGlobe />,
    key: 'countries'
  }
];

const benefits = [
  'noVisa',
  'easyCities',
  'quickProcess',
  'multipleEntries'
];

export const PolicyIntro: React.FC = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className={styles.policyIntro} ref={ref}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Left Content */}
          <motion.div
            className={styles.textContent}
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.div className={styles.badge} variants={itemVariants}>
              <span>{t('policyIntro.badge')}</span>
            </motion.div>
            
            <motion.h2 className={styles.title} variants={itemVariants}>
              {t('policyIntro.title')}
            </motion.h2>
            
            <motion.p className={styles.description} variants={itemVariants}>
              {t('policyIntro.description')}
            </motion.p>

            {/* Features */}
            <motion.div className={styles.features} variants={itemVariants}>
              {features.map((feature, index) => (
                <motion.div
                  key={feature.key}
                  className={styles.feature}
                  variants={itemVariants}
                  custom={index}
                >
                  <div className={styles.featureIcon}>
                    {feature.icon}
                  </div>
                  <div className={styles.featureContent}>
                    <h4>{t(`policyIntro.features.${feature.key}.title`)}</h4>
                    <p>{t(`policyIntro.features.${feature.key}.description`)}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Benefits */}
            <motion.div className={styles.benefits} variants={itemVariants}>
              <h3>{t('policyIntro.benefits.title')}</h3>
              <ul className={styles.benefitsList}>
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    variants={itemVariants}
                    custom={index}
                  >
                    <FiCheck />
                    <span>{t(`policyIntro.benefits.${benefit}`)}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div className={styles.actions} variants={itemVariants}>
              <Button variant="primary" size="lg" icon={<FiArrowRight />}>
                {t('policyIntro.learnMore')}
              </Button>
              <Button variant="ghost" size="lg">
                {t('policyIntro.checkEligibility')}
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            className={styles.visual}
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.div className={styles.imageContainer} variants={itemVariants}>
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt={t('policyIntro.imageAlt')}
                className={styles.mainImage}
              />
              
              {/* Floating Stats */}
              <motion.div
                className={`${styles.floatingCard} ${styles.stat1}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <div className={styles.statNumber}>144</div>
                <div className={styles.statLabel}>{t('policyIntro.stats.hours')}</div>
              </motion.div>

              <motion.div
                className={`${styles.floatingCard} ${styles.stat2}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <div className={styles.statNumber}>53</div>
                <div className={styles.statLabel}>{t('policyIntro.stats.countries')}</div>
              </motion.div>

              <motion.div
                className={`${styles.floatingCard} ${styles.stat3}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                <div className={styles.statNumber}>5</div>
                <div className={styles.statLabel}>{t('policyIntro.stats.cities')}</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 