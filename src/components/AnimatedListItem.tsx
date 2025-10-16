'use client';

import { motion } from 'motion/react';

interface AnimatedListItemProps {
  children: React.ReactNode;
  delay?: number;
  classStr?: string;
}

export default function AnimatedListItem({
  children,
  delay = 0,
  classStr = 'inline-block',
}: AnimatedListItemProps) {
  return (
    <motion.li
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
      className={classStr}
    >
      {children}
    </motion.li>
  );
}
