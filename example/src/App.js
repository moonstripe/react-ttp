import React, {Component} from 'react'
import { StringToPara } from 'react-ttp'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \nAtque blanditiis dicta error explicabo facere facilis fugiat fugit ipsum magni nemo. \nAccusamus amet aspernatur assumenda atque commodi doloremque dolores ea earum eius est exercitationem explicabo fugiat hic, impedit ipsa laudantium maiores molestias, nostrum odio pariatur perspiciatis quam repudiandae sapiente voluptas voluptate?'
  }

  render() {
    return (
      <StringToPara text={this.text} />
    )
  }
}
