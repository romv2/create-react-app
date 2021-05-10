import React, { Component } from 'react'
import classes from './HideContent.scss'

class HideContent extends Component {
    render() {
        return (
            <div className={this.props.hide ? classes.hide : classes.show}>
                {this.props.children}
            </div>
        )
    }
}

export default HideContent
