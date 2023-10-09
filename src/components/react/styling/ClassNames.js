// yarn add classnames
import cs from 'classnames'
import styles from './Default.module.css'

export default function CssModules() {
    return (
        <span className={cs(styles.styleFirst, styles.styleSecond)}>use two class names <br /> as the same time</span>
    )
}