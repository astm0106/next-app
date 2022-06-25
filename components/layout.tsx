import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/stylecomp/Layout.module.css'

type Props = {
    children?: React.ReactNode
    title?: string
    description?: string
}

export default function Layout({ children, title, description }: Props) {
    const pageTitle = title || 'ホームページタイトル'
    return (
        <div className={styles.wrap}>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={description || 'ホームページ概要'} />
            </Head>
            <header>
                <nav >
                    <h1>{pageTitle}</h1>
                    <div className={styles.categories}>
                        <ul>
                            <li><Link href="/"><a>ホーム</a></Link></li>
                            <li><Link href="/blog"><a>ブログ</a></Link></li>
                            <li><Link href="/board"><a>掲示板</a></Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
            <main>{children}</main>
            <footer>&copy; Next.js Demo</footer>
        </div>
    )
}