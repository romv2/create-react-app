import { Component } from 'react'
import styles from './Layout.scss'

class Layout extends Component {
    selectStyle() {
        switch (this.props.layoutStyle) {
            case 'default':
                return styles.LayoutDefault
            case 'clear':
                return styles.LayoutClearHTML
            default:
                console.error('empty name in Layout prop - check the props, given to Layout component')
                break
        }
    }
    render() {
        return (
            <>
                <div styleName={this.selectStyle()}>{this.props.children}</div>
            </>
        )
    }
}

export default Layout
