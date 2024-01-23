'use client';

import { HiBars2, HiXMark } from 'react-icons/hi2';

import { useToggleMenu } from './hooks';

export const ToggleButton = () => {
  const { isOpenMenu, handleToggleMenu } = useToggleMenu();

  return (
    <div className="md:hidden flex gap-3 text-3xl" onClick={handleToggleMenu}>
      {!isOpenMenu && <HiBars2 />}
      {isOpenMenu && <HiXMark />}
    </div>
  );
};
