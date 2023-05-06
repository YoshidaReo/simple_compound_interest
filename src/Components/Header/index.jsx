import classes from "src/Components/Header/Header.module.css";
import Link from "next/link";

export function Header(props) {
  return (
    <>
      <header className={classes.header}>
          <h2 className={classes.anchor}>{props.title}</h2>
          <Link href="/userSetting">
            <button className={classes.anchor}>設定</button>
          </Link>
      </header>
    </>
  )
};