// see css in js : https://juejin.cn/post/7071209824729432100
// The below is css module approach
import styles from './Default.module.css'

export default function CssModules() {
    return (
        <div className={styles.main}>
            <div className={styles.sub}>
                <span className={`${styles.styleFirst} ${styles.styleSecond}`}>use two class as the same time</span>
            </div>
        </div>
    )
}