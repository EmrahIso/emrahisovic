'use client';
import { ReactNode, FC, useState, useEffect } from 'react';
import Image from 'next/image';

interface SkillCardProps {
  title: string;
  icon: ReactNode;
}

const SkillCard: FC<SkillCardProps> = ({ title, icon }) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <Image
        src='data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=='
        alt='Technology icon'
        sizes='18x18'
        width={18}
        height={18}
        priority={false}
        title='Technology icon'
      />
    );

  return (
    <div className=' border-1 border-neutral-400 px-3.5 py-2.5 rounded-full flex items-center gap-3 h-[46px]'>
      <div>{icon}</div>
      <p className='text-base'>{title}</p>
    </div>
  );
};

export default SkillCard;
