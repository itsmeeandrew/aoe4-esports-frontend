import { useState, useEffect } from "react";
import styles from "./Tabs.module.css";
import { Component } from "@/common";

interface TabsProps {
  tabs: Component.TabData[],
  onTabChange: Function
}

export default function Tabs(props: TabsProps) {
  const [activeTab, setActiveTab] = useState(props.tabs[0]);
  
  const getActiveClassIfActive = (tab: Component.TabData) => {
    if (activeTab.key === tab.key) return styles.activeTab;
    else return null;
  }

  useEffect(() => {
    if (!(props.tabs.find(t => t.key === activeTab.key))) {
      setActiveTab(props.tabs[0])
    } 
  }, [props.tabs])

  const handleTabChange = (tab: Component.TabData) => {
    setActiveTab(tab);
    props.onTabChange(tab);
  }

  const tabElements = props.tabs.map(t => (
      <button
        key={t.key} 
        className={`${styles.tab} ${getActiveClassIfActive(t)}`}
        onClick={() => handleTabChange(t)}>
          {t.value}
      </button>
  ))

  return (
    <div className={styles.tabs}>
      {tabElements}
    </div>
  )
}