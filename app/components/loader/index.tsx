import styles from "./loader.module.scss";
import Image from "next/image";

export default function Loader() {
  return (
    <div className={styles.loaderContainer}>
      <Image src="/images/logo.png" alt="logo" width={250} height={120} className={styles.pulsing} />
    </div>
  );
}
