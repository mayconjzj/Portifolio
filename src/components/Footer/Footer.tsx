import { FooterConfig } from '@/config';

import { Icon } from '../Icon';

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-screen bg-black py-2">
      <div className="flex justify-evenly w-96 mx-auto">
        {FooterConfig.map((item) => (
          <a key={item.title} href={item.href} target={item.target}>
            <Icon key={item.title} icon={item.icon} />
          </a>
        ))}
      </div>
    </footer>
  );
};
