import { Payload } from "@/common"
import styles from "./SeriesTile.module.css"
import Image from "next/image"
import DrilldownButton from "../drilldown-button/DrilldownButton";
import { formatDateTimeFromString } from "@/common/util";

interface SeriesTileProps {
  data: Payload.Series
}

export default function SeriesTile(props: SeriesTileProps) {
  const { id, awayPlayer, awayScore, homePlayer, homeScore, date, time, tournament, tournamentRound, tournamentRoundPhase } = props.data;
  const isHomeWinner = homeScore > awayScore;

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image 
          width={100}
          height={100}
          src={"https://liquipedia.net/commons/images/a/a4/Elite_Classic_allmode.png"}
          alt={`Tournament logo for ${tournament}`}
        />
        <h4>{tournamentRoundPhase}</h4>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.results}>
          <div className={ isHomeWinner ? styles.seriesWinner : styles.seriesLoser}>
            <p>{homePlayer}</p>
            <p>{homeScore}</p>
          </div>
          <div className={ isHomeWinner ? styles.seriesLoser : styles.seriesWinner}>
            <p>{awayPlayer}</p>
            <p>{awayScore}</p>
          </div>
        </div>
        <div className={styles.subWrapper}>
          <div className={styles.information}>
            <p>{formatDateTimeFromString(date, time)}</p>
            <p>{tournamentRound}</p>
          </div>
          <div className={styles.actions}>
            <DrilldownButton
              text="View Matches"
              to={`/series/${id}`} />
          </div>
        </div>
      </div>
    </div>
  )
}