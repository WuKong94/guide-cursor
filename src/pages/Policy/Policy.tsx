import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiCheck, FiClock, FiMapPin, FiUsers, FiAirplay, FiInfo, FiDownload } from 'react-icons/fi';
import { Button } from '@/components/common/Button/Button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { containerVariants, itemVariants } from '@/utils/animations';
import styles from './Policy.module.scss';

const eligibleCountries = [
  'Austria', 'Belgium', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 
  'Greece', 'Hungary', 'Iceland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 
  'Netherlands', 'Poland', 'Portugal', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'Switzerland',
  'Russia', 'United Kingdom', 'Ireland', 'Cyprus', 'Bulgaria', 'Romania', 'Ukraine', 'Serbia',
  'Croatia', 'Bosnia-Herzegovina', 'Montenegro', 'Macedonia', 'Albania', 'Monaco', 'Belarus',
  'United States', 'Canada', 'Brazil', 'Mexico', 'Argentina', 'Chile', 'Australia', 'New Zealand',
  'South Korea', 'Japan', 'Singapore', 'Brunei', 'United Arab Emirates', 'Qatar'
];

const cities = [
  { name: { en: 'Beijing', zh: '北京' }, airports: ['PEK', 'PKX'] },
  { name: { en: 'Shanghai', zh: '上海' }, airports: ['PVG', 'SHA'] },
  { name: { en: 'Hangzhou', zh: '杭州' }, airports: ['HGH'] },
  { name: { en: 'Guangzhou', zh: '广州' }, airports: ['CAN'] },
  { name: { en: 'Chengdu', zh: '成都' }, airports: ['CTU'] }
];

const requirements = [
  {
    icon: <FiAirplay />,
    key: 'transit'
  },
  {
    icon: <FiClock />,
    key: 'duration'
  },
  {
    icon: <FiMapPin />,
    key: 'area'
  },
  {
    icon: <FiUsers />,
    key: 'passport'
  }
];

const steps = [
  {
    number: '01',
    key: 'arrival'
  },
  {
    number: '02',
    key: 'immigration'
  },
  {
    number: '03',
    key: 'stamp'
  },
  {
    number: '04',
    key: 'explore'
  }
];

export const Policy: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { ref, isVisible } = useScrollAnimation();
  const currentLang = i18n.language === 'zh' ? 'zh' : 'en';

  return (
    <div className={styles.policy}>
      <div className={styles.container}>
        {/* Hero Section */}
        <motion.div
          className={styles.hero}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          ref={ref}
        >
          <motion.div className={styles.badge} variants={itemVariants}>
            <FiInfo />
            <span>{t('policy.badge')}</span>
          </motion.div>
          <motion.h1 className={styles.title} variants={itemVariants}>
            {t('policy.title')}
          </motion.h1>
          <motion.p className={styles.subtitle} variants={itemVariants}>
            {t('policy.subtitle')}
          </motion.p>
          <motion.div className={styles.stats} variants={itemVariants}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>144</span>
              <span className={styles.statLabel}>{t('policy.stats.hours')}</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>53</span>
              <span className={styles.statLabel}>{t('policy.stats.countries')}</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>5</span>
              <span className={styles.statLabel}>{t('policy.stats.cities')}</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Requirements Section */}
        <motion.section
          className={styles.requirements}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.h2 className={styles.sectionTitle} variants={itemVariants}>
            {t('policy.requirements.title')}
          </motion.h2>
          <div className={styles.requirementsList}>
            {requirements.map((requirement, index) => (
              <motion.div
                key={requirement.key}
                className={styles.requirement}
                variants={itemVariants}
                custom={index}
              >
                <div className={styles.requirementIcon}>
                  {requirement.icon}
                </div>
                <div className={styles.requirementContent}>
                  <h3>{t(`policy.requirements.${requirement.key}.title`)}</h3>
                  <p>{t(`policy.requirements.${requirement.key}.description`)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Cities Section */}
        <motion.section
          className={styles.cities}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.h2 className={styles.sectionTitle} variants={itemVariants}>
            {t('policy.cities.title')}
          </motion.h2>
          <motion.p className={styles.sectionSubtitle} variants={itemVariants}>
            {t('policy.cities.subtitle')}
          </motion.p>
          <div className={styles.citiesGrid}>
            {cities.map((city, index) => (
              <motion.div
                key={city.name.en}
                className={styles.cityCard}
                variants={itemVariants}
                custom={index}
              >
                <h3 className={styles.cityName}>{city.name[currentLang]}</h3>
                <div className={styles.airports}>
                  <FiAirplay />
                  <span>{city.airports.join(', ')}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Process Steps */}
        <motion.section
          className={styles.process}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.h2 className={styles.sectionTitle} variants={itemVariants}>
            {t('policy.process.title')}
          </motion.h2>
          <div className={styles.steps}>
            {steps.map((step, index) => (
              <motion.div
                key={step.key}
                className={styles.step}
                variants={itemVariants}
                custom={index}
              >
                <div className={styles.stepNumber}>{step.number}</div>
                <div className={styles.stepContent}>
                  <h3>{t(`policy.process.${step.key}.title`)}</h3>
                  <p>{t(`policy.process.${step.key}.description`)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Eligible Countries */}
        <motion.section
          className={styles.countries}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.h2 className={styles.sectionTitle} variants={itemVariants}>
            {t('policy.countries.title')}
          </motion.h2>
          <motion.p className={styles.sectionSubtitle} variants={itemVariants}>
            {t('policy.countries.subtitle')}
          </motion.p>
          <motion.div className={styles.countriesList} variants={itemVariants}>
            {eligibleCountries.map((country, index) => (
              <motion.div
                key={country}
                className={styles.countryItem}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <FiCheck />
                <span>{country}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Tips & Guidelines */}
        <motion.section
          className={styles.tips}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.h2 className={styles.sectionTitle} variants={itemVariants}>
            {t('policy.tips.title')}
          </motion.h2>
          <div className={styles.tipsGrid}>
            <motion.div className={styles.tipCard} variants={itemVariants}>
              <h3>{t('policy.tips.documents.title')}</h3>
              <ul>
                <li><FiCheck /> {t('policy.tips.documents.passport')}</li>
                <li><FiCheck /> {t('policy.tips.documents.ticket')}</li>
                <li><FiCheck /> {t('policy.tips.documents.hotel')}</li>
              </ul>
            </motion.div>
            <motion.div className={styles.tipCard} variants={itemVariants}>
              <h3>{t('policy.tips.restrictions.title')}</h3>
              <ul>
                <li><FiCheck /> {t('policy.tips.restrictions.area')}</li>
                <li><FiCheck /> {t('policy.tips.restrictions.work')}</li>
                <li><FiCheck /> {t('policy.tips.restrictions.extension')}</li>
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.div
          className={styles.cta}
          variants={itemVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <h2>{t('policy.cta.title')}</h2>
          <p>{t('policy.cta.description')}</p>
          <div className={styles.ctaActions}>
            <Button variant="primary" size="lg" icon={<FiDownload />}>
              {t('policy.cta.download')}
            </Button>
            <Button variant="ghost" size="lg">
              {t('policy.cta.contact')}
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}; 