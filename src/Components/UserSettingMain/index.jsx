import styles from "src/Components/UserSettingMain/UserSettingMain.module.css";
import Link from "next/link";


export function UserSettingMain() {
  return (
    <>
      <main className={styles.main}>

        <p>ユーザ・パスワード</p>
        <p>バージョン</p>
        <p>レビューを書く</p>
        <p>利用規約</p>
        <p>プライバシーポリシー</p>
        <Link href="/">
          <button>戻る</button>
        </Link>

      </main>
    </>
  )
}