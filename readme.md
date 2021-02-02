# react-modern-library-boilerplate

> TODO: Component Description

[![NPM](https://img.shields.io/npm/v/react-ttp.svg)](https://www.npmjs.com/package/react-modern-library-boilerplate) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-ttp
```

### Roadmap to 1.0.0

- [x] StringToPara Component (Support for newline separated strings)
- [ ] TxtToPara Component (Support for .txt files)
- [ ] RtfToPara Component (Support for .rtf files)

### Roadmap beyond 1.0.0
- [ ] DocxToPara Component (Support for .docx files)
- [ ] Web App to help format text to be used with react-ttp

## Usage

```jsx
import React, { Component } from 'react'

import { StringToPara } from 'react-ttp'

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n\nAtque blanditiis dicta error explicabo facere facilis fugiat fugit ipsum magni nemo. \nAccusamus amet aspernatur assumenda atque commodi doloremque dolores ea earum eius est exercitationem explicabo fugiat hic, impedit ipsa laudantium maiores molestias, nostrum odio pariatur perspiciatis quam repudiandae sapiente voluptas voluptate?' }  
}

  render () {
    return (
      <StringToPara text={this.state.text}/>
    )
  }
}
```

## License

MIT © [moonstripe](https://github.com/moonstripe)

