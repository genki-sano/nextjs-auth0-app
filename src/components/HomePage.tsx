import { UserArea } from '@/components/UserArea'
import styles from '@/styles/Home.module.css'

export const HomePage: React.VFC = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href='https://nextjs.org'>Next.js!</a>
        </h1>
        <UserArea />
      </main>
    </div>
  )
}
