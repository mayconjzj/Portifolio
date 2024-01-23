import { usePathname } from 'next/navigation';

export const useActiveLink = ({ href }: { href: string }) => {
  const pathname = usePathname();
  const isActive = pathname === href.toString();

  return {
    isActive
  };
};
