import React, { Component } from 'react';
import { TimelineMax, Linear } from 'gsap';
import ScrollMagic from 'scrollmagic';

class MyComponent extends Component {
  componentDidMount() {
    this.stickyScroll();
  }

  stickyScroll() {
    const timeline = this.refs.infoSection;
    const controller = new ScrollMagic.Controller();
    const slides = timeline.getElementsByClassName('slides')[0];
    const count = timeline.getElementsByClassName('slide').length;

    if (slides) {
      const duration = count * 1000;
      const leftLimit = (slides.offsetWidth - window.innerWidth) * (-1);

      const animation = new TimelineMax().fromTo(
        slides,
        duration,
        {
          x: 0,
        },
        {
          ease: Linear.easeNone,
          x: `${leftLimit}px`,
        }
      );
      new ScrollMagic.Scene({
        triggerElement: timeline,
        triggerHook: 'onLeave',
        duration: duration,
      })
        .setPin(timeline)
        .setTween(animation)
        .addTo(controller);
    }
  }

  render() {
    return (
      <div ref="infoSection" className="info-section slides">
        <div className='slide'>ddddd</div>
        <div className='slide'>ddddd</div>
        <div className='slide'>ddddd</div>
      </div>
    );
  }
}

export default MyComponent