/**
 * @class TextToPara
 */

import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'

// TODO: Create or delete styles (decide whether styles should be coded inline with props)
// import styles from './styles.css'

const StringToPara = (props) => {
  const [iW, sIW] = useState(0)
  useEffect(() => {
    setInterval(
      () => sIW(window.innerWidth),
      1
    )
  }, [])

  return (
    <div>
      {props.text ? props.text.split('\n\n').map(para =>
        <p>
          {para.split('\n').reduce((total, line) => [total,
            <div><img src='via.placeholder.com/25' style={{display: 'block', marginLeft: `${iW / 3}px`}}/>
            </div>, line])}
        </p>
      ) : null}
    </div>
  )
}

StringToPara.propTypes = {
  text: PropTypes.string
}

export {StringToPara}
