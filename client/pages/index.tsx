import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import PaymentCard from './components/PaymentCard'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>System payments</title>
        <meta name="description" content="system payments" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PaymentCard></PaymentCard>
    </div>
  )
}

export default Home
