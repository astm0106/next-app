import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/stylecomp/Panel.module.css'

type Props = {
    title?: string
    imgUrl?: string
    link?: string
}

export default function Panel({ title, imgUrl, link }: Props) {
    const panelTitle = title || "メンテナンス中"
    const panelImgUrl = imgUrl || "/images/kouji_maintenance.png"
    const pageLink = link || ""

    //稼働中のパネル
    if (panelTitle !== "メンテナンス中") {
        return (
            <Link href={pageLink}>
                <div className={styles.gridItem}>
                    <Image src={panelImgUrl} width={100} height={100} alt="My avatar" />
                    <p>{panelTitle}</p>
                </div>
            </Link>
        )
    }
    //メンテナンス中のパネル
    else {
        return (
                <div className={styles.gridItemInvalid}>
                    <Image src={panelImgUrl} width={100} height={100} alt="My avatar" />
                    <p>{panelTitle}</p>
                </div>
        )
    }
}