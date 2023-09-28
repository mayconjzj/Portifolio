import { useState, useCallback } from 'react';

export const useMainNav = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleToggleMenu = useCallback(() => {
    setIsOpenMenu(!isOpenMenu);
  }, [isOpenMenu]);

  return {
    isOpenMenu,
    handleToggleMenu
  };
};
