import { useSeriesInTournament } from "@/common/swr/swr";
import styles from "./TournamentResults.module.css";
import SeriesTile from "../series-tile/SeriesTile";
import Tabs from "../tabs/Tabs";
import { useState, useEffect } from "react";
import { Component } from "@/common";

interface TournamentResultsProps {
  tournamentId: string
}

type TabTree = {
  round: Component.TabData,
  roundPhases: Component.TabData[]
}[]

export default function TournamentResults(props: TournamentResultsProps) {
  const { series, isLoading, error } = useSeriesInTournament(props.tournamentId);

  const [tabTree, setTabTree] = useState<TabTree>();
  const [activeTournamentRoundTab, setActiveTournamentRoundTab] = useState<Component.TabData>();
  const [activeTournamentRoundPhaseTab, setActiveTournamentRoundPhaseTab] = useState<Component.TabData>();

  useEffect(() => {
    if (series) {
      const tournamentRounds = Array.from(new Set(series.map(s => s.tournamentRound))).map(tr => ({ key: tr, value: tr }));
      
      const tabTree: TabTree = tournamentRounds.map(tr => {
        const tournamentRoundPhases = Array.from(
          new Set(series.filter(s => s.tournamentRound === tr.value).map(s => s.tournamentRoundPhase))
        ).map(trp => ({ 
          key: `${tr.key}_${trp}`, 
          value: trp
        }));

        return {
          round: tr,
          roundPhases: tournamentRoundPhases
        }
      });

      setTabTree(tabTree)
      setActiveTournamentRoundTab(tabTree[0].round)
      setActiveTournamentRoundPhaseTab(tabTree[0].roundPhases[0])
    }
  }, [series])

  useEffect(() => {
    if (tabTree) {
      setActiveTournamentRoundPhaseTab(tabTree.find(tab => tab.round.key === activeTournamentRoundTab?.key)?.roundPhases[0])
    }
  }, [activeTournamentRoundTab])

  if (error) {
    return (
      <div className={styles.container}>
        <h2>The data could not be loaded.</h2>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className={styles.container}>
        <h2>Loading...</h2>
      </div>
    )
  }

  if (series && tabTree) {
    const trts = tabTree.map(tt => tt.round);
    const trpts = tabTree.find(tt => tt.round === activeTournamentRoundTab)!.roundPhases;

    const seriesTiles = series
      .filter(s => (
        (s.tournamentRound === activeTournamentRoundTab?.value && s.tournamentRoundPhase === activeTournamentRoundPhaseTab?.value)
      ))
      .map(s => (
        <div key={s.id} className={styles.seriesTile}>
          <SeriesTile
            data={s} 
            showDrilldown={true} 
          />
        </div>
      ))

    return (
      <div className={styles.container}>
        <Tabs tabs={trts} onTabChange={setActiveTournamentRoundTab} />
        <Tabs tabs={trpts} onTabChange={setActiveTournamentRoundPhaseTab} />
        <div className={styles.seriesContainer}>
          {seriesTiles}
        </div>
      </div>
    )
  }
}