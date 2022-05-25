import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>rin chat</title>
        <meta name="description" content="a decentralised chat application with end to end encryption" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href='/app'>rin</a>
        </h1>

      </main>

    </div>
  )
}

export default Home