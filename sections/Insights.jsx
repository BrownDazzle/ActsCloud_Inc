'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { insights, projects } from '../constants';
import { staggerContainer } from '../utils/motion';
import { InsightCard, TitleText, TypingText } from '../components';

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Innovations" textStyles="text-center" />
      <TitleText title={<>Innovations in the Cloud</>} textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {projects.map((item, index) => (
          <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
