import { HiBars2, HiXMark } from 'react-icons/hi2';

import { ToggleButtonProps } from '@/models';

import * as S from './styles';

export const ToggleButton = ({
  isOpenMenu = false,
  handleToggleMenu
}: ToggleButtonProps) => {
  return (
    <S.Content onClick={handleToggleMenu}>
      {!isOpenMenu && <HiBars2 />}
      {isOpenMenu && <HiXMark />}
    </S.Content>
  );
};
