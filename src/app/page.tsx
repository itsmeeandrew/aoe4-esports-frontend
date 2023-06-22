import { Payload } from '@/common'
import styles from './page.module.css'
import Overview from '@/components/overview/Overview'
import TournamentTile from '@/components/tournament-tile/TournamentTile'

async function getOngoingTournaments(): Promise<Payload.Tournament[]> {
  return [
      {
        "endDate": "2023-06-18",
        "format": "ONE_VS_ONE",
        "id": "The_Elite_Classic",
        "logoUrl": "https://liquipedia.net/commons/images/a/a4/Elite_Classic_allmode.png",
        "name": "The Elite Classic",
        "startDate": "2023-05-27",
        "tier": "S",
        "twitchUrl": "https://www.twitch.tv/egctv"
      }
  ]
}

export default async function Home() {
  const ongoingTournaments = await getOngoingTournaments()
  const ongoingTournamentTiles = ongoingTournaments.map(ot => (
    <TournamentTile 
      key={ot.id}
      data={ot}
    />
  ))

  return (
    <div className={styles.main}>
      <Overview
        bgColor='var(--tournament-bg)'
        headerText='Ongoing Tournaments'
        headerBgColor='var(--tournament-header-bg)'
      >
        {ongoingTournamentTiles}
      </Overview>
    </div>
  )
}