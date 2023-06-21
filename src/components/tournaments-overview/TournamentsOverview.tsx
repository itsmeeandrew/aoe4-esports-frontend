import TournamentTile from "../tournament-tile/TournamentTile"
import styles from "./TournamentsOverview.module.css"

async function getOngoingTournaments() {
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

export default async function TournamentsOverview() {
  const ongoingTournaments = await getOngoingTournaments()
  const ongoingTournamentTiles = ongoingTournaments.map(ot => (
    <TournamentTile 
      key={ot.id}
      data={ot} />
  ))

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Ongoing Tournaments</h1>
      </div>
      <div className={styles.content}>
        {ongoingTournamentTiles}
      </div>
    </div>
  )
}