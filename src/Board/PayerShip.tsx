import './PlayerShip.scss';

import * as React from 'react';
import jQuery from 'jquery';

import playerShipImage from '../images/PlayerShip.png';

export default class PlayerShip extends React.Component {
  private ship: React.RefObject<any>;
  private isMoving = false;
  private movingFlags: { [index: string]: boolean } = { ArrowUp: false, ArrowRight: false, ArrowDown: false, ArrowLeft: false };

  constructor(props: any) {
    super(props);

    this.ship = React.createRef();

    document.addEventListener('keydown', e => this.onKeyDown(e));
    document.addEventListener('keyup', e => this.onKeyUp(e));
  }

  onKeyDown(e: KeyboardEvent) {
    let keycode = e.code;
    let flag = this.movingFlags[keycode];
    if (flag === undefined || flag) {
      return;
    }

    this.movingFlags[keycode] = true;

    const moveShip = () => {
      const movePixelCount = 5;
      let ship = jQuery(this.ship.current);
      let offset = ship.offset();
      if (offset) {
        switch (keycode) {
          case 'ArrowUp':
            let upTop = offset.top - movePixelCount;
            if (upTop < 0) {
              upTop = 0;
            }
            ship.css({ top: `${upTop}px` });
            break;
          case 'ArrowRight':
            let rightLeft = offset.left + movePixelCount;
            if (rightLeft > document.body.offsetWidth - 64) {
              rightLeft = document.body.offsetWidth - 64;
            }
            ship.css({ left: `${rightLeft}px` });
            break;
          case 'ArrowDown':
            let downTop = offset.top + movePixelCount;
            if (downTop > document.body.offsetHeight - 64) {
              downTop = document.body.offsetHeight - 64;
            }
            ship.css({ top: `${downTop}px` });
            break;
          case 'ArrowLeft':
            let leftLeft = offset.left - movePixelCount;
            if (leftLeft < 0) {
              leftLeft = 0;
            }
            ship.css({ left: `${leftLeft}px` });
            break;
        }
      }

      if (this.movingFlags[keycode]) {
        setTimeout(moveShip, 5);
      }
    };

    moveShip();
  }

  onKeyUp(e: KeyboardEvent) {
    let keycode = e.code;
    this.movingFlags[keycode] = false;
  }

  render() {
    return (
      <div className='player' ref={this.ship}>
        <img src={playerShipImage} />
      </div>
    );
  }
}