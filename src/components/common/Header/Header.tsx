import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiMenu, FiX, FiGlobe } from 'react-icons/fi';
import { Button } from '../Button/Button';
import { menuVariants, menuItemVariants } from '@/utils/animations';
import styles from './Header.module.scss';

const navigation = [
  { name: 'navigation.home', path: '/' },
  { name: 'navigation.cities', path: '/cities' },
  { name: 'navigation.policy', path: '/policy' },
  { name: 'navigation.tours', path: '/tours' },
  { name: 'navigation.contact', path: '/contact' }
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(newLang);
  };

  const currentLang = i18n.language === 'zh' ? 'zh' : 'en';

  return (
    <motion.header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className={styles.logoText}>
              {currentLang === 'zh' ? '发现' : 'Discover'}
            </span>
            <span className={styles.logoAccent}>
              {currentLang === 'zh' ? '中国' : 'China'}
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          {navigation.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${styles.navLink} ${
                location.pathname === item.path ? styles.active : ''
              }`}
            >
              <motion.span
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {t(item.name)}
              </motion.span>
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className={styles.actions}>
          <motion.button
            className={styles.langButton}
            onClick={toggleLanguage}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiGlobe />
            <span>{currentLang === 'en' ? '中文' : 'English'}</span>
          </motion.button>

          <div className={styles.ctaButton}>
            <Button variant="primary" size="md">
              {t('header.startPlanning')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className={styles.menuButton}
            onClick={toggleMenu}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <nav className={styles.mobileNav}>
              {navigation.map((item, index) => (
                <motion.div
                  key={item.path}
                  variants={menuItemVariants}
                  custom={index}
                >
                  <Link
                    to={item.path}
                    className={`${styles.mobileNavLink} ${
                      location.pathname === item.path ? styles.active : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t(item.name)}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={menuItemVariants}
                custom={navigation.length}
                className={styles.mobileActions}
              >
                <Button variant="primary" size="lg">
                  {t('header.startPlanning')}
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </motion.header>
  );
}; 