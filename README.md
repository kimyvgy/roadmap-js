# treee-js

> Library for drawing tree diagrams

[![NPM](https://img.shields.io/npm/v/treee-js.svg)](https://www.npmjs.com/package/treee-js) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save treee-js
```

## Usage

```tsx
import * as React from 'react'

import { TreeDiagram, DataSource } from 'treee-js'

const nodeStructure: DataSource = {
  text: <h1>Root</h1>,
  children: [
    { text: 'Element 1' },
    {
      text: 'Element 2',
      children: [
        { text: <div className="node-item">Sub item 1</div> },
        { text: <div className="node-item">Sub item 2</div> },
        { text: <div className="node-item">Sub item 3</div> },
      ]
    }
  ]
}

class Example extends React.Component {
  render () {
    return (
      <TreeDiagram dataSource={nodeStructure} horizontal />
    )
  }
}
```

## Contribute Guide

Let's feel free to create a pull request. Flow the guide below if to develop this library in your local.

### Installation

Install the dependencies and start build this library in development mode.

```bash
git clone git@github.com:kimyvgy/treee-js.git

cd treee-js
yarn install
yarn start
```

### Run example

Now, just run the the example for testing:

```bash
cd example
yarn install
yarn start
```

## License

MIT © [kimyvgy](https://github.com/kimyvgy)
