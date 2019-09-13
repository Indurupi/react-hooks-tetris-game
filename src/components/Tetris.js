import React, { useState } from 'react';
import Display from './Display';
import StartButton from './StartButton';
import Stage from './Stage';
import { createStage } from '../gameHelper';
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';

const Tetris = () => {
  const [dropTime, setDropTime ] = useState(null);
  const [gameOver, setGameOver ] =  useState(false);

  const [player, updatePlayerPosition, resetPlayer] = usePlayer();
  const [stage, setStage] = useStage(player);

  const movePlayer = (dir) => {
    updatePlayerPosition({ x: dir, y:0});
  }

  const start = () => {
    //reset all
    setStage(createStage());
    resetPlayer();
  }

  const drop = () => {
    updatePlayerPosition({ x:0, y: 1,  collided: false})
  }

  const dropPlayer = () => {
    drop();
  }

  const move = ({ keyCode }) => {
    if(!gameOver) {
      if(keyCode === 37) {
        movePlayer(-1);
      } else if(keyCode === 39) {
        movePlayer(1);
      } else if(keyCode === 40) {
        dropPlayer();
      }
    }
  }
  console.log("rerender");
  return (
    <div>
      <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
        <StyledTetris>
          <Stage stage={ stage } />
            <aside>
              { gameOver ? (<Display gameOver text="GameOver" />) :
                (<div>
                  <Display gameOver text="Score" />
                  <Display gameOver text="Rows" />
                  <Display gameOver text="Level" />
                </div>)
              }
              <StartButton startGame={start} />
            </aside>
          </StyledTetris>
      </StyledTetrisWrapper>
    </div>
  )};

export default Tetris;
