import styles from "./Navigation.module.css"
import Link from "next/link"
import { HiArrowTopRightOnSquare } from "react-icons/hi2"

export default function Navigation() {
  return (
    <div className={styles.container}>
      <div className={styles.containerLogo}>
        <Link href="/">
          <h1>AoE IV Esports</h1>
        </Link>
      </div>
      <div className={styles.containerLinks}>
        <div>
          <Link href="/">Search</Link>
        </div>
        <div>
          <Link href="https://docs.google.com/spreadsheets/d/12CKvt3uO1NWBL3DsBN0adcynPUcuOIpCkobvgtymJq8/edit#gid=0" target="_blank">
            ATR points
            <span>
              <HiArrowTopRightOnSquare />
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}