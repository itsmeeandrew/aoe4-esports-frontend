import Link from "next/link"
import { BsArrowRight } from "react-icons/bs"
import styles from "./DrilldownButton.module.css"

interface DrilldownButtonProps {
  text: string,
  to: string
}

export default function DrilldownButton(props: DrilldownButtonProps) {
  return (
    <Link
      href={props.to}>
      <button className={styles.viewDetails}>
        {props.text}
        <span>
          <BsArrowRight />
        </span>
      </button>
    </Link>
  )
}