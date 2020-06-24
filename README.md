# React Three Panel Carousel

Simple three panel carousel for information sets.
Title is previewed on left and right panels, full display shown on middle card.

### Preview

![demo photo](https://github.com/aamyli/react-3-carousel/tree/master/src/carousel.JPG)

## Features

- Collapses to one panel at medium devices

## Getting started

```
npm i react-3-carousel
```

### Example

```js
import Carousel from "react-3-carousel";

export default class InformationSet extends Component {
  render() {
    return (
      <Carousel
        titles={[
          "SLIDE ONE",
          "SLIDE TWO",
          "SLIDE THREE",
          "SLIDE FOUR",
          "SLIDE FIVE",
        ]}
        descriptions={[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          " Etiam mollis ex dolor, eget gravida felis blandit id. Curabitur congue nibh et gravida volutpat.",
          "Integer tincidunt lorem non lacus laoreet, sed porta dui porttitor. ",
          "Vestibulum suscipit vel dolor sit amet bibendum.",
          "Nam ipsum enim, rutrum nec lectus eu, imperdiet dictum quam. ",
        ]}
      ></Carousel>
    );
  }
}
```

# Props

- `titles`: array of titles
- `descriptions`: array of descriptions

# Basic CSS Changes

currently can go into code files and change;
full instructions coming soon.

# License

MIT
