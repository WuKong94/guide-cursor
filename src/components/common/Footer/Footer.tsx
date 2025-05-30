import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiInstagram, FiTwitter, FiFacebook } from 'react-icons/fi';
import { itemVariants } from '@/utils/animations';
import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language === 'zh' ? 'zh' : 'en';

  const footerLinks = [
    {
      title: t('footer.quickLinks'),
      links: [
        { name: t('navigation.home'), path: '/' },
        { name: t('navigation.cities'), path: '/cities' },
        { name: t('navigation.policy'), path: '/policy' },
        { name: t('navigation.tours'), path: '/tours' }
      ]
    },
    {
      title: t('footer.cities'),
      links: [
        { name: currentLang === 'zh' ? '北京' : 'Beijing', path: '/cities/beijing' },
        { name: currentLang === 'zh' ? '上海' : 'Shanghai', path: '/cities/shanghai' },
        { name: currentLang === 'zh' ? '广州' : 'Guangzhou', path: '/cities/guangzhou' },
        { name: currentLang === 'zh' ? '成都' : 'Chengdu', path: '/cities/chengdu' },
        { name: currentLang === 'zh' ? '杭州' : 'Hangzhou', path: '/cities/hangzhou' }
      ]
    },
    {
      title: t('footer.support'),
      links: [
        { name: t('footer.faq'), path: '/faq' },
        { name: t('footer.help'), path: '/help' },
        { name: t('footer.privacy'), path: '/privacy' },
        { name: t('footer.terms'), path: '/terms' }
      ]
    }
  ];

  const socialLinks = [
    { icon: <FiFacebook />, url: '#', name: 'Facebook' },
    { icon: <FiTwitter />, url: '#', name: 'Twitter' },
    { icon: <FiInstagram />, url: '#', name: 'Instagram' }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main Footer Content */}
        <div className={styles.content}>
          {/* Brand Section */}
          <motion.div 
            className={styles.brand}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className={styles.logo}>
              <span className={styles.logoText}>
                {currentLang === 'zh' ? '发现' : 'Discover'}
              </span>
              <span className={styles.logoAccent}>
                {currentLang === 'zh' ? '中国' : 'China'}
              </span>
            </h3>
            <p className={styles.description}>
              {t('footer.description')}
            </p>
            
            {/* Contact Info */}
            <div className={styles.contact}>
              <div className={styles.contactItem}>
                <FiMail />
                <span>info@discoverchina.com</span>
              </div>
              <div className={styles.contactItem}>
                <FiPhone />
                <span>+86 400-123-4567</span>
              </div>
              <div className={styles.contactItem}>
                <FiMapPin />
                <span>{t('footer.address')}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className={styles.social}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  className={styles.socialLink}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          <div className={styles.links}>
            {footerLinks.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                className={styles.linkSection}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: sectionIndex * 0.1 }}
              >
                <h4 className={styles.linkTitle}>{section.title}</h4>
                <ul className={styles.linkList}>
                  {section.links.map((link) => (
                    <li key={link.path}>
                      <Link 
                        to={link.path} 
                        className={styles.link}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <motion.div 
          className={styles.newsletter}
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h4>{t('footer.newsletter.title')}</h4>
          <p>{t('footer.newsletter.description')}</p>
          <form className={styles.newsletterForm}>
            <input 
              type="email" 
              placeholder={t('footer.newsletter.placeholder')}
              className={styles.emailInput}
            />
            <motion.button 
              type="submit"
              className={styles.subscribeBtn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('footer.newsletter.subscribe')}
            </motion.button>
          </form>
        </motion.div>

        {/* Bottom Bar */}
        <div className={styles.bottom}>
          <div className={styles.bottomContent}>
            <p className={styles.copyright}>
              © 2024 {currentLang === 'zh' ? '发现中国' : 'Discover China'}. {t('footer.rights')}
            </p>
            <div className={styles.policies}>
              <Link to="/privacy">{t('footer.privacy')}</Link>
              <Link to="/terms">{t('footer.terms')}</Link>
              <Link to="/cookies">{t('footer.cookies')}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}; 