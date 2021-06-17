import styles from './Header.module.css';
import Link from 'next/link'

export default function Header() {

    return (
        <header className={styles.header}>
            <Link href="/">
                <a>
                    <h1>Ball dont Lie</h1>
                </a>
            </Link>
        </header>
    )
}