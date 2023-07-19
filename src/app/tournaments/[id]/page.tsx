"use client";

import styles from "./page.module.css";
import Image from "next/image";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsPersonFill, BsBroadcastPin } from "react-icons/bs";
import { GiBiceps } from "react-icons/gi";
import { formatDateFromString, getTwitchNameFromUrl } from "@/common/util";
import { HiArrowTopRightOnSquare } from "react-icons/hi2"
import Link from "next/link";
import { useState } from "react";
import { useTournament } from "@/common/swr/swr";
import Conditional from "@/components/common/conditional/Conditional";
import TournamentResults from "@/components/tournament-results/TournamentResults";
import Tabs from "@/components/tabs/Tabs";
import { Component } from "@/common";
import TournamentParticipants from "@/components/tournament-participants/TournamentParticipants";

export default function TournamentDetails({ params }: { params: { id: string } }) {
  const [tab, setTab] = useState<Component.TabData>({ key: "Results", value: "Results"});
  const { tournament, error, isLoading } = useTournament(params.id);

  if (error) {
    return (
      <div className={styles.container}>
        <h1>There was an error loading this page. :(</h1>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className={styles.container}>
        <h1>Loading...</h1>
      </div>
    )
  }

  if (tournament) {
    const broadcastTwitchUsername = getTwitchNameFromUrl(tournament.twitchUrl);
    const handleTabChange = (newTab: Component.TabData) => {
      setTab(newTab);
    }
    const tabs: Component.TabData[] = [
      {
        key: "Results",
        value: "Results"
      }, {
        key: "Maps",
        value: "Maps"
      }, {
        key: "Participants",
        value: "Participants"
      }
    ];
    
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.logoContainer}>
            <Image
              src={tournament.logoUrl}
              width={170}
              height={170}
              alt={`Tournament logo for ${tournament.name}`} />
          </div>
          <div className={styles.informationContainer}>
            <h1 className={styles.title}>{tournament.name}</h1>
            <div className={styles.information}>
              <FaRegCalendarAlt />
              <span>{formatDateFromString(tournament.startDate)} - {formatDateFromString(tournament.endDate)}</span>
            </div>
            <div className={styles.information}>
              <BsPersonFill />
              <span>{tournament.format}</span>
            </div>
            <div className={styles.information}>
              <GiBiceps />
              <span>{tournament.tier} tier</span>
            </div>
            <div className={styles.information}>
              <BsBroadcastPin />
              <span>
                <Link href={`https://twitch.tv/${broadcastTwitchUsername}`} target="_blank">
                  {broadcastTwitchUsername.toUpperCase()}
                </Link>
                <HiArrowTopRightOnSquare />
              </span>
            </div>
          </div>
        </div>

        <div className={styles.tabContainer}>
          <Tabs tabs={tabs} onTabChange={handleTabChange} />
        </div>

        <div>
          <Conditional condition={tab.key === "Results"}>
            <TournamentResults tournamentId={params.id} />
          </Conditional>

          <Conditional condition={tab.key === "Participants"}>
            <TournamentParticipants tournamentId={params.id} />
          </Conditional>
        </div>
      </div>
    )
  }
}