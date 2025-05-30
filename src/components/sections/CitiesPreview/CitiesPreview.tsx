import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiMapPin, FiClock, FiStar } from 'react-icons/fi';
import { Button } from '@/components/common/Button/Button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { containerVariants, itemVariants } from '@/utils/animations';
import styles from './CitiesPreview.module.scss';

const cities = [
  {
    id: 'beijing',
    name: { en: 'Beijing', zh: '北京' },
    highlights: { en: 'Forbidden City, Great Wall', zh: '故宫、长城' },
    image: 'https://images.unsplash.com/photo-1559717201-fbb671ff56b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    duration: '2-3',
    rating: 4.9
  },
  {
    id: 'shanghai',
    name: { en: 'Shanghai', zh: '上海' },
    highlights: { en: 'The Bund, Yu Garden', zh: '外滩、豫园' },
    image: 'https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    duration: '2-3',
    rating: 4.8
  },
  {
    id: 'hangzhou',
    name: { en: 'Hangzhou', zh: '杭州' },
    highlights: { en: 'West Lake, Tea Culture', zh: '西湖、茶文化' },
    image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    duration: '1-2',
    rating: 4.7
  },
  {
    id: 'guangzhou',
    name: { en: 'Guangzhou', zh: '广州' },
    highlights: { en: 'Canton Tower, Dim Sum', zh: '广州塔、粤式茶点' },
    image: 'https://images.unsplash.com/photo-1564173555298-8d66b6af8dd0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    duration: '1-2',
    rating: 4.6
  },
  {
    id: 'chengdu',
    name: { en: 'Chengdu', zh: '成都' },
    highlights: { en: 'Giant Pandas, Hotpot', zh: '大熊猫、火锅' },
    image: 'https://images.unsplash.com/photo-1538766017398-415434a31a5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    duration: '1-2',
    rating: 4.8
  }
];

export const CitiesPreview: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { ref, isVisible } = useScrollAnimation();
  const currentLang = i18n.language === 'zh' ? 'zh' : 'en';

  return (
    <section className={styles.citiesPreview} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div className={styles.badge} variants={itemVariants}>
            <span>{t('citiesPreview.badge')}</span>
          </motion.div>
          <motion.h2 className={styles.title} variants={itemVariants}>
            {t('citiesPreview.title')}
          </motion.h2>
          <motion.p className={styles.subtitle} variants={itemVariants}>
            {t('citiesPreview.subtitle')}
          </motion.p>
        </motion.div>

        <motion.div
          className={styles.citiesGrid}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {cities.map((city, index) => (
            <motion.div
              key={city.id}
              className={styles.cityCard}
              variants={itemVariants}
              custom={index}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.imageContainer}>
                <img 
                  src={city.image} 
                  alt={city.name[currentLang]}
                  className={styles.cityImage}
                />
                <div className={styles.overlay}>
                  <Link 
                    to={`/cities/${city.id}`}
                    className={styles.exploreLink}
                  >
                    <FiArrowRight />
                    <span>{t('citiesPreview.explore')}</span>
                  </Link>
                </div>
              </div>
              
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cityName}>
                    {city.name[currentLang]}
                  </h3>
                  <div className={styles.rating}>
                    <FiStar />
                    <span>{city.rating}</span>
                  </div>
                </div>

                <p className={styles.highlights}>
                  <FiMapPin />
                  {city.highlights[currentLang]}
                </p>

                <div className={styles.cardFooter}>
                  <div className={styles.duration}>
                    <FiClock />
                    <span>{city.duration} {t('citiesPreview.days')}</span>
                  </div>
                  <Link 
                    to={`/cities/${city.id}`}
                    className={styles.learnMore}
                  >
                    {t('common.learnMore')}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.actions}
          variants={itemVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <Button variant="primary" size="lg" icon={<FiArrowRight />}>
            {t('citiesPreview.viewAll')}
          </Button>
          <Button variant="ghost" size="lg">
            {t('citiesPreview.customize')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}; 