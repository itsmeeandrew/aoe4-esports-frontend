import { Payload } from "@/common"
import styles from "./SeriesTile.module.css"
import Image from "next/image"
import DrilldownButton from "../drilldown-button/DrilldownButton";
import { formatDateTimeFromString } from "@/common/util";
import Conditional from "../common/conditional/Conditional";

interface SeriesTileProps {
  data: Payload.Series,
  showDrilldown: boolean
}

export default function SeriesTile(props: SeriesTileProps) {
  const { id, awayPlayer, awayScore, homePlayer, homeScore, date, time, tournament, tournamentRound, tournamentRoundPhase, logoUrl } = props.data;
  const isHomeWinner = homeScore > awayScore;

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image 
          width={props.showDrilldown ? 120 : 150} 
          height={props.showDrilldown ? 120 : 150}
          src={logoUrl}
          alt={`Tournament logo for ${tournament}`}
        />
        <Conditional
          condition={props.showDrilldown}>
          <h4>{tournamentRoundPhase}</h4>
        </Conditional>
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
          <div className={`${styles.information} ${props.showDrilldown ? null : styles.informationNoDrilldown}`}>
            <p>{tournamentRound}</p>
            <Conditional
              condition={!props.showDrilldown}>
              <p><b>{tournamentRoundPhase}</b></p>
            </Conditional>
            <p>{formatDateTimeFromString(date, time)}</p>
          </div>
          <Conditional
            condition={props.showDrilldown}>
            <div className={styles.actions}>
              <DrilldownButton
                text="View Matches"
                to={`/series/${id}`} />
            </div>
          </Conditional>
        </div>
      </div>
    </div>
  )
}