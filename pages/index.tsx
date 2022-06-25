import Layout from '../components/layout'
import Panel from '../components/Panel'
import styles from '../styles/stylecomp/Home.module.css'

export default function About() {
    return (
        <Layout
            title="ホーム"
            description="ホーム"
        >
            <h1>ホーム</h1>
            <div className={styles.container} >
                <Panel title="ブログ" imgUrl="/images/tabi_camera_nikki.png" link="/blog"></Panel>
                <Panel title="掲示板" imgUrl="/images/keijiban_harigami.png" link="/board"></Panel>
                <Panel></Panel>
                <Panel></Panel>
            </div>

        </Layout>
    )
}