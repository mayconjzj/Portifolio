import { LinkProps } from 'next/link';

export type ActiveLinkProps = LinkProps & {
  children: React.ReactNode;
  href: string;
  className?: string;
};
