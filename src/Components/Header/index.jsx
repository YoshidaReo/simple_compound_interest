import classes from "src/components/Header/Header.module.css";
import Link from "next/link";

export function Header(props) {
  console.log(props);
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