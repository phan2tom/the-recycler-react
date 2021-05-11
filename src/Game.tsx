import './Game.scss';

import music from './sounds/GameMusic.mp3';

import React from 'react';
import StarPlan from './Space/StarPlan';
import PlayerShip from './Board/PayerShip';

class Game extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div id='board' className='game'>
        <audio autoPlay={true} loop={true} src={music}></audio>
        <StarPlan name='background' scrollDelay={10000} />
        <StarPlan name='foreground' scrollDelay={5000} />
        <PlayerShip />
      </div>
    );
  }
}

export default Game;