import { useSeriesInTournament } from "@/common/swr/swr";
import styles from "./TournamentParticipants.module.css";

interface TournamentParticipantsProps {
  tournamentId: string
}

export default function TournamentParticipants(props: TournamentParticipantsProps) {
  const { series, isLoading, error } = useSeriesInTournament(props.tournamentId);
  
  if (error) {

  }

  if (isLoading) {
    return (
      <h2>Loading...</h2>
    )
  }

  if (series) {
    const participants = Array.from(new Set([...series.map(s => s.homePlayer), ...series.map(s => s.awayPlayer)]))
      .sort((a, b) => {
        a = a.toLowerCase();
        b = b.toLowerCase();
        if (a === b) return 0;
        else return a < b ? -1 : 1;
      })
      .map(p => {
      return (
        <div className={styles.participant}>
          <h3>{p}</h3>
        </div>
      )
    })

    return (
      <div className={styles.container}>
        {participants}
      </div>
    )
  }
}