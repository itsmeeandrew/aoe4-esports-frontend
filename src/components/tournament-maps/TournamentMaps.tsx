import { useMapsInTournament } from "@/common/swr/swr";
import styles from "./TournamentMaps.module.css";
import Map from "../map/Map";

interface TournamentMapsProps {
  tournamentId: string
}

export default function TournamentMaps(props: TournamentMapsProps) {
  const { maps, error, isLoading } = useMapsInTournament(props.tournamentId);

  if (error) {
    
  }

  if (isLoading) {

  }
  
  if (maps) {
    const mapElements = maps.map(m => (
      <div className={styles.map}>
        <Map name={m} size={240} />
      </div>
    ))
      
    return (
      <div className={styles.container}>
        {mapElements}
      </div>
    )
  }

}