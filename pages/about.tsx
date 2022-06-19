import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

export default function About() {
    return (
        <div>
            <Layout
                title="自己紹介タイトル"
                description="自己紹介概要"
            >
                <p>自己紹介</p>
            </Layout>
        </div>
    )
}