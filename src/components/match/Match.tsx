import { Payload } from "@/common"
import Image from "next/image"
import styles from "./match.module.css"
import { getImageName } from "@/common/util";

interface MatchProps {
  data: Payload.Match,
  homePlayer: string,
  awayPlayer: string
}

export default function Match(props: MatchProps) {
  const { homeCivilization, awayCivilization, map, winnerPlayer } = props.data;
  const getResultClass = (player: string) => (player === winnerPlayer ? styles.winner : styles.loser)

  return (
    <div className={styles.container}>
      <div className={styles.homeCivilization}>
        <Image
          className={`${styles.image} ${getResultClass(props.homePlayer)}`}
          width={175}
          height={100}
          alt={`${homeCivilization} flag`}
          src={`/images/civilizations/${getImageName(homeCivilization)}.webp`} />
        <h3>{homeCivilization}</h3>
      </div>
      <div className={styles.map}>
        <Image
          className={styles.image}
          width={140}
          height={140}
          alt={`${homeCivilization} flag`}
          src={`/images/maps/${getImageName(map)}.png`} />
        <h3>{map}</h3>
      </div>
      <div className={styles.awayCivilization}>
        <Image
          className={`${styles.image} ${getResultClass(props.awayPlayer)}`}
          width={175}
          height={100}
          alt={`${awayCivilization} flag`}
          src={`/images/civilizations/${getImageName(awayCivilization)}.webp`} />
        <h3>{awayCivilization}</h3>
      </div>
    </div>
  )
}