import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { MainNavProps } from '@/models';

export const FooterConfig: MainNavProps[] = [
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
