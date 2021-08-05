import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ImageIcon from '../ImageIcon/ImageIcon';
import closeImg from '../../assets/img/close.svg';
import { Colors, Sizes } from '../../types/types';
import { resetGame } from '../../features/game/gameSlice';

const CloseBtn = (): JSX.Element => {
  const dispatch = useDispatch();

  const handleOnCloseClick = () => {
    dispatch(resetGame());
  };

  return (
    <NavLink to="/textbook" onClick={handleOnCloseClick}>
      <ImageIcon src={closeImg} alt="закрыть" size={Sizes.CLOSE} color={Colors.BLACK} />
    </NavLink>
  );
};

export default CloseBtn;
