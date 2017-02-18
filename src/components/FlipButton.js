// src/components/LikeButton.js
import React, { PureComponent, PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton'


class FlipButton extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    flipped: PropTypes.bool.isRequired,
  }

  classNames() {
    const { flipped } = this.props
    let classes = 'flip'

    if (flipped) { classes += ' flipped' }

    return classes
  }

  toggleFlip() {
    console.log('CLICK (FlipButton)')
    this.props.onChange()
  }

  render() {
    const { flipped } = this.props
    return (
      <p className={ this.classNames() }>
        <button onClick={ this.toggleFlip.bind(this) }>
          <img className="heart" src={ flipped ? HeartRed : HeartGrey } />
          <span className="copy">
            <img className="heart" src={ liked ? HeartRed : HeartGrey } />
          </span>
        </button>
        <span className="likes">{this.likeStatus()}</span>
      </p>
    )
  }
}

export default LikeButton
