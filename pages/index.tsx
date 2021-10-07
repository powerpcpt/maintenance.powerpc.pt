import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>POWER PC - MANUTENÇÃO</title>
        <meta name="description" content="powerpc.pt" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          EM <a href="https://powerpc.pt">MANUTENÇÃO</a>
        </h1>

        <p className={styles.description}>
          A nossa plataforma encontra-se em uma atualização de segurança.
        </p>
      </main>

      <footer className={styles.footer}>
      <span className={styles.logo}>
            <Image src="/favicon.png" alt="powerpc.pt" width={16} height={16} />
          </span>
      </footer>
    </div>
  )
}

export default Home
