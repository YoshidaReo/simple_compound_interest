import styles from "src/Components/Main/Main.module.css";
import Link from "next/link";
import {Contents} from 'src/Components/Contents'


import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export function Main() {
  return (
    <>
      <main className={styles.main}>

        <Contents />



        <p>新規作成</p>

      </main>
    </>
  )
}