import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { FooterProps } from '@/models/Footer';

export const FooterConfig: FooterProps[] = [
  {
    title: 'GitHub',
    href: 'https://github.com/mayconjzj',
    target: '_blank',
    icon: <AiFillGithub />
  },
  {
    title: 'Linkedin',
    href: 'https://www.linkedin.com/in/mayconjzj/',
    target: '_blank',
    icon: <AiFillLinkedin />
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/mayconjzj',
    target: '_blank',
    icon: <AiFillInstagram />
  }
];
