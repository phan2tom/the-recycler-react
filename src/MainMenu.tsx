import './MainMenu.scss';

import Star from './Space/Star';
import Game from './Game';

import playerShipImage from './images/PlayerShip.png';
import playerBulletImage from './images/PlayerBullet.png';
import enemyGunshipImage from './images/EnemyGunship.png';
import enemyShipImage from './images/EnemyShip.png';
import enemyBulletImage from './images/EnemyBullet.png';
import music from './sounds/MainMenuMusic.mp3';

import React from 'react';
import ReactDOM from "react-dom";

class MainMenu extends React.Component {
  private starsCount = 50 + Math.ceil(Math.random() * 200);

  readonly stars = Array<JSX.Element>();

  constructor(props: any) {
    super(props);
    for (let i = 0; i < this.starsCount; i++) {
      this.stars.push(<Star />);
    }

    this.play = this.play.bind(this);
    this.exit = this.exit.bind(this);
  }

  play() {
  }

  exit() {
    if (window.confirm('Are you sure to exit the game ?')) {
      window.close();
    }
  }

  render() {
    return (
      <div className='mainmenu'>
        <audio autoPlay={true} loop={true} src={music}></audio>

        <h1>The Recycler</h1>
        {this.stars}
        <img className='player-ship' src={playerShipImage}/>
        <img className='player-bullet' data-num='1' src={playerBulletImage}/>
        <img className='player-bullet' data-num='2' src={playerBulletImage}/>
        <img className='enemy-gunship' src={enemyGunshipImage}/>
        <img className='enemy-ship' data-num='1' src={enemyShipImage}/>
        <img className='enemy-ship' data-num='2' src={enemyShipImage}/>
        <img className='enemy-bullet' data-num='1' src={enemyBulletImage}/>
        <img className='enemy-bullet' data-num='2' src={enemyBulletImage}/>

        <ul className='items'>
          <li className='play' onClick={this.play}>Play</li>
          <li className='exit' onClick={this.exit}>Exit</li>
        </ul>
      </div>
    );
  }
}

export default MainMenu;
