import Link from "next/link";
import styles from "./navbar.module.scss";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.linkContainer}>
        <span>Mini</span>
        <Image src="/images/logo.png" alt="logo" width={125} height={60} />
      </Link>
    </nav>
  );
}
