export const TETROMINOS = {
  0: { shape: [[0]],
      color: '0,0,0' },
  I: { shape: [
              [0,'I', 0, 0],
              [0,'I', 0, 0],
              [0,'I', 0, 0],
              [0,'I', 0, 0],
            ],
        color: '80, 227, 230'
      },
  J: { shape: [
              [0,'J', 0],
              [0,'J', 0],
              [0,'J', 'J'],
            ],
        color: '3, 95 223'
      },
  L: { shape: [
              [0,'L', 0],
              [0,'L', 0],
              [0,'L', 'L'],
            ],
        color: '233, 175, 223'
      },
  O: { shape: [
              ['O', 'O'],
              ['O', 'O'],
            ],
        color: '233, 210, 223'
      },
  S: { shape: [
              [0, 'S', 'S'],
              [0, 'S', 'S'],
              [0, 0, 0]
            ],
        color: '48, 211, 56'
    },
    T: { shape: [
                ['T', 'T', 'T'],
                [0, 'T', 0],
                [0, 'T', 0]
              ],
          color: '132, 51, 98'
      },
    Z: { shape: [
                ['Z', 'Z', 0],
                [0, 'Z', 'Z'],
                [0, 0, 0]
              ],
          color: '227, 78, 78'
      }
}

export const randomTetro = ()  => {
  const tetrominos = 'IJLOSTZ';

  const randomTetromino = tetrominos[Math.floor(Math.random() * tetrominos.length)];
  return TETROMINOS[randomTetromino];
}
