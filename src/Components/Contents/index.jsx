import classes from "src/Components/Contents/Contents.module.css";
import Link from "next/link";
const ITEMS = [
  {
    href: "/inputCalculator",
    title: "新規作成1",
    description: "ここからスタートします",
  },
  {
    href: "/",
    title: "一覧",
    description: "一覧管理します",
  },
  {
    href: "/userSetting",
    title: "ユーザ管理",
    description: "ユーザの設定を管理します",
  }
];

export function Contents() {

  return (
    <>
      {ITEMS.map((item) => {
            return (
              <>
                <Link
                  href={item.href}
                  className={classes.link}
                >
                  <div className={classes.content}>
                    <div>
                      <h2>{item.title}</h2>
                    </div>
                    <div>
                      <p>最終資産</p>
                      <p>最終利益</p>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </Link>
              </>
            )
          })}


    </>
  )
}