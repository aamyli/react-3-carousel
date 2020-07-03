import React, { Component } from "react";
import "./carousel.css";

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLeftIndex: 0,
      currentImageIndex: 1,
      currentRightIndex: 2,
    };

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  previousSlide() {
    const lastIndex = this.props.titles.length - 1;
    const {
      currentLeftIndex,
      currentImageIndex,
      currentRightIndex,
    } = this.state;
    const shouldResetIndexL = currentLeftIndex === 0;
    const shouldResetIndexC = currentImageIndex === 0;
    const shouldResetIndexR = currentRightIndex === 0;
    const indexL = shouldResetIndexL ? lastIndex : currentLeftIndex - 1;
    const indexC = shouldResetIndexC ? lastIndex : currentImageIndex - 1;
    const indexR = shouldResetIndexR ? lastIndex : currentRightIndex - 1;

    this.setState({
      currentLeftIndex: indexL,
      currentImageIndex: indexC,
      currentRightIndex: indexR,
    });
  }

  nextSlide() {
    const lastIndex = this.props.titles.length - 1;
    const {
      currentLeftIndex,
      currentImageIndex,
      currentRightIndex,
    } = this.state;
    const shouldResetIndexL = currentLeftIndex === lastIndex;
    const shouldResetIndexC = currentImageIndex === lastIndex;
    const shouldResetIndexR = currentRightIndex === lastIndex;
    const indexL = shouldResetIndexL ? 0 : currentLeftIndex + 1;
    const indexC = shouldResetIndexC ? 0 : currentImageIndex + 1;
    const indexR = shouldResetIndexR ? 0 : currentRightIndex + 1;

    this.setState({
      currentLeftIndex: indexL,
      currentImageIndex: indexC,
      currentRightIndex: indexR,
    });
  }

  render() {
    return React.createElement(
      "div",
      { className: "carousel" },
      React.createElement(Arrow, {
        direction: "left",
        clickFunction: this.previousSlide,
        glyph: "\u25C0",
      }),
      React.createElement(ImageSlideLeft, {
        top: this.props.titles[this.state.currentLeftIndex],
        text: this.props.descriptions[this.state.currentLeftIndex],
      }),
      React.createElement(ImageSlideCenter, {
        top: this.props.titles[this.state.currentImageIndex],
        text: this.props.descriptions[this.state.currentImageIndex],
      }),
      React.createElement(ImageSlideRight, {
        top: this.props.titles[this.state.currentRightIndex],
        text: this.props.descriptions[this.state.currentRightIndex],
      }),
      React.createElement(Arrow, {
        direction: "right",
        clickFunction: this.nextSlide,
        glyph: "\u25B6",
      })
    );
  }
}

const Arrow = ({ direction, clickFunction, glyph }) =>
  React.createElement(
    "div",
    {
      className: `slide-arrow ${direction}`,
      onClick: clickFunction,
    },
    glyph
  );

const InfoCard = (props) => {
  return (
    <div className={props.name}>
      <div className="card">
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

const ImageSlideLeft = ({ top, text }) => {
  return <InfoCard name="image-slide-left fadeIn" title={top} desc={text} />;
};

const ImageSlideCenter = ({ top, text }) => {
  return <InfoCard name="image-slide-center fadeIn" title={top} desc={text} />;
};

const ImageSlideRight = ({ top, text }) => {
  return <InfoCard name="image-slide-right fadeIn" title={top} desc={text} />;
};
