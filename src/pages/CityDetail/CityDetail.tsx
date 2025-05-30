import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiArrowLeft, FiMapPin, FiClock, FiStar, FiCamera, FiCalendar, FiUsers, FiShoppingBag, FiCoffee } from 'react-icons/fi';
import { Button } from '@/components/common/Button/Button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { containerVariants, itemVariants } from '@/utils/animations';
import styles from './CityDetail.module.scss';

// 城市详细数据
const cityData = {
  beijing: {
    name: { en: 'Beijing', zh: '北京' },
    subtitle: { en: 'The Majestic Capital', zh: '雄伟首都' },
    description: { 
      en: 'Beijing, the capital of China, is a city where ancient imperial grandeur meets modern innovation. Home to the Forbidden City, Great Wall, and countless cultural treasures.',
      zh: '北京，中国的首都，是一座古代皇家威严与现代创新相遇的城市。这里有故宫、长城和无数文化瑰宝。'
    },
    hero: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    rating: 4.9,
    visitDuration: '3-4',
    bestTime: { en: 'Spring & Autumn', zh: '春秋季节' },
    attractions: [
      {
        name: { en: 'Forbidden City', zh: '故宫' },
        description: { en: 'Former Chinese imperial palace', zh: '中国古代皇宫' },
        image: 'https://images.unsplash.com/photo-1564173555298-8d66b6af8dd0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        duration: '3-4',
        price: '¥60'
      },
      {
        name: { en: 'Great Wall', zh: '长城' },
        description: { en: 'Ancient fortification wonder', zh: '古代防御工程奇迹' },
        image: 'https://images.unsplash.com/photo-1546548970-71785318a17b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        duration: '5-6',
        price: '¥45'
      },
      {
        name: { en: 'Temple of Heaven', zh: '天坛' },
        description: { en: 'Imperial sacrificial complex', zh: '皇家祭祀建筑群' },
        image: 'https://images.unsplash.com/photo-1545128485-c400e7702796?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        duration: '2-3',
        price: '¥35'
      }
    ],
    cuisine: [
      { name: { en: 'Peking Duck', zh: '北京烤鸭' }, icon: '🦆' },
      { name: { en: 'Jiaozi Dumplings', zh: '饺子' }, icon: '🥟' },
      { name: { en: 'Zhajiangmian', zh: '炸酱面' }, icon: '🍜' }
    ],
    tips: {
      transportation: { en: 'Extensive subway system', zh: '发达的地铁系统' },
      language: { en: 'Mandarin widely spoken', zh: '普通话广泛使用' },
      currency: { en: 'Chinese Yuan (CNY)', zh: '人民币 (CNY)' },
      weather: { en: 'Four distinct seasons', zh: '四季分明' }
    }
  },
  // 可以添加更多城市数据...
  shanghai: {
    name: { en: 'Shanghai', zh: '上海' },
    subtitle: { en: 'The Pearl of the Orient', zh: '东方明珠' },
    description: { 
      en: 'Shanghai is a global financial hub and cultural melting pot, where colonial architecture meets futuristic skyscrapers along the iconic Bund.',
      zh: '上海是全球金融中心和文化熔炉，在著名的外滩，殖民地建筑与未来主义摩天大楼相遇。'
    },
    hero: 'https://images.unsplash.com/photo-1537519732345-d89d45b6e89a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    rating: 4.8,
    visitDuration: '2-3',
    bestTime: { en: 'Spring & Autumn', zh: '春秋季节' },
    attractions: [
      {
        name: { en: 'The Bund', zh: '外滩' },
        description: { en: 'Historic waterfront promenade', zh: '历史悠久的滨水长廊' },
        image: 'https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        duration: '2-3',
        price: '免费'
      },
      {
        name: { en: 'Yu Garden', zh: '豫园' },
        description: { en: 'Classical Chinese garden', zh: '中国古典园林' },
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        duration: '2-3',
        price: '¥40'
      }
    ],
    cuisine: [
      { name: { en: 'Xiaolongbao', zh: '小笼包' }, icon: '🥟' },
      { name: { en: 'Shengjianbao', zh: '生煎包' }, icon: '🥖' },
      { name: { en: 'Hairy Crab', zh: '大闸蟹' }, icon: '🦀' }
    ],
    tips: {
      transportation: { en: 'Modern subway network', zh: '现代地铁网络' },
      language: { en: 'Mandarin & Shanghainese', zh: '普通话和上海话' },
      currency: { en: 'Chinese Yuan (CNY)', zh: '人民币 (CNY)' },
      weather: { en: 'Subtropical climate', zh: '亚热带气候' }
    }
  }
};

