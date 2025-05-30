import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiClock, FiUsers, FiMapPin, FiStar, FiArrowRight, FiCalendar, FiDollarSign } from 'react-icons/fi';
import { Button } from '@/components/common/Button/Button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { containerVariants, itemVariants } from '@/utils/animations';
import styles from './Tours.module.scss';

const tourPackages = [
  {
    id: 'classic-china',
    title: { en: 'Classic China Explorer', zh: '经典中国探索之旅' },
    description: { 
      en: 'Experience the best of China in 5 days - from ancient palaces to modern skylines',
      zh: '5天体验中国精华 - 从古老宫殿到现代天际线'
    },
    duration: '5',
    groupSize: '2-8',
    price: { en: '$899', zh: '¥6299' },
    rating: 4.9,
    reviews: 128,
    highlights: { 
      en: ['Forbidden City', 'Great Wall', 'Shanghai Bund', 'West Lake'],
      zh: ['紫禁城', '长城', '上海外滩', '西湖']
    },
    cities: ['Beijing', 'Shanghai', 'Hangzhou'],
    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'cultural'
  },
  {
    id: 'modern-metropolis',
    title: { en: 'Modern Metropolis Tour', zh: '现代都市之旅' },
    description: { 
      en: 'Discover China\'s cutting-edge cities and technological marvels',
      zh: '探索中国尖端城市和科技奇迹'
    },
    duration: '4',
    groupSize: '2-12',
    price: { en: '$699', zh: '¥4899' },
    rating: 4.8,
    reviews: 86,
    highlights: { 
      en: ['Oriental Pearl Tower', 'Canton Tower', 'Modern Architecture', 'Tech Districts'],
      zh: ['东方明珠塔', '广州塔', '现代建筑', '科技园区']
    },
    cities: ['Shanghai', 'Guangzhou'],
    image: 'https://images.unsplash.com/photo-1537519732345-d89d45b6e89a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'modern'
  },
  {
    id: 'culinary-journey',
    title: { en: 'Culinary Journey', zh: '美食之旅' },
    description: { 
      en: 'Taste authentic Chinese cuisine across different regions and cooking styles',
      zh: '品尝不同地区和烹饪风格的正宗中国菜'
    },
    duration: '6',
    groupSize: '4-10',
    price: { en: '$1299', zh: '¥9099' },
    rating: 4.9,
    reviews: 67,
    highlights: { 
      en: ['Peking Duck', 'Sichuan Hotpot', 'Dim Sum', 'Cooking Classes'],
      zh: ['北京烤鸭', '四川火锅', '粤式茶点', '烹饪课程']
    },
    cities: ['Beijing', 'Chengdu', 'Guangzhou'],
    image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'culinary'
  },
  {
    id: 'nature-heritage',
    title: { en: 'Nature & Heritage', zh: '自然与文化遗产' },
    description: { 
      en: 'Explore China\'s natural beauty and UNESCO World Heritage sites',
      zh: '探索中国的自然美景和联合国教科文组织世界遗产'
    },
    duration: '7',
    groupSize: '2-6',
    price: { en: '$1599', zh: '¥11199' },
    rating: 4.7,
    reviews: 45,
    highlights: { 
      en: ['West Lake', 'Terracotta Warriors', 'Temple of Heaven', 'Traditional Gardens'],
      zh: ['西湖', '兵马俑', '天坛', '传统园林']
    },
    cities: ['Hangzhou', 'Xi\'an', 'Beijing'],
    image: 'https://images.unsplash.com/photo-1582192730841-2a8657ff7d46?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'heritage'
  }
];

const categories = [
  { key: 'all', icon: '🌟' },
  { key: 'cultural', icon: '🏛️' },
  { key: 'modern', icon: '🏙️' },
  { key: 'culinary', icon: '🍜' },
  { key: 'heritage', icon: '🏯' }
];

export const Tours: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { ref, isVisible } = useScrollAnimation();
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const currentLang = i18n.language === 'zh' ? 'zh' : 'en';

  const filteredTours = selectedCategory === 'all' 
    ? tourPackages 
    : tourPackages.filter(tour => tour.category === selectedCategory);

  return (
    <div className={styles.tours}>
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
            <span>{t('tours.badge')}</span>
          </motion.div>
          <motion.h1 className={styles.title} variants={itemVariants}>
            {t('tours.title')}
          </motion.h1>
          <motion.p className={styles.subtitle} variants={itemVariants}>
            {t('tours.subtitle')}
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
              <span>{t(`tours.categories.${category.key}`)}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Tours Grid */}
        <motion.div
          className={styles.toursGrid}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {filteredTours.map((tour, index) => (
            <motion.div
              key={tour.id}
              className={styles.tourCard}
              variants={itemVariants}
              custom={index}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.imageContainer}>
                <img 
                  src={tour.image} 
                  alt={tour.title[currentLang]}
                  className={styles.tourImage}
                />
                <div className={styles.overlay}>
                  <div className={styles.overlayContent}>
                    <FiArrowRight />
                    <span>{t('tours.viewDetails')}</span>
                  </div>
                </div>
                <div className={styles.priceTag}>
                  {tour.price[currentLang]}
                </div>
              </div>
              
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.tourTitle}>
                    {tour.title[currentLang]}
                  </h3>
                  <div className={styles.rating}>
                    <FiStar />
                    <span>{tour.rating}</span>
                    <span className={styles.reviewCount}>({tour.reviews})</span>
                  </div>
                </div>

                <p className={styles.description}>
                  {tour.description[currentLang]}
                </p>

                <div className={styles.tourStats}>
                  <div className={styles.stat}>
                    <FiClock />
                    <span>{tour.duration} {t('tours.days')}</span>
                  </div>
                  <div className={styles.stat}>
                    <FiUsers />
                    <span>{tour.groupSize} {t('tours.people')}</span>
                  </div>
                  <div className={styles.stat}>
                    <FiMapPin />
                    <span>{tour.cities.length} {t('tours.cities')}</span>
                  </div>
                </div>

                <div className={styles.highlights}>
                  <h4>{t('tours.highlights')}</h4>
                  <div className={styles.highlightsList}>
                    {tour.highlights[currentLang].slice(0, 3).map((highlight, idx) => (
                      <span key={idx} className={styles.highlight}>
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={styles.cardFooter}>
                  <div className={styles.price}>
                    <span className={styles.priceLabel}>{t('tours.from')}</span>
                    <span className={styles.priceValue}>{tour.price[currentLang]}</span>
                  </div>
                  <Button variant="primary" size="sm">
                    {t('tours.bookNow')}
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
          <h2>{t('tours.cta.title')}</h2>
          <p>{t('tours.cta.description')}</p>
          <div className={styles.ctaActions}>
            <Button variant="primary" size="lg" icon={<FiCalendar />}>
              {t('tours.cta.customize')}
            </Button>
            <Button variant="ghost" size="lg">
              {t('tours.cta.consultation')}
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}; 