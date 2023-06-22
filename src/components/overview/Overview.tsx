import styles from "./Overview.module.css"

interface OverviewProps {
  bgColor: string,
  children: React.ReactNode,
  headerBgColor: string,
  headerText: string
}

export default async function Overview(props: OverviewProps) {
  const { bgColor, children, headerBgColor, headerText } = props;

  return (
    <div className={styles.container} style={{ backgroundColor: bgColor}}>
      <div className={styles.header} style={{ backgroundColor: headerBgColor}}>
        <h1>{headerText}</h1>
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}