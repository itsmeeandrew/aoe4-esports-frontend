import styles from "./TournamentTile.module.css"
import Image from "next/image"
import { Payload } from "@/common"
import { shortDateFormatter } from "@/common/util"
import Link from "next/link"
import { BsArrowRight } from "react-icons/bs"

export default function TournamentTile({ data }: { data: Payload.Tournament }) {
  const startDate = new Date(data.startDate)
  const endDate = new Date(data.endDate)

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image 
          src={data.logoUrl} 
          alt={`Tournament logo for ${data.name}`} 
          width={120} 
          height={120} />
      </div>
      <div className={styles.information}>
        <h1>{data.name}</h1>
        <p>{shortDateFormatter.format(startDate)} - {shortDateFormatter.format(endDate)}</p>
        <p>{data.tier} tier</p>
      </div>
      <div className={styles.actions}>
        <Link
          href={`/tournament/${data.id}`}
        >
          <button className={styles.viewDetails}>
            View Details 
            <span>
              <BsArrowRight />
            </span>
          </button>
        </Link>
      </div>
    </div>
  )
}