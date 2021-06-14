import classes from './HideContent.scss'

function HideContent(props) {
    return <div className={props.hide ? classes.hide : classes.show}>{props.children}</div>
}

export default HideContent
