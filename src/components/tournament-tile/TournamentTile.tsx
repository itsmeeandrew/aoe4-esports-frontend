import styles from "./TournamentTile.module.css"
import Image from "next/image"
import { Payload } from "@/common"
import { formatDateFromString } from "@/common/util"
import DrilldownButton from "../drilldown-button/DrilldownButton"

export default function TournamentTile({ data }: { data: Payload.Tournament }) {
  const { startDate, endDate, logoUrl, name, tier, id } = data;
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image 
          src={logoUrl} 
          alt={`Tournament logo for ${name}`} 
          width={120} 
          height={120} />
      </div>
      <div className={styles.information}>
        <h1>{name}</h1>
        <p>{formatDateFromString(startDate)} - {formatDateFromString(endDate)}</p>
        <p>{tier} tier</p>
      </div>
      <div className={styles.actions}>
        <DrilldownButton
          text="View Details"
          to={`/tournaments/${id}`}/>
      </div>
    </div>
  )
}