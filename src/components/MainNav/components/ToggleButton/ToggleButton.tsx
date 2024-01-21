'use client';

import { HiBars2, HiXMark } from 'react-icons/hi2';

import { useToggleMenu } from './hooks';
import * as S from './styles';

export const ToggleButton = () => {
  const { isOpenMenu, handleToggleMenu } = useToggleMenu();

  return (
    <S.Content onClick={handleToggleMenu}>
      {!isOpenMenu && <HiBars2 />}
      {isOpenMenu && <HiXMark />}
    </S.Content>
  );
};
