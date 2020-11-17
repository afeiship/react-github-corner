# react-github-corner
> Github corner for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/react-github-corner
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| value     | string | false    | -       | Default value.                        |


## usage
1. import css
  ```scss
  @import "~@jswork/react-github-corner/dist/style.scss";

  // customize your styles:
  $react-github-corner-options: ()
  ```
2. import js
  ```js
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactGithubCorner from '@jswork/react-github-corner';
  import './assets/style.scss';

  class App extends React.Component {
    componentDidMount() {}
    render() {
      return (
        <div className="app-container">
          <ReactGithubCorner value="https://github.com/afeiship" />
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-github-corner/
- https://upmostly.github.io/modali/


## license
Code released under [the MIT license](https://github.com/afeiship/react-github-corner/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-github-corner
[version-url]: https://npmjs.org/package/@jswork/react-github-corner

[license-image]: https://img.shields.io/npm/l/@jswork/react-github-corner
[license-url]: https://github.com/afeiship/react-github-corner/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-github-corner
[size-url]: https://github.com/afeiship/react-github-corner/blob/master/dist/react-github-corner.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-github-corner
[download-url]: https://www.npmjs.com/package/@jswork/react-github-corner