export const CityDetail: React.FC = () => {
  const { cityId } = useParams<{ cityId: string }>();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { ref, isVisible } = useScrollAnimation();
  const currentLang = i18n.language === 'zh' ? 'zh' : 'en';

  const city = cityId ? cityData[cityId as keyof typeof cityData] : null;

  if (!city) {
    return (
      <div className={styles.notFound}>
        <h1>{t('cityDetail.notFound')}</h1>
        <Button onClick={() => navigate('/cities')}>
          {t('cityDetail.backToCities')}
        </Button>
      </div>
    );
  }

  return (
    <div className={styles.cityDetail}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <img src={city.hero} alt={city.name[currentLang]} className={styles.heroImage} />
        <div className={styles.heroOverlay}>
          <div className={styles.container}>
            <motion.div
              className={styles.heroContent}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.button
                className={styles.backButton}
                onClick={() => navigate('/cities')}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiArrowLeft />
                {t('cityDetail.back')}
              </motion.button>
              
              <motion.h1 className={styles.heroTitle} variants={itemVariants}>
                {city.name[currentLang]}
              </motion.h1>
              <motion.p className={styles.heroSubtitle} variants={itemVariants}>
                {city.subtitle[currentLang]}
              </motion.p>
              
              <motion.div className={styles.heroStats} variants={itemVariants}>
                <div className={styles.stat}>
                  <FiStar />
                  <span>{city.rating}</span>
                </div>
                <div className={styles.stat}>
                  <FiClock />
                  <span>{city.visitDuration} {t('cityDetail.days')}</span>
                </div>
                <div className={styles.stat}>
                  <FiCalendar />
                  <span>{city.bestTime[currentLang]}</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        {/* Description */}
        <motion.section
          className={styles.description}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          ref={ref}
        >
          <motion.p variants={itemVariants}>
            {city.description[currentLang]}
          </motion.p>
        </motion.section>

        {/* Attractions */}
        <motion.section
          className={styles.attractions}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.h2 variants={itemVariants}>
            {t('cityDetail.attractions.title')}
          </motion.h2>
          <div className={styles.attractionsGrid}>
            {city.attractions.map((attraction, index) => (
              <motion.div
                key={attraction.name.en}
                className={styles.attractionCard}
                variants={itemVariants}
                custom={index}
                whileHover={{ y: -5 }}
              >
                <div className={styles.attractionImage}>
                  <img src={attraction.image} alt={attraction.name[currentLang]} />
                  <div className={styles.attractionOverlay}>
                    <FiCamera />
                  </div>
                </div>
                <div className={styles.attractionContent}>
                  <h3>{attraction.name[currentLang]}</h3>
                  <p>{attraction.description[currentLang]}</p>
                  <div className={styles.attractionMeta}>
                    <span className={styles.duration}>
                      <FiClock />
                      {attraction.duration} {t('cityDetail.hours')}
                    </span>
                    <span className={styles.price}>{attraction.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Cuisine */}
        <motion.section
          className={styles.cuisine}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.h2 variants={itemVariants}>
            {t('cityDetail.cuisine.title')}
          </motion.h2>
          <motion.div className={styles.cuisineGrid} variants={itemVariants}>
            {city.cuisine.map((dish, index) => (
              <div key={dish.name.en} className={styles.cuisineItem}>
                <span className={styles.cuisineIcon}>{dish.icon}</span>
                <span className={styles.cuisineName}>{dish.name[currentLang]}</span>
              </div>
            ))}
          </motion.div>
        </motion.section>

        {/* Travel Tips */}
        <motion.section
          className={styles.tips}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.h2 variants={itemVariants}>
            {t('cityDetail.tips.title')}
          </motion.h2>
          <motion.div className={styles.tipsGrid} variants={itemVariants}>
            <div className={styles.tipCard}>
              <FiMapPin />
              <div>
                <h3>{t('cityDetail.tips.transportation')}</h3>
                <p>{city.tips.transportation[currentLang]}</p>
              </div>
            </div>
            <div className={styles.tipCard}>
              <FiUsers />
              <div>
                <h3>{t('cityDetail.tips.language')}</h3>
                <p>{city.tips.language[currentLang]}</p>
              </div>
            </div>
            <div className={styles.tipCard}>
              <FiShoppingBag />
              <div>
                <h3>{t('cityDetail.tips.currency')}</h3>
                <p>{city.tips.currency[currentLang]}</p>
              </div>
            </div>
            <div className={styles.tipCard}>
              <FiCoffee />
              <div>
                <h3>{t('cityDetail.tips.weather')}</h3>
                <p>{city.tips.weather[currentLang]}</p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* CTA */}
        <motion.div
          className={styles.cta}
          variants={itemVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <h2>{t('cityDetail.cta.title', { city: city.name[currentLang] })}</h2>
          <p>{t('cityDetail.cta.description')}</p>
          <div className={styles.ctaActions}>
            <Button variant="primary" size="lg">
              {t('cityDetail.cta.bookTour')}
            </Button>
            <Button variant="ghost" size="lg">
              {t('cityDetail.cta.customPlan')}
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}; 