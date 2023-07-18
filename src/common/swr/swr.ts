import useSWR from "swr"
import { Payload } from ".."

export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

export function useTournament(id: string) {
  const { data, error, isLoading } = useSWR<Payload.Tournament>(`http://localhost:8080/api/tournaments/${id}`, fetcher)
  
  return {
    tournament: data,
    isLoading,
    error
  }
}

export function useSeriesInTournament(tournamentId: string) {
  const { data, error, isLoading } = useSWR<Payload.Series[]>(`http://localhost:8080/api/series?tournamentId=${tournamentId}`, fetcher)

  return {
    series: data,
    isLoading,
    error
  }
}