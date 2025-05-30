import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend, FiMessageSquare, FiUser, FiCalendar } from 'react-icons/fi';
import { Button } from '@/components/common/Button/Button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { containerVariants, itemVariants } from '@/utils/animations';
import styles from './Contact.module.scss';

const contactInfo = [
  {
    icon: <FiPhone />,
    titleKey: 'phone',
    value: '+86 10 1234 5678',
    description: { en: '24/7 Customer Support', zh: '24小时客服支持' }
  },
  {
    icon: <FiMail />,
    titleKey: 'email',
    value: 'info@discoverchina.com',
    description: { en: 'Quick Response Guaranteed', zh: '保证快速回复' }
  },
  {
    icon: <FiMapPin />,
    titleKey: 'address',
    value: { en: 'Beijing, China', zh: '中国北京' },
    description: { en: 'Headquarters Location', zh: '总部所在地' }
  },
  {
    icon: <FiClock />,
    titleKey: 'hours',
    value: { en: 'Mon-Sun 9:00-18:00', zh: '周一至周日 9:00-18:00' },
    description: { en: 'Beijing Time (GMT+8)', zh: '北京时间 (GMT+8)' }
  }
];

const serviceTypes = [
  { key: 'tour', icon: '🗺️' },
  { key: 'visa', icon: '📋' },
  { key: 'transport', icon: '🚗' },
  { key: 'accommodation', icon: '🏨' },
  { key: 'other', icon: '💬' }
];

export const Contact: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { ref, isVisible } = useScrollAnimation();
  const currentLang = i18n.language === 'zh' ? 'zh' : 'en';
  
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    subject: '',
    message: '',
    preferredDate: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 处理表单提交
    console.log('Form submitted:', formData);
    // 这里可以添加实际的提交逻辑
  };

  return (
    <div className={styles.contact}>
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
            <FiMessageSquare />
            <span>{t('contact.badge')}</span>
          </motion.div>
          <motion.h1 className={styles.title} variants={itemVariants}>
            {t('contact.title')}
          </motion.h1>
          <motion.p className={styles.subtitle} variants={itemVariants}>
            {t('contact.subtitle')}
          </motion.p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          className={styles.contactGrid}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.titleKey}
              className={styles.contactCard}
              variants={itemVariants}
              custom={index}
            >
              <div className={styles.cardIcon}>
                {info.icon}
              </div>
              <div className={styles.cardContent}>
                <h3>{t(`contact.info.${info.titleKey}`)}</h3>
                <p className={styles.contactValue}>
                  {typeof info.value === 'object' ? info.value[currentLang] : info.value}
                </p>
                <p className={styles.contactDescription}>
                  {info.description[currentLang]}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className={styles.mainContent}>
          {/* Contact Form */}
          <motion.div
            className={styles.formSection}
            variants={itemVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <h2>{t('contact.form.title')}</h2>
            <p>{t('contact.form.description')}</p>
            
            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">
                    <FiUser />
                    {t('contact.form.name')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t('contact.form.namePlaceholder')}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">
                    <FiMail />
                    {t('contact.form.email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t('contact.form.emailPlaceholder')}
                    required
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">
                    <FiPhone />
                    {t('contact.form.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder={t('contact.form.phonePlaceholder')}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="preferredDate">
                    <FiCalendar />
                    {t('contact.form.preferredDate')}
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="service">
                  {t('contact.form.service')} *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">{t('contact.form.selectService')}</option>
                  {serviceTypes.map(service => (
                    <option key={service.key} value={service.key}>
                      {service.icon} {t(`contact.form.services.${service.key}`)}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject">
                  {t('contact.form.subject')} *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder={t('contact.form.subjectPlaceholder')}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">
                  <FiMessageSquare />
                  {t('contact.form.message')} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={t('contact.form.messagePlaceholder')}
                  rows={5}
                  required
                />
              </div>

              <Button 
                type="submit" 
                variant="primary" 
                size="lg" 
                icon={<FiSend />}
                className={styles.submitButton}
              >
                {t('contact.form.submit')}
              </Button>
            </form>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            className={styles.faqSection}
            variants={itemVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <h2>{t('contact.faq.title')}</h2>
            <div className={styles.faqList}>
              <div className={styles.faqItem}>
                <h3>{t('contact.faq.q1.question')}</h3>
                <p>{t('contact.faq.q1.answer')}</p>
              </div>
              <div className={styles.faqItem}>
                <h3>{t('contact.faq.q2.question')}</h3>
                <p>{t('contact.faq.q2.answer')}</p>
              </div>
              <div className={styles.faqItem}>
                <h3>{t('contact.faq.q3.question')}</h3>
                <p>{t('contact.faq.q3.answer')}</p>
              </div>
              <div className={styles.faqItem}>
                <h3>{t('contact.faq.q4.question')}</h3>
                <p>{t('contact.faq.q4.answer')}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          className={styles.ctaSection}
          variants={itemVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <h2>{t('contact.cta.title')}</h2>
          <p>{t('contact.cta.description')}</p>
          <div className={styles.ctaActions}>
            <Button variant="primary" size="lg" icon={<FiPhone />}>
              {t('contact.cta.call')}
            </Button>
            <Button variant="ghost" size="lg">
              {t('contact.cta.whatsapp')}
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}; 