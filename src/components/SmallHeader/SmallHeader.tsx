import Image from "next/image";
import avatar from "../avatar.png";
import styles from "./SmallHeader.module.css";
import Link from "next/link";

export function SmallHeader() {
  return (
    <header className={styles.container}>
      <Image
        className={styles.avatar}
        src={avatar}
        unoptimized
        alt="The Startup CTO"
        width={100}
        height={100}
      />
      <br />
      <Link href="/">
        <a className={styles.link}>Home</a>
      </Link>
      <a
        className={styles.link}
        href="https://twitter.com/intent/follow?original_referer=https%253A%252F%252Fstartup-cto.net%252F&ref_src=twsrc%5Etfw&region=follow_link&screen_name=The_Startup_CTO&tw_p=followbutton"
      >
        Follow on Twitter
      </a>
    </header>
  );
}
