import Link from 'next/link';

import { LogoProps } from '@/models/Logo';

export const Logo = ({ ContentLogo, Description }: LogoProps) => {
  return (
    <div className="flex justify-center flex-col">
      <Link href="/">
        <span className="font-medium text-[20px]">{ContentLogo}</span>
        {Description && <span className="text-blue-900">{Description}</span>}
      </Link>
    </div>
  );
};
