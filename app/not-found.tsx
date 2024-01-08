import Link from "next/link";
import styles from "./page.module.scss";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className="returnLink">
        Return Home
      </Link>
    </div>
  );
}
