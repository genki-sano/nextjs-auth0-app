import type { NextPage } from 'next'
import Head from 'next/head'
import { LoginButton } from '@/components/login'
import { LogoutButton } from '@/components/logout'
import styles from '@/styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Auth0 App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href='https://nextjs.org'>Next.js!</a>
        </h1>
        <LoginButton />
        <LogoutButton />
      </main>
    </div>
  )
}

export default Home
