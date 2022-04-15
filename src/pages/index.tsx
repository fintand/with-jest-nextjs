import Head from 'next/head'
import { TestComponent } from '@/components/TestComponent/TestComponent';

import styles from './index.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/public/favicon.ico" />
      </Head>

      <TestComponent />
    </div>
  )
}
