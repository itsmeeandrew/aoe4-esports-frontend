import Match from "@/components/match/Match";
import styles from "./page.module.css";
import { Payload } from "@/common";
import SeriesTile from "@/components/series-tile/SeriesTile";

async function getMatches(id: string): Promise<Payload.Match[]> {
  const res = await fetch(`http://localhost:8080/api/matches?seriesId=${id}`)
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }
  return res.json()
}

async function getSeries(id: string): Promise<Payload.Series> {
  const res = await fetch(`http://localhost:8080/api/series/${id}`)
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }
  return res.json()
}

export default async function SeriesDetails({ params }: { params: { id: string } }) {
  const series = await getSeries(params.id)
  const seriesElement = 
    <SeriesTile
      data={series}
      key={series.id}
      showDrilldown={false} />
  
  const matches = await getMatches(params.id)
  const matchElements = matches.map(m => (
    <>
      <hr className={styles.divider}></hr>
      <Match 
        data={m}
        key={m.id}
        homePlayer={series.homePlayer}
        awayPlayer={series.awayPlayer}
      />
    </>
  ))
  
  return (
    <div className={styles.container}>
      <div className={styles.seriesContainer}>
        {seriesElement}
      </div>
      <div className={styles.header}>
        <h2 className={styles.homePlayerName}>{series.homePlayer}</h2>
        <h2 className={styles.mapName}>Map</h2>
        <h2 className={styles.awayPlayerName}>{series.awayPlayer}</h2>
      </div>
      <div className={styles.matchesContainer}>
        {matchElements}
      </div>
    </div>
  )
}