import React from 'react';

class Star extends React.Component<StarProps, StarState> {
  readonly size = Math.ceil(Math.random() * 3);
  readonly left = Math.ceil(Math.random() * 100);

  constructor(props: StarProps) {
    super(props);
    this.state = this.generateCoord();
  }

  private generateCoord() {
    return {
      size: Math.ceil(Math.random() * 3),
      top: this.props.viewTop + Math.ceil(Math.random() * 100),
      left: Math.ceil(Math.random() * 100)
    };
  }

  refreshCoord() {
    this.setState(this.generateCoord());
  }

  render() {
    return (
      <div  className={`star star${this.size}`} style={{ top: `${this.state.top}vh`, left: `${this.left}vw` }}></div>
    );
  }
}

export default Star;

type StarProps = {
  viewTop: number
}
type StarState = {
  size: number,
  top: number,
  left: number
}
