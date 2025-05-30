import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FiMapPin, FiClock, FiStar, FiArrowRight } from 'react-icons/fi';
import { Button } from '@/components/common/Button/Button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { containerVariants, itemVariants } from '@/utils/animations';
import styles from './Cities.module.scss';

const cities = [
  {
    id: 'beijing',
    name: { en: 'Beijing', zh: '北京' },
    description: { 
      en: 'The capital city of China, home to the Forbidden City and Great Wall',
      zh: '中国首都，故宫和长城的所在地'
    },
    highlights: { en: 'Forbidden City, Great Wall, Temple of Heaven', zh: '故宫、长城、天坛' },
    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    duration: '2-3',
    rating: 4.9,
    attractions: 15,
    category: 'historical'
  },
  {
    id: 'shanghai',
    name: { en: 'Shanghai', zh: '上海' },
    description: { 
      en: 'Modern metropolis blending Eastern and Western cultures',
      zh: '融合东西方文化的现代化大都市'
    },
    highlights: { en: 'The Bund, Yu Garden, Oriental Pearl Tower', zh: '外滩、豫园、东方明珠' },
    image: 'https://images.unsplash.com/photo-1537519732345-d89d45b6e89a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    duration: '2-3',
    rating: 4.8,
    attractions: 12,
    category: 'modern'
  },
  {
    id: 'hangzhou',
    name: { en: 'Hangzhou', zh: '杭州' },
    description: { 
      en: 'Paradise on earth with beautiful West Lake and tea culture',
      zh: '人间天堂，美丽的西湖和茶文化'
    },
    highlights: { en: 'West Lake, Lingyin Temple, Tea Plantations', zh: '西湖、灵隐寺、茶园' },
    image: 'https://images.unsplash.com/photo-1582192730841-2a8657ff7d46?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    duration: '1-2',
    rating: 4.7,
    attractions: 10,
    category: 'nature'
  },
  {
    id: 'guangzhou',
    name: { en: 'Guangzhou', zh: '广州' },
    description: { 
      en: 'Culinary capital famous for Cantonese cuisine and modern architecture',
      zh: '粤菜之都，以广式美食和现代建筑闻名'
    },
    highlights: { en: 'Canton Tower, Chen Clan Ancestral Hall, Dim Sum', zh: '广州塔、陈家祠、粤式茶点' },
    image: 'https://images.unsplash.com/photo-1599802088516-301e3b7c8d95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    duration: '1-2',
    rating: 4.6,
    attractions: 8,
    category: 'cultural'
  },
  {
    id: 'chengdu',
    name: { en: 'Chengdu', zh: '成都' },
    description: { 
      en: 'Home of giant pandas and spicy Sichuan cuisine',
      zh: '大熊猫的故乡和麻辣川菜的发源地'
    },
    highlights: { en: 'Giant Panda Base, Jinli Ancient Street, Hotpot', zh: '大熊猫基地、锦里古街、火锅' },
    image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    duration: '1-2',
    rating: 4.8,
    attractions: 9,
    category: 'nature'
  },
  {
    id: 'xian',
    name: { en: "Xi'an", zh: '西安' },
    description: { 
      en: 'Ancient capital with the famous Terracotta Warriors',
      zh: '古都西安，兵马俑的故乡'
    },
    highlights: { en: 'Terracotta Warriors, Ancient City Wall, Big Wild Goose Pagoda', zh: '兵马俑、古城墙、大雁塔' },
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    duration: '2-3',
    rating: 4.7,
    attractions: 11,
    category: 'historical'
  }
];

const categories = [
  { key: 'all', icon: '🌟' },
  { key: 'historical', icon: '🏛️' },
  { key: 'modern', icon: '🏙️' },
  { key: 'nature', icon: '🌸' },
  { key: 'cultural', icon: '🎭' }
];

export const Cities: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { ref, isVisible } = useScrollAnimation();
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const currentLang = i18n.language === 'zh' ? 'zh' : 'en';

  const filteredCities = selectedCategory === 'all' 
    ? cities 
    : cities.filter(city => city.category === selectedCategory);

  return (
    <div className={styles.cities}>
      <div className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.header}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          ref={ref}
        >
          <motion.div className={styles.badge} variants={itemVariants}>
            <span>{t('cities.badge')}</span>
          </motion.div>
          <motion.h1 className={styles.title} variants={itemVariants}>
            {t('cities.title')}
          </motion.h1>
          <motion.p className={styles.subtitle} variants={itemVariants}>
            {t('cities.subtitle')}
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className={styles.categories}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.key}
              className={`${styles.categoryButton} ${
                selectedCategory === category.key ? styles.active : ''
              }`}
              onClick={() => setSelectedCategory(category.key)}
              variants={itemVariants}
              custom={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className={styles.categoryIcon}>{category.icon}</span>
              <span>{t(`cities.categories.${category.key}`)}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Cities Grid */}
        <motion.div
          className={styles.citiesGrid}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {filteredCities.map((city, index) => (
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
                    <span>{t('cities.explore')}</span>
                  </Link>
                </div>
                <div className={styles.categoryTag}>
                  {categories.find(cat => cat.key === city.category)?.icon}
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

                <p className={styles.description}>
                  {city.description[currentLang]}
                </p>

                <p className={styles.highlights}>
                  <FiMapPin />
                  {city.highlights[currentLang]}
                </p>

                <div className={styles.cardStats}>
                  <div className={styles.stat}>
                    <FiClock />
                    <span>{city.duration} {t('cities.days')}</span>
                  </div>
                  <div className={styles.stat}>
                    <FiMapPin />
                    <span>{city.attractions} {t('cities.attractions')}</span>
                  </div>
                </div>

                <div className={styles.cardFooter}>
                  <Link 
                    to={`/cities/${city.id}`}
                    className={styles.learnMore}
                  >
                    {t('common.learnMore')}
                  </Link>
                  <Button variant="primary" size="sm">
                    {t('cities.viewDetails')}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className={styles.ctaSection}
          variants={itemVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <h2>{t('cities.cta.title')}</h2>
          <p>{t('cities.cta.description')}</p>
          <div className={styles.ctaActions}>
            <Button variant="primary" size="lg" icon={<FiArrowRight />}>
              {t('cities.cta.plan')}
            </Button>
            <Button variant="ghost" size="lg">
              {t('cities.cta.contact')}
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}; 