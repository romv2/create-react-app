import styles from './Layout.scss'

function Layout(props) {
    function selectStyle(layoutStyle) {
        switch (layoutStyle) {
            case 'default':
                return styles.LayoutDefault
            case 'clear':
                return styles.LayoutClearHTML
            default:
                console.error('empty name in Layout prop - check the props, given to Layout component')
                break
        }
    }

    return <div className={selectStyle(props.layoutStyle)}>{props.children}</div>
}

export default Layout
