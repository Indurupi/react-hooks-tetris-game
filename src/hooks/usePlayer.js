import { useState, useCallback } from 'react';
import { TETROMINOS, randomTetro } from '../tetrominos';
import { STAGE_WIDTH } from '../gameHelper';

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x:0, y:0 },
    tetromino: TETROMINOS[0].shape,
    collided: false
  });
  const updatePlayerPosition = ({ x, y, collided}) => {
    setPlayer(prev => ({
      ...prev,
      pos: {
        x: prev.pos.x += x,
        y: prev.pos.y += y,
      },
      collided
    }));
  }

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: (STAGE_WIDTH / 2) - 2, y:0 },
      tetromino: randomTetro().shape,
      collided: false
    });
  }, []);

  return [player, updatePlayerPosition, resetPlayer];
};
