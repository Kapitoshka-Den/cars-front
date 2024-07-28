import React from 'react'
import Image from 'next/image'
import styles from './header.module.scss'
import Marks from '../cars/marks'

export default function Header() {
  return (
    <header className={styles.header}>
      <Image
        src="	https://xn--80aqfgda6as.xn--p1ai/img/logo.webp"
        width={130}
        height={36}
        alt="logo"
      />
      <Marks />
    </header>
  )
}
