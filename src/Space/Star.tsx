import React from 'react';

class Star extends React.Component {
  readonly size = Math.ceil(Math.random() * 3);
  readonly top = Math.ceil(Math.random() * 100);
  readonly left = Math.ceil(Math.random() * 100);

  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className={`star star${this.size}`} style={{top: `${this.top}%`, left: `${this.left}%`}}></div>
    );
  }
}

export default Star;