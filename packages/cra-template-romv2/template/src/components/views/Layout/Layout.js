import { Component } from 'react'
import stylesDefault from './styles/LayoutDefault.scss'

class Layout extends Component {
    selectStyle() {
        switch (this.props.layoutStyle) {
            case 'default':
                return stylesDefault.LayoutDefault
            default:
                console.error('empty name in Layout prop - check the props, given to Layout component')
                break
        }
    }
    render() {
        return (
            <>
                <div className={this.selectStyle()}>{this.props.children}</div>
            </>
        )
    }
}

export default Layout
