import React from 'react';
import { StyledStartButton } from './styles/StyledStartButton';

const StartButton = ({startGame}) => (
  <StyledStartButton onClick={() => startGame()}>Start Game</StyledStartButton>
);

export default StartButton;
