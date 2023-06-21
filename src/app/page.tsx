import styles from './page.module.css'
import TournamentsOverview from '@/components/tournaments-overview/TournamentsOverview'

export default function Home() {
  return (
    <div className={styles.main}>
      <TournamentsOverview></TournamentsOverview>
    </div>
  )
}