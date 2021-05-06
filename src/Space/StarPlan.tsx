import React from 'react';
import jQuery from 'jquery';

import Star from './Star';

type StarPlanProps = {
  name: string,
  scrollDelay: number
}

class StarPlan extends React.Component<StarPlanProps> {
  private container: any;
  private timerId: any;
  private alternativeView = false;

  private stars = {
    view1: this.createStars(-100),
    view2: this.createStars(-100),
    defaultview: this.createStars(0),
  };

  constructor(props: StarPlanProps) {
    super(props);

    this.container = React.createRef();
  }

  componentDidMount() {
    jQuery(this.container.current).find('.defaultview .star')
      .animate({ top: `+=${100}vh` }, {
        duration: this.props.scrollDelay * 0.9,
        easing: 'linear'
      });
    jQuery(this.container.current).find('.view1 .star')
      .animate({ top: `+=${200}vh` }, {
        duration: this.props.scrollDelay * 1.8,
        easing: 'linear'
      });

    this.timerId = setInterval(() => {
      this.alternativeView = !this.alternativeView;
      let stars = this.alternativeView ? this.stars.view2 : this.stars.view1;
      stars.forEach(s => s.ref.current?.refreshCoord())
      jQuery(this.container.current).find(`.view${this.alternativeView ? 2 : 1} .star`)
        .stop(true, true)
        .animate({ top: `+=${200}vh` }, {
          duration: this.props.scrollDelay * 1.8,
          easing: 'linear'
        });
    }, this.props.scrollDelay);
  }
  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  createStars(viewTop: number) {
    let stars = [];
    let randomStarsCount = Math.ceil(30 + Math.random() * 30);
    for (let i = 0; i < randomStarsCount; i++) {
      stars.push({ viewTop, ref: React.createRef<Star>() });
    }
    return stars;
  }

  render() {
    return (
      <div className={`plan ${this.props.name}`} ref={this.container}>
        <div className='defaultview'>
          {this.stars.defaultview.map(s => (
            <Star {...s} />
          ))}
        </div>
        <div className='view1'>
          {this.stars.view1.map(s => (
            <Star {...s} />
          ))}
        </div>
        <div className='view2'>
          {this.stars.view2.map(s => (
            <Star {...s} />
          ))}
        </div>
      </div>
    );
  }
}

export default StarPlan;